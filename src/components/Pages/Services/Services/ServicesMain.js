import React, { useEffect, useState } from 'react';
import Footer from '../../../Global/Footer/Footer';
import SingleService from './SingleService/SingleService';

const ServicesMain = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <main className='container my-4'>
                <div className='row row-cols-2  row-cols-md-3 row-cols-lg-4 g-3'>
                    {
                        services.length ?
                            services.map(service => <SingleService service={service} key={service._id} />)
                            :
                            <div className='text-center' style={{
                                height: '50vh',
                                marginTop: '40vh',
                                marginLeft: '25vw'
                            }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </main>
            {
                services.length && <Footer></Footer>
            }
        </>
    );
};




export default ServicesMain;