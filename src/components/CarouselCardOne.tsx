import React from "react";
import { Container, Card, Button } from "react-bootstrap";
type Props = {
    bookName: String
}
function CarouselCardOne
{
  return (
    <Card style={{ width: '25rem' }} className="mx-5">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>I am a Robot</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default CarouselCardOne;