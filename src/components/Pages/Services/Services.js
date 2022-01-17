import React from 'react';
import Header from '../../Global/Header/Header';
import ServicesMain from './Services/ServicesMain';


const Services = () => {
    document.title = 'Services - Suman Shaha'
    return (
        <div style={{
            minHeight: '100vh'
        }}>
            <Header></Header>
            <ServicesMain></ServicesMain>
        </div>
    );
};

export default Services;