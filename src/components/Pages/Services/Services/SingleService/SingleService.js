import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ title, thumbnail, slug }) => {

    const url = `/service/${slug}`
    const nvaigate = useNavigate()

    return (
        <div className='col' id='single-service-from-services'>
            <div onClick={() => nvaigate(url)} className="card bg-white h-100">
                <div className='card-image'>
                    <img className='img-fluid' src={`data:image/jpeg;base64,${thumbnail}`} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="fs-6 title">{title}</h5>
                    <div className="rating">
                        <i className="fas fa-star"></i><span className='ms-1'>5.0</span>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                    <div className="save-btn">
                        <button title='Add to wishlist' className='btn shadow-none p-0 p-sm-1'><i className="fas fa-heart"></i></button>
                    </div>
                    <div className="price">
                        <span className='me-1'>STARTING AT</span>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;