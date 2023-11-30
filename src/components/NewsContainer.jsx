import React from "react";
import { Container } from "react-bootstrap";
import List from "./List";

function NewsContainer({articles}) {
    return (
    <Container>
        <h1 className="mt-3">Welcome to headline</h1>
        <List articles={articles} />
    </Container>
    );
}

export default NewsContainer;