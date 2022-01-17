import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Global/Header/Header';
import HeroArea from './HeroArea/HeroArea';
import './SingleService.css'

const SingleService = () => {

    const [service, setService] = useState({})

    document.title = service.title || 'Service'

    const params = useParams()
    const url = `http://localhost:8080/services?service=${params.slug}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [url])




    return (
        <main className='signPageService' >
            <Header></Header>
            {
                service.title ? <HeroArea service={service}></HeroArea> :
                    <div className='text-center' style={{
                        height: '100vh',
                        marginTop: '40vh'
                    }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
        </main>
    );
};

export default SingleService;