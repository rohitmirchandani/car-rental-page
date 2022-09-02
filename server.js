const express = require("express");
const bodyParser = require('body-parser')
const app = express();
let PORT = process.env.PORT || 3000;
let path = require("path");

const accountSid = 'AC42cae1b7938f4ccdccad9bbc4c4bf2b0'; 
const authToken = '3cc1de4040123324ba6bf4cb589e20d7'; 
const client = require('twilio')(accountSid, authToken); 



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/api/submit-form', (req, res)=>{
    let message = 
    `${req.body.name}\n${req.body.mobile}\n${req.body.message}`
    client.messages 
      .create({ 
         body: message, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919826814072' 
       }) 
      .then(message => console.log(message.sid)) 
      .catch(()=>{
        res.sendStatus(503)
      })
      .done(()=>{
        res.sendStatus(200)
      })
      
})

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res, next)=>{

// })


app.listen(PORT, ()=>{
    console.log(`Server is succesfully running of port ${PORT}`)
})

