const express = require('express')
const app = express()
require('dotenv').config()


app.get("/",(req,res)=>{
    res.json("text ok")
})

const EMV_PORT = process.env.PORT || 4000

app.listen(EMV_PORT, () => {
    console.log(`Servidor corriendo 😂😍 http://localhost:${EMV_PORT}`)
})