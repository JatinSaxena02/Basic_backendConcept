const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // this line is basically used to access public(static file) file(like-- css, js, images etc) in the backend.
app.set("view engin", "ejs"); // this is used to render ejs pages.

// HOme page route
app.get("/", (req, res) => {
  res.render("index.ejs"); // if we are using render method to render some ejs pages, the pages must present in your views folder.
});

app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome, 🙋‍♂️ ${username} `);
});
app.get("/author/:username/:age", (req, res) => {
  const username = req.params.username;
  const age = req.params.age;
  res.send(`Welcome, 🙋‍♂️ ${username} your age is ${age}`);
});

app.listen(3000, () => {
  console.log("Server is running..");
});
