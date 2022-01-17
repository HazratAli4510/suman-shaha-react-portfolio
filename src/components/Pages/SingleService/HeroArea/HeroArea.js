import React from 'react';

const HeroArea = ({ service }) => {

    const description = service?.description?.blocks || []

    console.log(service)


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
                                description.map(block => <Example key={block.id} block={block} ></Example>)
                            }
                        </div>
                    </div>
                </div>

                {/* Right Section */}

                <div className="col-12 col-lg-5 col-4 p-0 border sticky-top pricing-box pb-4">
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
                        <div className="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
                            <div>
                                <div className="row justify-content-between my-3">
                                    <div className="col">
                                        <h5 className='text-uppercase'>Basic</h5>
                                    </div>
                                    <div className="col">
                                        <h5 className='text-end'>$125</h5>
                                    </div>
                                </div>
                                <div className="service-meta">
                                    <p>I will back up and migrate your WordPress site up to 500MB in size.</p>
                                </div>
                                <div className="timing">
                                    <div className="row my-3">
                                        <div className="col">
                                            <span className='fw-bold'><i className="far fa-clock"></i> 2 Days Delivery</span>
                                        </div>
                                        <div className="col text-end">
                                            <span className='fw-bold'><i className="fas fa-undo-alt"></i> 2 Revisions </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <ul className='list-style-none p-0'>
                                        <li><i className="fas fa-check"></i> Website Migration </li>
                                        <li><i className="fas fa-check"></i> Digital Marketing Service </li>
                                        <li><i className="fas fa-check"></i> Facebook Marketing </li>
                                        <li><i className="fas fa-check"></i> Website speed optimization </li>
                                    </ul>
                                </div>
                                <div className="service-purchase-btn">
                                    <button className='btn text-center d-block w-100 shadow-none py-2'>Continue ($125)</button>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="standard" role="tabpanel" aria-labelledby="standard-tab">
                            <div>
                                <div className="row justify-content-between my-3">
                                    <div className="col">
                                        <h5 className='text-uppercase'>Standard</h5>
                                    </div>
                                    <div className="col">
                                        <h5 className='text-end'>$250</h5>
                                    </div>
                                </div>
                                <div className="service-meta">
                                    <p>I will back up and migrate your WordPress site up to 500MB in size.</p>
                                </div>
                                <div className="timing">
                                    <div className="row my-3">
                                        <div className="col">
                                            <span className='fw-bold'><i className="far fa-clock"></i> 2 Days Delivery</span>
                                        </div>
                                        <div className="col text-end">
                                            <span className='fw-bold'><i className="fas fa-undo-alt"></i> 2 Revisions </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <ul className='list-style-none p-0'>
                                        <li><i className="fas fa-check"></i> Website Migration </li>
                                        <li><i className="fas fa-check"></i> Digital Marketing Service </li>
                                        <li><i className="fas fa-check"></i> Facebook Marketing </li>
                                        <li><i className="fas fa-check"></i> Website speed optimization </li>
                                    </ul>
                                </div>
                                <div className="service-purchase-btn">
                                    <button className='btn text-center d-block w-100 shadow-none py-2'>Continue ($250)</button>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="premium" role="tabpanel" aria-labelledby="premium-tab">
                            <div>
                                <div className="row justify-content-between my-3">
                                    <div className="col">
                                        <h5 className='text-uppercase'>Premium</h5>
                                    </div>
                                    <div className="col">
                                        <h5 className='text-end'>$280</h5>
                                    </div>
                                </div>
                                <div className="service-meta">
                                    <p>I will back up and migrate your WordPress site up to 500MB in size.</p>
                                </div>
                                <div className="timing">
                                    <div className="row my-3">
                                        <div className="col">
                                            <span className='fw-bold'><i className="far fa-clock"></i> 2 Days Delivery</span>
                                        </div>
                                        <div className="col text-end">
                                            <span className='fw-bold'><i className="fas fa-undo-alt"></i> 2 Revisions </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <ul className='list-style-none p-0'>
                                        <li><i className="fas fa-check"></i> Website Migration </li>
                                        <li><i className="fas fa-check"></i> Digital Marketing Service </li>
                                        <li><i className="fas fa-check"></i> Facebook Marketing </li>
                                        <li><i className="fas fa-check"></i> Website speed optimization </li>
                                    </ul>
                                </div>
                                <div className="service-purchase-btn">
                                    <button className='btn text-center d-block w-100 shadow-none py-2'>Continue ($280)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const Example = ({ block }) => {

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