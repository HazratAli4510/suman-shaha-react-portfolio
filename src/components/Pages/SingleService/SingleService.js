import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Global/Footer/Footer';
import Header from '../../Global/Header/Header';
import HeroArea from './HeroArea/HeroArea';
import './SingleService.css'
import Suggestions from './Suggestions/Suggestions';

const SingleService = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const [service, setService] = useState({})

    document.title = service.title || 'Loading...'

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
            <Suggestions></Suggestions>
            <Footer></Footer>
        </main>
    );
};

export default SingleService;