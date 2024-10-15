import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import cityImage from "../images/city.jpg";

function Card1() {
    const cardStyles = {
        width: "18rem",
        margin: "0 30px",
        boxShadow: "2px 2px 2px 1px rgb(0 0 0 / 10%)"
    };

    return (
        <>
            <Card style={cardStyles}>
            <Card.Img variant="top" src={cityImage}/>
            <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Sapiente reiciendis consectetur quisquam nesciunt quam possimus natus 
                sed quo officiis neque explicabo distinctio eveniet minima.
                </Card.Text>
                <Button variant="link">Learn More</Button>
            </Card.Body>
            </Card>
        </>
    );
};

export default Card1;