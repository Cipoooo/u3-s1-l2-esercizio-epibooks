import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fantasy from '../../fantasy.json';




const AllTheBooks = () => {
    return(
      <Container className='container-fluid h-auto d-flex justify content-evenly'>
        <Row className='gx-3 gy-3'>
           {
            fantasy.map((element) =>{
                return(
            <>
            <Col className='col-4' key={element.asin}>
                <Card style={{}}>
                <Card.Img variant="top"src={element.img} style={{height:"400px"}} />
                <Card.Body style={{height: "150px"}}>
                <Card.Title><h3 className='text-balck fs-4 fw-5'>{element.title}</h3></Card.Title>
                <Card.Text>{element.price}</Card.Text>
               </Card.Body>
               </Card>
            </Col>
            </>      
                )
            })}
         </Row>
        </Container>
    );
};
export default AllTheBooks;