// ekpress kullanımı
const express = require("express");
const app = express();
app.set("view engine","ejs")
// routes
app.use("/products/:id", (req, res) => {
  res.render("urunler-datails") ;
 
});
app.use("/products", (req, res) => {
  res.render("urunler");
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
