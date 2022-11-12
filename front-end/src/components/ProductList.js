import React, { useEffect, useState } from "react";
const ProductList=()=>{
    
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        // let result= fetch("http://localhost:5000/products");
        // console.log(result);
    
        getProducts();
    
    },[])
    const getProducts=async()=>{
        
        let result=await fetch("http://localhost:5000/products");
        result=await result.json();
        console.log(result.length)
        setProducts(result);

    }
 
    const deleteProduct=async(id)=>{
        // console.warn(id);
        
        let result=await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        
        result=await(result.json());
        
        // getProducts();
        console.log("delete _res",result);
        if(result)
        {
            alert("record is deleted");
        
            
            // getProducts();

        }
        else{
            alert("ho ho")
        }
        
    }
    return (
        <div className="product-list">
            <h3>BOOK List</h3>   
            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Categoary</li>
                <li>Operation</li>
            </ul>
         
            {
                products.length>0 ? products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}> Delete </button></li>
                    
                </ul>

                ):<h1>No products</h1>
            }

        </div>
    )
}
export default ProductList;