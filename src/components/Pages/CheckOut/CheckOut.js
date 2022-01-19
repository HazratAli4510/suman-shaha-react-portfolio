import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Global/Header/Header';

const CheckOut = () => {
    let params = useParams()
    params = params.id.split('&')
    const serviceId = params[0]
    const packageName = params[1]

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    const price = packageName === 'basic' ? service?.packages?.basic?.price : packageName === 'standard' ? service?.packages?.standard?.price : service?.packages?.premium?.price

    return (
        <>
            <Header />
            <main id="checkout">
                <div className="container">
                    <h1>{price}</h1>
                </div>
            </main>
        </>
    );
};

export default CheckOut;