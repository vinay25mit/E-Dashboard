const express=require("express");
const cors=require("cors")
require("./db/config");
const Product=require("./db/Product");
// const mongoose=require("mongoose");
const User=require("./db/User")
const Cuser=require("./db/Cuser")
const Cproducts=require("./db/Cproducts")
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
// app.use(express.json());

// app.use(cors());

// const connectDB=async()=>{
//     // mongoose.connect("mongodb://localhost:27017/e-comm");
//     mongoose.connect('mongodb://localhost:27017/e-comm',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     family: 4,
// })
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model("products",productSchema);
//     const data=await product.find();
//     console.warn(data);
// }
// connectDB();
// app.use('/register', async (req, res, next)=> {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });
app.post("/register",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    // delete result.password();
    resp.send(result);
})
app.post("/cregister",async(req,resp)=>{
    let user=new Cuser(req.body);
    let result=await user.save();
    result=result.toObject();
    // delete result.password();
    console.warn(result);
    resp.send(result);
})
app.post("/login",async(req,resp)=>{
    // resp.send(req.body);
    // resp.send(req.body);
    if(req.body.password && req.body.email)
    {

            let user= await User.findOne(req.body).select("-password");
        if(user)
        {

            resp.send(user);
        }
        else{
            resp.send({result:"NO User Found"});
        }
    }
    else{
        resp.send({result:"NO User Found"});
    }
    
})
app.post("/ulogin",async(req,resp)=>{
    // resp.send(req.body);
    // resp.send(req.body);
    if(req.body.password && req.body.email)
    {

        let user= await Cuser.findOne(req.body).select("-password");
        if(user)
        {

            resp.send(user);
        }
        else{
            resp.send({result:"NO User Found"});
        }
    }
    else{
        resp.send({result:"NO User Found"});
    }
    
})
app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
});
app.get("/products",async(req,resp)=>{
    let products=await Product.find();
    
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result: "NO product foun"})
    }
})
app.get("/Cproducts",async(req,resp)=>{
    let products=await Cproducts.find();
    
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result: "NO product foun"})
    }
})
app.delete("/product/:id",async(req,resp)=>{
    // resp.send("working....");
    resp.send(req.params.id);
    const result=await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})
app.listen(5000);
