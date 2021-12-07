import React from "react";

// Contents to display the List of Products
import ProductList from "../components/ProductList";
// Display the category menu
import CategoryMenu from "../components/Categorymenu";
// This should have all the cart information on it
import Cart from "../components/Cart";

const Main = () => {
    return (
        <div className = "container-fluid">
            <Cart />
            <CategoryMenu />
            <ProductList />
        </div>
    )
}
export default Main;





