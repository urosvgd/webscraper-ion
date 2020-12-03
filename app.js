const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');
const { getData } = require('./scrape')

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(json())

app.use(express.static(path.join(__dirname, 'build')))

app.post('/api', (req, res) => {
    const pageNumber = req.body.pageNumber;
    const category = req.body.category;

    getData(pageNumber, category).then(response => {
        console.log(response)
        res.json(response)
    });
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/ionClient/build/index.html'));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`))