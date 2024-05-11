require("dotenv").config();
const {MongoClient,ServerApiVersion}=require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";

//console.log(uri);

const options={
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
};


let client;
const connectToMongoDB = async ()=>{
    if(!client){
        try{
            client=await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB");
        }catch(e){
            console.log(e);
        }
    }

    return client;
};

const getConnectedClient = ()=> client;
module.exports ={connectToMongoDB,getConnectedClient}