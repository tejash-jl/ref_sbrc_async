var express = require("express");
var app = express();
let port = 3652;
app.use(express.json());

app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.post("/callback", (req, res, next) => {
    console.log(req.body)
    res.json({"status": true});
});