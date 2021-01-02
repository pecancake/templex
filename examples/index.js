const templex = require('../templex');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var html = templex.compile("a", {"test": templex.compile("b", {"testTwo": "hotdog"})});
    res.send(html);
})

app.use(express.static('public'));

app.listen(80);
console.log("Ready");