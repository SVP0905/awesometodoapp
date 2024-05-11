require("dotenv").config();
const express = require('express');
const {connectToMongoDB} = require("./database");
const path = require("path");


const app = express();
app.use(express.json());

const router=require('./routes');
app.use("/api",router);

app.use(express.static(path.join(__dirname, "build")));
app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname, "build/ndex.html"));
});


const port = process.env.PORT || 3000;

const startServer = async () =>{
    await connectToMongoDB();
    app.listen(port,() => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};

startServer();
/*
app.get("/hello",(req,res)=>{
    res.status(200).json({ msg: "GET REQUEST TO /hello" });
})

const port=5050;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
*/