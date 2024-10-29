import React from "react";
const Product=(props)=>{
    const {id , productName ,price ,productImage}=props.data;
  return (
    <div className="col-4 w-25">
      {/* دسترسی به propsکه ارسال کرده بودیم */}

      <img src={productImage}  className=" w-100  h-50 rounded-circle "  ></img>
      <h6 className="fs-4">{productName}</h6>
      <p>price :{price}$</p>
      <button className="btn btn-info btn-sm" >+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm" >-</button>
        {/* دسترسی به propsکه ارسال کرده بودیم */}
    </div>
  );
}; 
export default Product;
