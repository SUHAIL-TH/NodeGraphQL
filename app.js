const express =require("express")
const {ApolloServer} =require("apollo-server-express")
const typeDefs = require('./schema');
const resolvers = require('./resolver');


const connectDb=require("./config/config")

 async function startServer(){
    //connect mongodb database
    await connectDb()
    
    const app=express()

    //create a apollo server
    const server =new ApolloServer({
        typeDefs,
        resolvers
    })


    await server.start();
    //Apply the appollo middleware to express app
    server.applyMiddleware({app})

    app.listen({port:4000},()=>{
        console.log("server started to listing to port 4000")
    })
 }

 startServer()