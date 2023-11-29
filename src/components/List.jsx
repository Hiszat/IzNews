import React from "react";
import {Button, Card} from 'react-bootstrap';

function List({ articles }){
    return ( 
        <div className="row mx-auto p-3 ms-5">
        {articles.map((item, index) => (
          <Card key={index} className="my-4 mx-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.urlToImage} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" href={item.url} target="_blank">
                Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}
 
export default List;