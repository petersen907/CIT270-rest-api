const express = require('express')

const port = 3000;

const app = express();

app.get('/', (req, res) => {
res.send("Hello browse");
});

app.listen(port, () =>{});
