"use client"
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const AddToCartComponent = ({ cartdata }) => {
    // console.log(cartdata);
    let handleQuantiy=(item,type)=>{
        // console.log(item.cartId._id);
        console.log(type);
        
        
        fetch(`http://localhost:8000/api/v1/product/addaddtocart?type=${type}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        cartId:item.cartId._id,
                        quantity:1
                    }
                )
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
        

    }

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantiy</th>
                        <th>Sub Total</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartdata.map(item => (
                            <tr key={item._id}>
                                <td>

                                    <Image
                                        src={`http://localhost:8000${item.cartId.image}`}
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        unoptimized
                                    />
                                </td>
                                <td>{item.cartId.name}</td>
                                <td >
                                    <button onClick={()=>handleQuantiy(item,"decrement")} className='border border-black px-3'>-</button>
                                    <button className='mx-2'>{item.quantity}</button>
                                    <button onClick={()=>handleQuantiy(item,"increment")} className='border border-black px-3'>+</button>
                                </td>
                                <td>{item.cartId.saleprice?item.cartId.saleprice:item.cartId.regularprice}$</td>
                                <td>{item.cartId.saleprice?item.cartId.saleprice*item.quantity:item.cartId.regularprice*item.quantity}$</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Container>
    )
}

export default AddToCartComponent