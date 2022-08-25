import React from "react";


const Products = ({isRu}) => {

    const imageLink = 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';

    return (
        <div className="portfolio section-padding" style={{background:"#f0f0f0"}} id='products'>
            <div className="container">
                <div className="row gallery no-padding">
                    <div className="col-lg-12 section-title text-center">
                        <h3>{isRu ? "Продукты" : "Products"}</h3>
                        <p>{isRu ? "Всё что вам нужно!" : "Anything you need!"}</p>
                        <span className="section-title-line"></span>
                    </div>
                    {/* <div className=" row"> */}
                        <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 winter no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/qovun.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Winter</h4>
                                        <h6>Girl in the snow</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/yongoq.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Man with an Umberalla</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/df-uzum-mix.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>New Beginning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/urik.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Girl in the Rain</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/beans-mix.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>New Beginning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/beans-ishlar.jpeg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Girl in the Rain</h6>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};
export default Products;