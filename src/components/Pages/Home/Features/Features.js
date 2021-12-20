import React from 'react';
import './Features.css'
import bars from '../../../../images/bars.png'
import marketing from '../../../../images/marketing.png'
import seo from '../../../../images/seo.png'

const Features = () => {

    const features = [
        {
            id: 1,
            name: "Business Stratagy",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: bars
        },
        {
            id: 2,
            name: "Facebook Marketing",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: marketing
        },
        {
            id: 3,
            name: "SEO",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: seo
        },
        {
            id: 4,
            name: "SMM",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: bars
        },
        {
            id: 5,
            name: "Facebook Marketing",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: marketing
        },
        {
            id: 6,
            name: "Facebook Marketing",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
            image: seo
        },
    ]

    return (
        <section id='features'>
            <div className="container">
                <h5 className='small-heading'>FEATURES</h5>
                <h1 className='heading'>What I Do</h1>
                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                    {
                        features.map(feature => <SingleFeatures feature={feature} key={feature.id} > </SingleFeatures>)
                    }
                </div>
            </div>
        </section>
    );
};

const SingleFeatures = ({ feature }) => {
    return (
        <div className="col overflow-hidden">
            <div className="box">
                <div className="icon">
                    <img src={feature.image} alt="" />
                </div>
                <div className="title">
                    {
                        feature.name.length < 18 ? <h2>{feature.name}</h2> : <h3>{feature.name}</h3>
                    }

                </div>
                <div className="description">
                    <p>I throw myself down among the tall grass by the stream as I
                        lie close to the earth.</p>
                </div>
            </div>
        </div>
    )
}


export default Features;