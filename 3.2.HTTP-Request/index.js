import  express  from "express";
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>about page</h1>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>contact</h1> <p>7847874949</p>")
})

app.get("/home",(req,res)=>{
    res.send("<h1>welocme to node js backend development</h1>")
})

app.listen(port,()=>{
    console.log(`server is listening http://localhost:${port}`);
})