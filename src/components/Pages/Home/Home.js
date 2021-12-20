import React from 'react';
import Header from '../../Global/Header/Header';
import Features from './Features/Features';
import HeroArea from './HeroArea/HeroArea';

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroArea />
            <Features />
        </>
    );
};

export default Home;