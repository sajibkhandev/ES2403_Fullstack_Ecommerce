import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = () => {
    return (
        <footer className='bg-blue-200 py-5'>
            <Container>
                <Row>
                    <Col>LOGO</Col>
                    <Col>
                     <ul className='flex flex-col gap-y-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Service</li>
                        <li>Blog</li>
                     </ul>
                    </Col>
                    <Col>
                     <ul className='flex flex-col gap-y-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Service</li>
                        <li>Blog</li>
                     </ul>
                    </Col>
                    <Col>
                     <ul className='flex flex-col gap-y-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Service</li>
                        <li>Blog</li>
                     </ul>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent