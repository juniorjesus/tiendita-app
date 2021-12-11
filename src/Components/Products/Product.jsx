import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.js";

const Product = () => {
  const url = "https://frontend-geeks.herokuapp.com/allProducts";

  const [product, setProduct] = useState([]);
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div  style={{display: "flex", justifyContent: "center"}}>
      {product.map((productos) => (
        <Cards key={productos.id} list={productos} set={setCarrito} get={carrito} />
      ))}
    </div>
  );
};

export default Product;
