const express = require('express')
const bodyParser = require('body-parser');

var md5 = require('md5');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
res.send("Hello browser, updated!");
});

app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "justmejuice" && md5(req.body.password) == 'a4a254cc265d75222df6d97cfb759297'){  
        res.send("Welcome!")
     }else{
        res.send("Who goes there?")
        }
});

app.listen(port, () =>{});

