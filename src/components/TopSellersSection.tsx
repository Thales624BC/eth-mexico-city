import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import CarouselCard from "./CarouselCard";
function TopSellersSection()
{
    return (
    <Container mx-auto>
        <h1 className="mx-auto text-center">Top Sellers</h1>
        <Row>
            <CarouselCard bookName="I am a Robot"/>
            <CarouselCard bookName="The happy caterpillar"/>
        </Row>
    </Container>
    );
}
export default TopSellersSection;