import React from 'react';
import Footer from '../../Global/Footer/Footer';
import Header from '../../Global/Header/Header';
import Features from './Features/Features';
import HeroArea from './HeroArea/HeroArea';
import TopServices from './TopServices/TopServices';

const Home = () => {
    document.title = 'Suman Shaha - A Professinal Digital Marketer'
    return (
        <>
            <Header></Header>
            <HeroArea />
            <Features />
            <TopServices />
            <Footer />
        </>
    );
};

export default Home;