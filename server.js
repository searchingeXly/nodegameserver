const express = require("express");

const app = express();

var count = 0;

app.get('/', (req, res) => {
    count++;
    res.send("Hi User #" + count.toString());
});

app.get('/user/:id', (req, res) => {

    var dummyData = {
        "userid": req.params["id"],
        "username": "searchingeXly",
        "wins": 10,
        "losses": 20,
        "someArray": [
            {name: "foo", value: 2.5 },
            {name: "bar", value: 7.1 },
            {name: "baz", value: 9000.001 },
        ]
    };
    res.json(dummyData);
});

app.listen(8000, () => {
    console.log("Server has started");
})