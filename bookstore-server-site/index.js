const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

app.use(cors());
const data = require('./data/data.json');

app.get('/',(req,res)=>{
    res.send('Server is running')
})
app.get('/data',(req,res)=>{
    res.send(data)
})
app.get('/books/:id',(req,res)=>{
    const id =req.params.id;
    const product = data.find((d) => d.isbn13===id)
    res.send(product)
})



app.listen(port,()=>{
    console.log(`Dragon api is running on ${port}`)
})