import React from "react";
import Image from 'react-bootstrap/Image';
import ShopNow from "../components/shop-now-button";
import Card1 from "../components/card";
import cityImage from "../images/banner.jpg";

function HomePage() {
    const backgroundStyles = {
        height: "100%",
        background: "lightblue"
    };

    const imageStyles = {
        borderBottom: "1px solid #000000"
    };

    const centeredContainerStyles = {
        display: "flex",
        justifyContent: "center",
        padding: "25px 0"
    };

    return (
        <div style={backgroundStyles}>
            <div>
                <Image style={imageStyles} src={cityImage} fluid />
            </div>
            <div style={centeredContainerStyles}>
                <h1>Welcome to our site!</h1>
            </div>
            <div style={centeredContainerStyles}>
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div style={centeredContainerStyles}>
                <ShopNow />
            </div>
        </div>
    );
};

export default HomePage;