import React from "react";
const Product=(props)=>{
    const {id , productName ,price ,productImage}=props.data;

return(
<div className="col-3">
<img src={productImage} className="w-100 h-50 rounded-circle"></img>
<h5>{productName}</h5>
<p>Price:{price}$</p>
<button className="btn btn-info btn-sm">+</button>
<span className="mx-1"> 0 </span>
<button className="btn btn-info btn-sm">-</button>
</div>

)
}
export default Product;