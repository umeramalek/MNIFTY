import React from "react";

// maybe import Login/ Logout functionality here aswell?
// not sure if this would be a good location for it this early on

// These will be required for later from components
// Contents to display the List of Products
import ProductList from "../components/ProductList";
// Display the category menu
import CategoryMenu from "../components/Categorymenu";
// This should have all the cart information on it
import Cart from "../components/Cart";

const Main = () => {
    return (
        <div className = "container-fluid">
            {/* This is the whole page except the navbar */}

            <Cart />
            <CategoryMenu />
            <ProductList />
            
        </div>
    )
}

export default Main;