var express = require("express"),
app = express();
var bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/lib'));

// Home Route
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen("3000", () => console.log("Application started on port #3000"));