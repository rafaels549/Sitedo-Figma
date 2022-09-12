const express = require("express")

const app = express();
app.listen(1000, ()=>
{
    console.log("Servidor rodando")
})
app.use(express.static(__dirname + "/assests"))
app.get("/", (req,res)=>
{
    res.sendFile(__dirname + "/index.html")
   
   
})
app.get("/contato", (req,res)=>
{
    res.sendFile(__dirname+"/contato.html")
     
})

app.get("/sobre", (req,res)=>
{
    res.sendFile(__dirname+"/sobre.html")
})


