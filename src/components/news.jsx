import React from "react";

const News = ({isRu}) => {
    const imageLink =
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg";

    return (
        <div className="services section-padding bg-grey" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-title text-left">
                        <h3 className="text-center">{isRu ? "Новости" : "News"}</h3>
                        {/* <p>
              Vestibulum elementum dui tempus dolor gravida, vel mattis erat
              fermentum.
            </p> */}
                        <span className="section-title-line"></span>{" "}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-apples-in-box.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-chart-line"></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Chart Line</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-persik.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-bullhorn "></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Quick Anouncement</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-uzum.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-map-marked"></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Mark Location</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-bulgor.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-bug"></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Bug Solution</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-pomidor.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-comments"></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Fast Communication</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30">
                        <div className="service-box bg-white text-left">
                            <img src={require('../images/news/news-ogurtsy-tsvetok-listia.jpg')} alt="" className="img-responsive"/>
                            <div className="icon">
                                {" "}
                                <i className="fas fa-paint-brush"></i>{" "}
                            </div>
                            <div className="icon-text">
                                <h4 className="title-box text-center">Clean Design</h4>
                                <p className="px-3 pb-3">
                                    Sed malesuada, est eget condimentum iaculis, nisi ex facilisis
                                    metus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default News;
