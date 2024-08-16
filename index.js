const express=require('express')

const app=express()
const path=require('path')


const port=3001
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))



app.listen(port,()=>{

    
    console.log(`Port is Listening on ${port} `)})



app.get('/',(req,res)=>{

    const num=Math.floor(Math.random()*(9999-1000))+1000
res.render('index',{num})
})

app.get('/about',(req,res)=>{

    const num=Math.floor(Math.random()*(9999-1000))+1000
res.render('about',{num})
})