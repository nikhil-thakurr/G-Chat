const http=require("http");
const express=require("express");
const cors=require("cors");
const  SocketIO  = require("socket.io");
const app=express();

const port=4500 || process.env.PORT 

const server=http.createServer(app);

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Working");
})

const io=SocketIO(server);

io.on("connection",()=>{
    console.log("New Connection");
})

server.listen(port,()=>{
    console.log(`server is runnning http://localhost:${port}`);
})