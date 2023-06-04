const express  = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
// const userRoutes = require("./server/routes/userRoutes");
// const messageRoute = require("./server/routes/messagesRoutes");
// const socket  = require("socket.io");
// const path = require("path");
require('dotenv').config();

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// app.use("/api/auth",userRoutes);
// app.use("/api/messages",messageRoute);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("DB connection succesfull");
}).catch((err)=>{
    console.log(err.message);   
});
// if(process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,'/public/build')));

//     app.get('*',(req,res)=>{
//         res.sendFile(path.join(__dirname, 'public','build','index.html'));
//     })
// }else{
//     app.get('/',(req,res)=>{
//         res.send('APi running');
//     })
// }
const server = app.listen(process.env.PORT ||5000,()=>{
    console.log(`Server started on Port ${process.env.PORT}`)

});
// const io = socket(server,{
//     cors:{
//         origin:"http://localhost:3000",
//         credentials:true,
//     },
// });
// global.onlineUsers = new Map();
// io.on("connection",(socket)=>{
//     global.chatSocket = socket;
//     socket.on("add-user",(userId)=>{
//    onlineUsers.set(userId,socket.id);
//     });
//     socket.on("send-msg",(data)=>{
//         const sendUserSocket = onlineUsers.get(data.to);
//         if(sendUserSocket){
//             socket.to(sendUserSocket).emit("msg-recieve",data.message);
//         }
//     })
// })
