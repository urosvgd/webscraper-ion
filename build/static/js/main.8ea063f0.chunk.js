(this.webpackJsonpionClient=this.webpackJsonpionClient||[]).push([[1],{50:function(e,t,n){e.exports=n(86)},56:function(e,t,n){var r={"./ion-action-sheet.entry.js":[88,5],"./ion-alert.entry.js":[89,6],"./ion-app_8.entry.js":[90,7],"./ion-avatar_3.entry.js":[91,17],"./ion-back-button.entry.js":[92,18],"./ion-backdrop.entry.js":[93,44],"./ion-button_2.entry.js":[94,19],"./ion-card_5.entry.js":[95,20],"./ion-checkbox.entry.js":[96,21],"./ion-chip.entry.js":[97,22],"./ion-col_3.entry.js":[98,45],"./ion-datetime_3.entry.js":[99,10],"./ion-fab_3.entry.js":[100,23],"./ion-img.entry.js":[101,46],"./ion-infinite-scroll_2.entry.js":[102,47],"./ion-input.entry.js":[103,24],"./ion-item-option_3.entry.js":[104,25],"./ion-item_8.entry.js":[105,26],"./ion-loading.entry.js":[106,27],"./ion-menu_3.entry.js":[107,28],"./ion-modal.entry.js":[108,8],"./ion-nav_2.entry.js":[109,14],"./ion-popover.entry.js":[110,9],"./ion-progress-bar.entry.js":[111,29],"./ion-radio_2.entry.js":[112,30],"./ion-range.entry.js":[113,31],"./ion-refresher_2.entry.js":[114,11],"./ion-reorder_2.entry.js":[115,16],"./ion-ripple-effect.entry.js":[116,48],"./ion-route_4.entry.js":[117,32],"./ion-searchbar.entry.js":[118,33],"./ion-segment_2.entry.js":[119,34],"./ion-select_3.entry.js":[120,35],"./ion-slide_2.entry.js":[121,49],"./ion-spinner.entry.js":[122,13],"./ion-split-pane.entry.js":[123,50],"./ion-tab-bar_2.entry.js":[124,36],"./ion-tab_2.entry.js":[125,15],"./ion-text.entry.js":[126,37],"./ion-textarea.entry.js":[127,38],"./ion-toast.entry.js":[128,39],"./ion-toggle.entry.js":[129,12],"./ion-virtual-scroll.entry.js":[130,51]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=56,e.exports=a},58:function(e,t,n){var r={"./ion-icon.entry.js":[132,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=58,e.exports=a},69:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(26),l=n.n(i),c=n(21),s=n(3),m=(n(59),n(60),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(69),function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.j,null,o.a.createElement(s.t,{color:"dark"},o.a.createElement(s.s,{size:"large"},"Web Scrapper with Ionic & NodeJS"))),o.a.createElement(s.h,{className:"ion-padding no-scroll"},o.a.createElement(s.i,{className:"ion-text-center ion-margin"},o.a.createElement(s.o,null,o.a.createElement(s.g,{className:"ion-align-self-center ion-justify-self-center"},t)))))}),u=n(46),p=n.n(u),j=function(e){var t=e.itemsName,n=e.itemsImage,r=e.itemsLowSellPrice,a=e.itemsPrice,i=e.itemsLink,l=e.itemsRating,c=e.itemPriceSave;return o.a.createElement(s.c,null,o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(s.k,{style:{width:"30vh",height:"30vh"},src:n})),o.a.createElement(s.e,null,o.a.createElement(s.f,{style:{fontSize:"1.1em"},color:"dark"},t)),o.a.createElement(s.d,null,o.a.createElement(s.r,{color:"dark"},"* MP = maloprodaja",o.a.createElement("h3",null,r),o.a.createElement("h3",null,"Cena:",a),o.a.createElement("h3",null,"Link: ",o.a.createElement("a",{href:i},"Do proizvoda")),o.a.createElement("h3",null,"Rating: ",l),o.a.createElement("p",null,c))))};!function(e){e.laptop="https://www.winwin.rs/laptop-i-tablet-racunari/laptop-notebook-racunari.html",e.desktop="https://www.winwin.rs/racunari-i-komponente/desktop-racunari/desktop-racunari-bez-os.html",e.smart="https://www.winwin.rs/mobilni-i-fiksni-telefoni/mobilni-telefoni/smart-mobilni-telefoni.html",e.maticne="https://www.winwin.rs/racunari-i-komponente/racunarske-komponente/maticne-ploce.html",e.procesori="https://www.winwin.rs/racunari-i-komponente/racunarske-komponente/procesori.html",e.monitori="https://www.winwin.rs/pc-periferije-monitori/monitori-870/monitori.html"}(r||(r={}));var y=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(r.laptop),u=Object(c.a)(l,2),y=u[0],d=u[1],f=Object(a.useState)(1),w=Object(c.a)(f,2),E=w[0],h=w[1],k=Object(a.useState)(!0),b=Object(c.a)(k,2),v=b[0],g=b[1],_=Object(a.useState)(""),O=Object(c.a)(_,2),N=O[0],P=O[1];Object(a.useEffect)((function(){p.a.post("http://192.168.88.233:4000/api",{pageNumber:E,category:y}).then((function(e){var t=e.data;i(t),g(!1)})).catch((function(e){var t=404===e.response.status?"Resource not found":"Unexpected error occured";P(t),g(!1)}))}),[E,v,y]);var S=function(){h(E+1),window.scrollTo(0,0)},C=function(){1!==E&&(h(E-1),window.scrollTo(0,0))};return o.a.createElement(s.a,null,o.a.createElement(m,null,v?o.a.createElement(s.n,{isOpen:v,message:"Molimo vas sacekajte"}):null,N&&o.a.createElement("p",{className:"error"},N),o.a.createElement(s.l,null,o.a.createElement(s.m,null,"Kategorija"),o.a.createElement(s.p,{value:y,placeholder:"Odaberite",onIonChange:function(e){d(e.detail.value),h(1)}},o.a.createElement(s.q,{value:r.laptop},"Laptop"),o.a.createElement(s.q,{value:r.desktop},"Desktop"),o.a.createElement(s.q,{value:r.maticne},"Maticne Ploce"),o.a.createElement(s.q,{value:r.procesori},"Procesori"),o.a.createElement(s.q,{value:r.smart},"Mobilni Telefoni"),o.a.createElement(s.q,{value:r.monitori},"Monitori"))),o.a.createElement(s.o,null,o.a.createElement(s.g,{className:"ion-justify-self-center"},o.a.createElement(s.b,{color:"dark",onClick:C},"Nazad"),o.a.createElement(s.b,{color:"dark",onClick:S},"Dalje"))),o.a.createElement(s.o,{className:"ion-justify-content-center"},o.a.createElement(s.g,null,n.map((function(e,t){return o.a.createElement(j,{key:t,itemsName:e.itemsName,itemsImage:e.itemsImage,itemsLink:e.itemsLink,itemsPrice:e.itemsPrice,itemPriceSave:e.itemPriceSave,itemsLowSellPrice:e.lowSellPrice,itemsRating:e.itemsRating})})))),o.a.createElement(s.b,{color:"dark",onClick:C},"Nazad"),o.a.createElement(s.b,{color:"dark",onClick:S},"Dalje"),N&&o.a.createElement("p",{className:"error"},N)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,3,4]]]);
//# sourceMappingURL=main.8ea063f0.chunk.js.map