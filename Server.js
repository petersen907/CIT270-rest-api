const express = require('express')
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
res.send("Hello browser, updated!");
});

app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "justmejuice" && req.body.password == "cangetin"){
        res.send("Welcome!")
     }else{
        res.send("Who goes there?")
        }
});

app.listen(port, () =>{});

