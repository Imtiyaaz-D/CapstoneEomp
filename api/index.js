const { express, routes } = require("./controller");
const db = require("./config");
const path = require("path");
const app = express();
const cors = require("cors");
// Importing error handling middlware
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const errorHandling = require('./middleware/ErrorHandling.js')
const port = +process.env.PORT || 3000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080/");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Requst-Methods","*");
    res.header("Access-Contol-Allow-Headers","*");
    res.header("Access-Control-Expose","Authorization");
    next()
});
app.use(express.static("./static")),
app.use(express.urlencoded({
    extend: false,
}),
cors(),
cookieParser(),
routes
);
routes.get("^/$|CapstoneEomp",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../api/static/html/index.html"))
});

app.listen(port,() =>{
    console.log(`The server is running on port ${port}`);
})