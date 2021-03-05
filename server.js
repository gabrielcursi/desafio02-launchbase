const express = require("express");
const nunjucks = require("nunjucks");
const articles = require("./data");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("courses", { articles });
});

server.get("/about", function (req, res) {
  const about = {
    logo: "https://rocketseat.com.br/icons/icon-512x512.png",
    name: "Rocketseat",
    description:
      "Trazendo o melhor e mais completo conteúdo gratuíto de programação para quem quer começar a desenvolver sites.",
    languages: [
      { name: "HTML 5" },
      { name: "ReactJS" },
      { name: "React Native" },
      { name: "Java Script" },
    ],
    links: [
      {
        url: "https://github.com/Rocketseat",
        name: "Github",
      },
      {
        url: "https://www.instagram.com/rocketseat_oficial/",
        name: "Instagram",
      },
      {
        url: "http://www.facebook.com/rocketseat/",
        name: "Facebook",
      },
    ],
  };

  return res.render("about", { about });
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(3000, function () {
  console.log("Server is running");
});
