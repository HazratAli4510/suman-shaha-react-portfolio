import React, { useEffect, useState } from 'react';
import SingleService from '../../Services/Services/SingleService/SingleService';




const Suggestions = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/get4rand')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])





    return (
        <div className='container'>
            <div className="row row-cols-lg-4 g-4">
                {
                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Suggestions;