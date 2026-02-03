"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const AddToCartComponent = ({ cartdata }) => {

    // dummy state to force rerender
    const [refresh, setRefresh] = useState(false);

    const calculateTotal = () => {
        let sum = 0;
        cartdata.forEach(item => {
            sum += (item.cartId.saleprice ?? item.cartId.regularprice) * item.quantity;
        });
        return sum;
    };

    let handleQuantiy = (item, type) => {

        if (type === "increment") {
            item.quantity += 1;
        } 
        else if (type === "decrement" && item.quantity > 1) {
            item.quantity -= 1;
        }

        // 🔥 force UI update
        setRefresh(!refresh);

        // backend call (same as yours)
        fetch(`http://localhost:8000/api/v1/product/addaddtocart?type=${type}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                cartId: item.cartId._id,
                quantity: 1
            })
        }).catch(err => console.log(err));
    };

    const total = calculateTotal();

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
                                        alt={item.cartId.name}
                                        width={50}
                                        height={50}
                                        unoptimized
                                    />
                                </td>
                                <td>{item.cartId.name}</td>
                                <td>
                                    <button
                                        onClick={() => handleQuantiy(item, "decrement")}
                                        className='border border-black px-3'
                                    >
                                        -
                                    </button>

                                    <span className='mx-2'>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => handleQuantiy(item, "increment")}
                                        className='border border-black px-3'
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    {(item.cartId.saleprice ?? item.cartId.regularprice)}$
                                </td>
                                <td>
                                    {(item.cartId.saleprice ?? item.cartId.regularprice) * item.quantity}$
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Tax(15%)</th>
                        <th>Delivery</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{total}$</td>
                        <td>{Math.round(total * 15 / 100)}$</td>
                        <td>100$</td>
                        <td>{total + Math.round(total * 15 / 100) + 100}$</td>
                    </tr>
                </tbody>
            </Table>

            <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
           </PayPalScriptProvider>
        </Container>
    )
}

export default AddToCartComponent
