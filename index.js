require('dotenv').config()

const express = require('express')
const app = express()//express has lot of features like get,post,put etc so now variable app can use all the functionalities of expresss like  we can use app.get ,app.post 
const port = 3000//in computer there are lot of virtual server in 3000 is a free to use server 

app.get('/', (req, res) => {//here er using a call back function where we are giving a request and response 
  res.send('i am abhishek!')
})

app.get('/twitter',(req,res)=>{
    res.send('abhishektwitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>This is login </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//this is a server which you made 