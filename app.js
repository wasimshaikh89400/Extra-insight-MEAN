var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var cors = require("cors")
var path = require("path")
var routes = require("./Router/route")


var app = express();

app.use((req, res , next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*origin, X-Requested-With ,Content-Type, Accept")
    next();
})

// mongoDb Connection
mongoose.connect("mongodb://localhost:27017/PersonDetailsDB", { useNewUrlParser: true , useUnifiedTopology: true})

//successfully
mongoose.connection.on("connected", () => {
    console.log("connected to the data base");
})

//error
mongoose.connection.on("error", (err) => {
    if(err) console.log("error in databse connection" + err);
})

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//router
app.use("/api", routes)

//middleware
app.use(cors());


//body parser
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//router
app.get("/api", (req, res) => {
    res.send("foober")
})

//staic file
app.use(express.static(path.join(__dirname, 'public')));

//make server for node
app.listen(8080, () => {
    console.log("server run successfully at port");
})

