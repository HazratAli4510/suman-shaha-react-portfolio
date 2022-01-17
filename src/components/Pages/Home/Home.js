import React from 'react';
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
        </>
    );
};

export default Home;