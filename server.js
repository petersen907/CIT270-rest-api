const express = require('express')
const bodyParser = require('body-parser');
const https = require('https')
const fs = require('fs')
const port = 3000;
const app = express();
var md5 = require('md5');

app.use(bodyParser.json());
app.get('/', (req, res) => {
res.send("Hello HTTPS!");
});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Listening...')
  })

app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "justmejuice" && md5(req.body.password) == 'a4a254cc265d75222df6d97cfb759297'){  
        res.send("Welcome!")
     }else{
        res.send("Who goes there?")
        }
});

//app.listen(port, () =>{});
