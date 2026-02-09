"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const CardComponent = ({ allPro }) => {
    // console.log(allPro);

    let handleAddToCart = (item) => {
        console.log(item);

        fetch("http://localhost:8000/api/v1/product/addaddtocart",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        cartId:item._id,
                        cartOwnerId:"6914a6bea738f3ae8326bf8d",
                        quantity:1
                    }
                )
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })


    }

    return (
        <Container>
            <Row>
                {
                    allPro.map(item => (
                        <Col key={item._id} xs lg="3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Link href={`/product/${item._id}`}><Card.Title>{item.name}</Card.Title></Link>
                                    <Card.Text>
                                        {item.saleprice
                                            ?
                                            <span className='text-red-500 text-2xl'>{item.saleprice}$
                                                <del className='text-black'> {item.regularprice}$</del></span>
                                            :
                                            <span className='text-red-500 text-2xl'>{item.regularprice}$</span>}

                                    </Card.Text>
                                    <Button onClick={() => handleAddToCart(item)} variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))

                }

            </Row>

        </Container>
    )
}

export default CardComponent