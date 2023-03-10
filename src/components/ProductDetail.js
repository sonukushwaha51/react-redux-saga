import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";
import axios from "axios";


function ProductDetail() {
    
  const {skuId} = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        // fetch(`http://localhost:3000/product/${skuId}`).then(res => res.json())
        // .then(selectedProduct => setSelectedProduct(selectedProduct))
        
        axios.get(`http://localhost:3000/product/${skuId}`).then(selectedProduct => setSelectedProduct(selectedProduct.data))
    },[skuId])
    console.log(selectedProduct.name)
    return(
        <React.Fragment>
            <HeaderComponent />
                <div className="product-details-page">
                            <div className="pdp-product-id" key={selectedProduct.id}>
                                <h1>{selectedProduct.name}</h1>
                                <img src={selectedProduct.imgUrl} alt="Product" />
                            </div>
                </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default ProductDetail;