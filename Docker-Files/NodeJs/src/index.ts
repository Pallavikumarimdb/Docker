import express from "express";
import {PrismaClient} from "@prisma/client";


const app=express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res)=>{
    const data=await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.post("/", async (req, res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const data = await prismaClient.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        data,
        message:"User Created",
    })

})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})