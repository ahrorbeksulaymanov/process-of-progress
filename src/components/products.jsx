import React from "react";


const Products = ({isRu}) => {

    const imageLink = 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';

    return (
        <div className="portfolio section-padding" style={{background:"#f0f0f0"}} id='products'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 section-title text-center">
                        <h3>{isRu ? "Продукты" : "Products"}</h3>
                        <p>{isRu ? "Всё что вам нужно!" : "Anything you need!"}</p>
                        <span className="section-title-line"></span></div>
                    <div className="gallery no-padding row">
                        <div className="col-lg-4 border-radius-custom col-sm-6 spring no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/abricos.png')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>anricos</h4>
                                        <h6>Autumn Leaves</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 spring no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/uzum.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Spring</h4>
                                        <h6>Flower Pot</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 spring no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/shaftoli.png')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Spring</h4>
                                        <h6>Bird with Flower</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/df-mix-2.png')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>Vacation Trip Van</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 winter no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/df-uzum.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Winter</h4>
                                        <h6>Girl in the snow</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/df-abricos.jpeg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Man with an Umberalla</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/nuts-mix.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>New Beginning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/nut.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Girl in the Rain</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/pista.jpeg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>Fun at the Seashores</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/bulgor-1.png')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>New Beginning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/bodring.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Girl in the Rain</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/tamato.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>Fun at the Seashores</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/bean-mix.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>New Beginning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 rainy no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/black-e-bean.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Rainy</h4>
                                        <h6>Girl in the Rain</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-radius-custom col-sm-6 summer no-padding">
                            <div className="item-img">
                                <div className="part-img"><img className="product-image" src={require('../images/productus/beans-mix-2.jpg')}
                                                               alt="image"/>
                                    <div className="overlay-img">
                                        <h4>Summer</h4>
                                        <h6>Fun at the Seashores</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Products;