var express = require("express"),
app = express();

app.get("/", (req, res) => {
    res.send("Hi there from express.");
});
app.listen("3000", () => console.log("Application started on port #3000"));