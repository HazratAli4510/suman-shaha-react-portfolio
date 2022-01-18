import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const ServicesMain = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mt-4'>
            <div className='row row-cols-2  row-cols-md-3 row-cols-lg-4 g-3'>
                {
                    services.length ?
                        /* services.map(service => <SingleService minPirce={service.packages.basic.price} slug={service.slug} thumbnail={service.thumbnail} title={service.title} id={service._id} key={service._id} />)
                        : */
                        services.map(service => <SingleService service={service} key={service._id} />)
                        :
                        <div style={{
                            height: '100vh',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            right: '50%',
                            transform: 'translate(-50%,-50%)'
                        }} className="d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};




export default ServicesMain;