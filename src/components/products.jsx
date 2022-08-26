import React from "react";


const Products = ({isRu}) => {

    const imageLink = 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';

    return (
        <div className="portfolio section-padding" style={{background: "#f0f0f0"}} id='products'>
            <div className="container">
                <div className="row gallery no-padding">
                    <div className="col-lg-12 section-title text-center">
                        <h3>{isRu ? "Продукты" : "Products"}</h3>
                        <p>{isRu ? "Всё что вам нужно!" : "Anything you need!"}</p>
                        <span className="section-title-line"></span>
                    </div>
                    
                    <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 rainy no-padding">
                        <div className="item-img">
                            <div className="part-img"><img className="product-image"
                                                           src={require('../images/productus/yongoq.jpg')}
                                                           alt="image"/>
                                <div className="overlay-img">
                                    <h6>
                                        {isRu
                                            ?
                                            "Орехи"
                                            :
                                            "Nuts"
                                        }
                                    </h6>
                                    <h4>
                                        {isRu
                                            ?
                                            "Орехи являются хорошим источником клетчатки, полезных жиров и растительного белка."
                                            :
                                            "Nuts are a good source of fiber, healthy fats, and plant protein"
                                        }

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 summer no-padding">
                        <div className="item-img">
                            <div className="part-img"><img className="product-image"
                                                           src={require('../images/productus/beans-idishlar.jpeg')}
                                                           alt="image"/>
                                <div className="overlay-img">
                                    <h6>
                                        {isRu
                                            ?
                                            "Бобы"
                                            :
                                            "Beans"
                                        }
                                    </h6>
                                    <h4>
                                        {isRu
                                            ?
                                            "Фасоль была важным источником белка на протяжении всей истории Старого и Нового Света и остается им до сих пор."
                                            :
                                            "Beans were an important source of protein throughout Old and New World history and still are today."
                                        }

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 rainy no-padding">
                        <div className="item-img">
                            <div className="part-img"><img className="product-image"
                                                           src={require('../images/productus/dried-fruits.jpg')}
                                                           alt="image"/>
                                <div className="overlay-img">
                                    <h6>
                                        {isRu
                                            ?
                                            "Cухофрукты"
                                            :
                                            "Dried fruits"
                                        }
                                    </h6>
                                    <h4>
                                        {isRu
                                            ?
                                            "Сегодня сухофрукты производятся в большинстве регионов мира, и их потребление происходит во всех культурах и демографических группах."
                                            :
                                            "Today, dried fruit is produced in most regions of the world, and consumption occurs in all cultures and demographic segments."
                                        }

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 border-radius-custom col-sm-6 winter no-padding">
                        <div className="item-img">
                            <div className="part-img"><img className="product-image"
                                                           src={require('../images/productus/qovun.jpg')}
                                                           alt="image"/>
                                <div className="overlay-img">
                                    <h6>
                                        {isRu ? "Дыня" : "Melon" }
                                    </h6>
                                    <h4>
                                        {isRu
                                            ? "Дыни - нежные к морозу однолетники с мягкими опушенными стеблями и обхватывающими усиками."
                                            : "Melons are frost-tender annuals with soft hairy trailing stems and clasping tendrils."
                                        }

                                    </h4>
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