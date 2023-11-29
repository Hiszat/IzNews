import { Container } from 'react-bootstrap';
import List from './List';
const Containers = (articles) => {
    return ( 
    <Container>
        <h1 className="mt-3">Welcome to headline</h1>
        <List articles={articles} />
    </Container>
    );
}
 
export default Containers;