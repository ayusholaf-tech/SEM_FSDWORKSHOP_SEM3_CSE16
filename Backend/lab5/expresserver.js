import express from 'express';
const app = express();
const userdata =[  
{
    id:101,
    name : "cm",
    email : "cm@example.com"
}
];
app.get("/",(req,res)=>{
    res.status(200).jason({
    message:"welcome to express server",
});
})
app.link("/msg",(req,res)=>{
    res.status(200).json({
        message:"Hello is welcome to my server",
    });
})