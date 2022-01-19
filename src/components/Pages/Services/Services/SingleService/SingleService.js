import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './SingleService.css'

const SingleService = ({ service }) => {

    const { user } = useAuth()

    const url = `/service/${service.slug}`
    const nvaigate = useNavigate()

    return (
        <div className='col' id='single-service-from-services'>
            <div className="card bg-white h-100">
                <Link to={url}>
                    <div className='card-image'>
                        <img className='img-fluid' src={`data:image/jpeg;base64,${service.thumbnail}`} alt="" />
                    </div>
                </Link>
                <Link to={url} className='text-decoration-none'>
                    <div className="card-body">
                        <h5 className="fs-6 title">{service.title}</h5>
                        <div className="rating">
                            <i className="fas fa-star"></i><span className='ms-1'>5.0</span>
                        </div>
                    </div>
                </Link>
                <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                    <div className="save-btn">
                        {
                            user && <button onClick={() => console.log(service.id)} title='Add to wishlist' className='btn shadow-none p-0 p-sm-1'><i className="fas fa-heart"></i></button>
                        }
                    </div>
                    <div className="price" onClick={() => nvaigate(url)}>
                        <span className='me-1'>STARTING AT</span>
                        <span>${service.packages.basic.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;