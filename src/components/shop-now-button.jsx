import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Task 1: Integrating React-Bootstrap and Adding Buttons
function ShopNow() {
    const buttonStyles = {
        boxShadow: "2px 2px 2px 1px rgb(0 0 0 / 30%)"
    };

    return (
        <>
            <Button variant="primary" style={buttonStyles}>Shop Now</Button>
        </>
    );
};

export default ShopNow;