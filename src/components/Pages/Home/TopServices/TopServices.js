import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleService from '../../Services/Services/SingleService/SingleService';
import './TopServices.css'

const TopServices = () => {

    const [services, setServices] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section id='topServices' className='py-5'>
            <div className="container">
                <div className="heading">
                    <h5>Most viewed and all-time top-selling services</h5>
                    <h1>My Top Selling Services</h1>
                </div>
                <div className="main">

                    <Carousel responsive={responsive}>

                        {
                            services.map(service => <div className="mx-2"><SingleService service={service}></SingleService></div>)
                        }

                    </Carousel>

                </div>
            </div>
        </section>
    );
};

export default TopServices;