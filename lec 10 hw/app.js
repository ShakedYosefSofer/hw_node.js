// ספריית אקספרס

const express = require("express");

// מבצע מינפולציה על נתיבים בכתובות יו אר אל

const path = require("path");

// מפעיל שרת

const http = require("http");

const {routesInit} = require("./routes/configRoutes");
//  const indexR = require("./routes/index");
//  const usersR = require("./routes/users");

// מגדירים משתנה שהוא מייצג את האקפרס והיכולות שלו



const app = express();


// מגדירים את תקיית פאבליק כתקייה סטטית שחשופה לצד לקוח

app.use(express.static(path.join(__dirname,"public")));


routesInit(app);

// app.use("/",indexR);
// app.use("/users",usersR);
 

// app.use("/",(req,res) => {
//   res.json({msg:"express work"});
// })


//מפעיל שרת על הפורט 3001
const server = http.createServer(app);
server.listen(3001);