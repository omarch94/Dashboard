console.log(123);


// creation express server
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json())
// app.get('/openai',(req,res)=>{
//     res.send("mon premier ")
// })
app.use('/openai',require('./routes/openAIRoutes'))

app.listen(port,()=>console.log(`SERVER STARTED on port ${port}`))