import React, { useEffect, useState } from 'react';
import SingleService from '../../Services/Services/SingleService/SingleService';




const Suggestions = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/get4rand?quantity=4')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])





    return (
        <section>
            <div className='container mb-5'>
                <div className="suggestion-title mb-3">
                    <h3 style={{
                        color: '#404145',
                        fontWeight: '600'
                    }}>More Services From Me</h3>
                </div>
                <div className="row row-cols-2 row-cols-lg-4 g-4">
                    {
                        services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Suggestions;