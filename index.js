// ekpress kullanımı
const express = require("express");
const app = express();
app.set("view engine","ejs")

const data = [
    {id: 1,name : "iphone 11", price: 10000,isActive : true},
    {id: 2,name : "iphone 12", price: 20000,isActive : true},
    {id: 3,name : "iphone 13", price: 30000,isActive : true},
    {id: 4,name : "iphone 14", price: 40000,isActive : true},
];
// routes
app.use("/products/:id", (req, res) => {
  res.render("product-datails") ;
 
});
app.use("/products", (req, res) => {
  res.render("products",{urunler : data});
});
app.use("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("server basladi yada yenilendi");
});

//  -------- saf node js
// var http = require("http");
// var fs = require("fs");

// var server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     fs.readFile("index.html", (err, html) => {
//       res.write(html);
//       res.end();
//     });
//   } else if (req.url == "/urunler") {
//     fs.readFile("urunler.html", (err, html) => {
//       res.write(html);
//       res.end();
//     });
//   } else {
//     fs.readFile("404.html", (err, html) => {
//       res.write(html);
//       res.end();
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("server 3000 de başladı");
// });
