// Express is a framework, which is built on top of nodejs. Express is used to create routes, creating serverside applications.
// As we know that Expressjs is a framework, so it follows strict rules.
// 1. Inorder to use express you need to first require it and store it in any variable.
// 2. "const app = express()" this line basically initializes an instance of an express application. now this "app" instance is an object which you can use to create routes,handle request,configure middleware and much more.
// 3. After creating routes, you need to tell you server that on which port you want to run your server,this is the syntex " app.listen(3000);  ".

const express = require("express");
const app = express();

// using "app.use" you can mount the middleware for specific path or router as well as you can mounte the middleware globally. This will always run first before any request if you have mounted it globally. But if you have mounted it in any specific route or path then it will run only when that route or path is called or we can say when request is initiated.
// Note- Middleware always runs first and then the request will pass forward.

// middleware function for profile page //
app.use("/profile", (req, res, next) => {
  console.log("middleware chale profile page ke liye");
  next();
});
// Home page route //
app.get("/", function (req, res) {
  res.send("Home Page");
});

// Profile page route //
app.get("/profile", function (req, res) {
  res.send("Profile page");
});

// profile page (if err occured) //
/* 
app.get("/profile", (req, res, next) => {
  const err = new Error("Something crashed..., wait...");
  next(err);
});
*/

//error handling in expressjs is done using special middleware function which  takes one extra argument 'err' for catching error that is occured during the request-response cycle.Error handling middleware is similar to regular middleware function.Regular middleware function take 3 arguments(req,res,next) and error handling middleware function take 4 arguments(err,req,res,next).

// This middleware is for error handling.//
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(3000);
