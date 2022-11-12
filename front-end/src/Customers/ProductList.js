import React, { useEffect, useState } from "react";
const ProductList=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{

        getProducts();
    },[])
    const getProducts=async()=>{
        let result=await fetch("http://localhost:5000/products");
        result=await result.json();
        setProducts(result);

    }
    const deleteProduct=async(id)=>{
        console.warn(id);
        
        let result=await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        result=await(result.json());
    
        // console.warn(result);
        if(result)
        {
            alert("record is deleted");
            getProducts();
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
                products.length>0 && products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}> Delete </button></li>
                    {/* <li><button o></button></li>                 */}
                </ul>

                )
            }

        </div>
    )
}
export default ProductList;