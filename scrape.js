const request = require('axios');
const cheerio = require('cheerio');

async function getData(page, url) {
    let scrapUrl = `${url}?p=${page}`;
    let scrapedData = [];
    const data = await request.get(scrapUrl).then(res => {
        if (res.status === 200) {
            const $ = cheerio.load(res.data);


            $('.products-grid li').each((i, elem) => {
                const itemsName = $(elem).children('h2').text().replace(/\n/g, '').trim();
                const itemsImage = $(elem).children('a').children('.products-grid__img').attr('src');
                let itemsPrice = $(elem).children('.price-box').children('span').text().replace(/\n/g, '').replace(/\s/g, "");
                let lowSellPrice = $(elem).children('.price-box').children('.mp-price').text().replace(/\n/g, '').replace(/\s/g, "").trim();
                let itemPriceSave = $(elem).children('.price-box').children('.saved-money').text().replace(/\n/g, '').replace(/\s/g, "").trim();
                const itemsLink = $(elem).children('a').attr('href');
                let itemsRating = $(elem).children('.ratings').text().replace(/\n/g, '').trim();

                if (itemsPrice === '') {
                    itemsPrice = $(elem).children('.price-box').children('.special-price').text().replace(/\n/g, '').replace(/\s/g, "")
                }

                // Check if you have name selected
                if (itemsName.length !== 0) {
                    if (itemsRating === '') {
                        itemsRating = '0';
                    }
                    // Add data you scraped from WinWin
                    scrapedData.push({
                        itemsImage,
                        itemsName,
                        lowSellPrice,
                        itemsPrice,
                        itemPriceSave,
                        itemsLink,
                        itemsRating
                    })
                }
            })
        }
        return scrapedData;
    })
    return data
}


module.exports = getData = getData;

// async function getData() {
//     try {
//         const data = request(url, (error, response, html) => {
//             let scrapedData = [];
//             if (!error && response.statusCode === 200) {
//                 const $ = cheerio.load(html);

//                 $('.products-grid li').each((i, elem) => {
//                     const itemsName = $(elem).children('h2').text().replace(/\n/g, '').trim();
//                     const itemsImage = $(elem).children('a').children('.products-grid__img').attr('src');
//                     let itemsPrice = $(elem).children('.price-box').children('span').text().replace(/\n/g, '').replace(/\s/g, "");
//                     let lowSellPrice = $(elem).children('.price-box').children('.mp-price').text().replace(/\n/g, '').replace(/\s/g, "").trim();
//                     let itemPriceSave = $(elem).children('.price-box').children('.saved-money').text().replace(/\n/g, '').replace(/\s/g, "").trim();
//                     const itemsLink = $(elem).children('a').attr('href');
//                     let itemsRating = $(elem).children('.ratings').text().replace(/\n/g, '').trim();

//                     if (itemsPrice === '') {
//                         itemsPrice = $(elem).children('.price-box').children('.special-price').text().replace(/\n/g, '').replace(/\s/g, "")
//                     }

//                     // Check if you have name selected
//                     if (itemsName.length !== 0) {
//                         if (itemsRating === '') {
//                             itemsRating = '0';
//                         }
//                         // Add data you scraped from WinWin
//                         scrapedData.push({
//                             itemsImage,
//                             itemsName,
//                             lowSellPrice,
//                             itemsPrice,
//                             itemPriceSave,
//                             itemsLink,
//                             itemsRating
//                         })
//                     }

//                 })
//             }
//             return scrapedData;
//         })

//     } catch (error) {
//         console.error(error)
//     }
// }

module.exports.getData = getData;