import React from "react";
import {
  Container,
  Button,
} from "react-bootstrap";
import logo from "../logo.svg";
function CustomHero() {
  const singleImageStyle = {
    height: "6rem",
    display: "block",
  };
    return <>
        <Container className="text-center p-5 mt-4 bg-secondary mb-4">
          <img className="mx-auto" style={singleImageStyle} src={logo}/>
          <h1>AI-Illustrated Books Marketplace</h1>
          <h5>Buy, Sell, and Trade Books as NFTs</h5>
          <Button className="mt-3">Mint your book</Button>
        </Container>
    </>
}
export default CustomHero;