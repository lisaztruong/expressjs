var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

// Router middle layer, which will be executed before any other routes.
// This route will be used to print the type of HTTP request the particular
// Route is referring to. IE get or post.
// Once the middle layer is defined, you must pass "next()"
// so that next router will get executed.
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

// The magic of Express Routing is we can assign the routes in order,
// so the last one will get executed when the incoming request is not matching any
// route. Well for us, it is the 404 case. (actually there isn't anything there)
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

// in terminal: npm start
// Visit localhost:3000 and view your first website.
