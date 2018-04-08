var express = require("express");
var cors = require("cors");
var pcBuild = require("./pcbuild");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post("/api/builds", function(req,res) {
    var newBuild = new pcBuild(req.body);
    newBuild.save()
        .then(saved => res.json(saved))
        // .catch(() => res.sendStatus(400))
        .catch((err) => res.status(400).json(err))
});

app.listen(3001);