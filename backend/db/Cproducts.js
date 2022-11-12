const mongoose =require("mongoose");
const ProductSchema=new mongoose.Schema({
    name:String,
    price:String,
    categoary:String,
    userId:String,
    company:String
});
module.exports=mongoose.model("Cproducts",ProductSchema);