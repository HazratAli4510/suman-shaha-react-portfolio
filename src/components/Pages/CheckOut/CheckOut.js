import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Global/Header/Header';
import useAuth from '../../hooks/useAuth';
import './CheckOut.css'



const CheckOut = () => {

    const { user } = useAuth()


    document.title = 'Secure Checkout'


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
    const selectedPackage = packageName === 'basic' ? service?.packages?.basic : packageName === 'standard' ? service?.packages?.standard : service?.packages?.premium

    const subtotal = (price / 100 * 3.5 + 0.35).toFixed(2);

    const totalPrice = parseFloat(price) + parseFloat(subtotal)

    const info = {
        product_name: service.title,
        product_profile: 'general',
        total_amount: totalPrice,
        cus_name: user.displayName,
        cus_email: user.email || '',
        product_category: service.category

    }

    const onPay = () => {

        fetch(`http://localhost:8080/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data)
            })

    }





    return (
        <>
            <Header />
            <main id="checkout">
                <div className="container mt-5">
                    <div className='box'>
                        <div className="row">


                            {/* Left side */}


                            <div className="col-md-6 col-lg-7 col-xl-8  left-side p-4">
                                <div className="row">
                                    <div className="col-6 col-md-5 col-lg-3">
                                        <img className='img-fluid' src={`data:image/jpeg;base64,${service.thumbnail}`} alt="" />
                                    </div>
                                    <div className="col-6 col-md-7 col-lg-9 title">
                                        <h4>{service.title}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="package mt-3">
                                        <h5 className='text-capitalize'>{packageName}</h5>
                                        <p>{selectedPackage?.meta}</p>
                                    </div>
                                    <div className="options">
                                        <ul className='list-style-none p-0'>
                                            {
                                                selectedPackage?.options.map(option => <SingleOption option={option} />)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5 col-xl-4 p-0 my-4 my-md-0">


                                {/* Right side */}

                                <div className="price-summery-box p-4">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className='text-uppercase'>{packageName}</h5>
                                        </div>
                                        <div className="col text-end">
                                            <h5>${price}</h5>
                                        </div>
                                    </div>
                                    <div className="row detailPack pb-3 mb-3">
                                        <div className="col">
                                            <span className='d-block my-1'><i className="fas fa-check"></i> {selectedPackage?.deliveryTime} {selectedPackage?.deliveryTime === '1' ? 'Day' : 'Days'} Days Delivery</span>

                                            <span className='d-block my-1'> <i className="fas fa-check"></i> {selectedPackage?.revisions === '-1' ? 'Unlimited' : selectedPackage?.revisions} {selectedPackage?.revisions === '1' ? 'Revision' : 'Revisions'} </span>
                                        </div>
                                    </div>
                                    <div className="row costing">
                                        <div className="row">
                                            <div className="col">
                                                <h6>Subtotal</h6>
                                            </div>
                                            <div className="col text-end">
                                                <h6>${parseFloat(price).toFixed(2)}</h6>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <h6>Service Fee</h6>
                                            </div>
                                            <div className="col text-end">
                                                <h6>${subtotal}</h6>
                                            </div>
                                        </div>

                                        <div className="row totalfield pt-2">
                                            <div className="col">
                                                <h6>Total</h6>
                                            </div>
                                            <div className="col text-end">
                                                <h6>${totalPrice.toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={onPay} className='btn w-100 my-4 shadow-none'>Confirm And Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};


const SingleOption = ({ option }) => {
    return (
        <li className='my-1'><i className="fas fa-check"></i> {option}</li>
    )
}



export default CheckOut;