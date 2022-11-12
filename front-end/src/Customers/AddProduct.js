import React from "react";

const AddProduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,setError]=React.useState(false)
    const addProduct=async()=>{
        console.warn(!name)
        if(!name || !price || !category || !company)
        {   setError(true)
            return false;
        }
        // return false

        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);
        let result=fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type": "application/json"

            }
        });
        result= (await result).json();
        // console.warn(result);
        result.then(res=>{
            console.warn(res)
        })
    }
    return(
        <div className="product">
            <h1>
                Add product
            </h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox"
            value={name} onChange={(e)=>{setName(e.target.value)}}
            />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}
            <input type="text" placeholder="Enter Product price" className="inputBox"
            value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
            {error && !price && <span className="invalid-input">Enter Valid price</span>}
            <input type="text" placeholder="Enter Product Category" className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            {error && !category && <span className="invalid-input">Enter Valid category</span>}
            <input type="text" placeholder="Enter Product category" className="inputBox"
            value={company} onChange={(e)=>{setCompany(e.target.value)}}
            />
            {error && !company && <span className="invalid-input">Enter Valid company</span>}
            <button onClick={addProduct} className="appButton">ADD Product</button>
        </div>
    )
}
export default AddProduct;