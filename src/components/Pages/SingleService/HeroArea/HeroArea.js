import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroArea = ({ service }) => {

    const description = service?.description?.blocks || []



    return (
        <div className='container'>
            <div className="row my-5">


                {/* Left Section */}

                <div className="col-12 col-lg-7 col-8 pe-3 pe-lg-5">
                    <div className="title">
                        <h2>{service.title}</h2>
                    </div>
                    <div className="category">
                        <h6 className='mb-4'>Category: {service.category} </h6>
                    </div>
                    <div className="service-img">
                        <img className='border img-fluid w-100' src={`data:image/jpeg;base64,${service.mainImage}`} alt="" />
                    </div>
                    <div className="desctiption-box">
                        <div className="description-title">
                            <h5 className='my-5'>About This Service,</h5>
                        </div>
                        <div className="main-description">
                            {
                                description.map(block => <ServiceDescription key={block.id} block={block} ></ServiceDescription>)
                            }
                        </div>
                    </div>
                </div>

                {/* Right Section */}

                <div style={{
                    zIndex: '100'
                }} className="col-12 col-lg-5 col-4 p-0 border sticky-top pricing-box pb-4">
                    <ul className="nav nav-tabs justify-content-between" id="myTab" role="tablist">
                        <li className="nav-item flex-33" role="presentation">
                            <button className="nav-link active w-100" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic" type="button" role="tab" aria-controls="basic" aria-selected="true">Basic</button>
                        </li>
                        <li className="nav-item flex-33" role="presentation">
                            <button className="nav-link w-100" id="standard-tab" data-bs-toggle="tab" data-bs-target="#standard" type="button" role="tab" aria-controls="standard" aria-selected="false">Standard</button>
                        </li>
                        <li className="nav-item flex-33" role="presentation">
                            <button className="nav-link w-100" id="premium-tab" data-bs-toggle="tab" data-bs-target="#premium" type="button" role="tab" aria-controls="premium" aria-selected="false">Premium</button>
                        </li>
                    </ul>
                    <div className="tab-content px-4" id="myTabContent">
                        <SinglePackage serviceId={service._id} packageName='basic' packagea={service.packages.basic}></SinglePackage>
                        <SinglePackage serviceId={service._id} packageName='standard' packagea={service.packages.standard}></SinglePackage>
                        <SinglePackage serviceId={service._id} packageName='premium' packagea={service.packages.premium}></SinglePackage>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SinglePackage = ({ packageName, packagea, serviceId }) => {
    const navigate = useNavigate()
    return (
        <div className={`tab-pane fade ${packageName === 'basic' ? 'show active' : ''}`} id={packageName} role="tabpanel" aria-labelledby={`${packageName}-tab`}>
            <div>
                <div className="row justify-content-between my-3">
                    <div className="col">
                        <h5 className='text-uppercase'>{packageName}</h5>
                    </div>
                    <div className="col">
                        <h5 className='text-end'>${packagea.price}</h5>
                    </div>
                </div>
                <div className="service-meta">
                    <p>{packagea.meta}</p>
                </div>
                <div className="timing">
                    <div className="row my-3">
                        <div className="col">
                            <span className='fw-bold'><i className="far fa-clock"></i> {packagea.deliveryTime} {packagea.deliveryTime === '1' ? 'Day' : 'Days'} Days Delivery</span>
                        </div>
                        <div className="col text-end">
                            <span className='fw-bold'><i className="fas fa-undo-alt"></i> {packagea.revisions === '-1' ? 'Unlimited' : packagea.revisions} {packagea.revisions === '1' ? 'Revision' : 'Revisions'} </span>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <ul className='list-style-none p-0'>
                        {
                            packagea.options.map(option => <SingleOption option={option} />)
                        }
                    </ul>
                </div>
                <div className="service-purchase-btn">
                    <button onClick={() => navigate(`/checkout/${serviceId}&${packageName}`)} className='btn text-center d-block w-100 shadow-none py-2'>Continue (${packagea.price})</button>
                </div>
            </div>
        </div>
    )
}


const SingleOption = ({ option }) => {
    return (
        <li><i className="fas fa-check"></i> {option}</li>
    )
}


const ServiceDescription = ({ block }) => {

    return (
        <>
            {
                block.type === 'paragraph' && <p>{block.data.text}</p>
            }
            {
                block.type === 'list' &&
                <ul>
                    {
                        block?.data?.items?.map(data => <li>{data}</li>)
                    }
                </ul>
            }
        </>
    )
}


export default HeroArea;