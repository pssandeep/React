var express = require("express"),
app = express();
var bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("HELLO FROM ROOT ROUTE.");
});

app.listen("3000", () => console.log("Application started on port #3000"));