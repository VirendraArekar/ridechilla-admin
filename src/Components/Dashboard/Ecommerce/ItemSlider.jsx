import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H3, H4, Image, LI, P, UL } from "../../../AbstractElements";
import { ItemsSliderData } from '../../../Data/Dashboard/Ecommerce/Data';
import Slider from 'react-slick';
import { Hot, JohannaParvez, New, ProductDetail } from "../../../Constant";

const ItemsSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1}
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2}
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1,slidesToScroll: 1 }
            }
        ]
    };
    return (
        <Fragment>
            <Col xxl="4" xl="5" md="7 box-col-40">
                <Slider {...settings} className="items-slider m-0">
                    {ItemsSliderData.map((data) => {
                        return (
                            <Col xl="6" lg="6" md="6" sm="6" key={data.id}>
                                <Card className={`rated-product ${data.color}`}>
                                    <CardBody>
                                        <div className="img-wrapper">
                                            <Image attrImage={{ className: "img-fluid", src: `${data.img}`, alt: "wellington-shoes" }} />
                                            {data.badge === 'New' ? <span className="badge badge-primary rated-product-badge">{New}</span> :
                                                <span className="badge badge-primary rated-product-badge">{Hot}</span>
                                            }
                                        </div>
                                        <div className="product-detail">
                                            <H4>{data.title}</H4>
                                            <H3>{data.price}</H3>
                                            <UL attrUL={{ className: "simple-list rating-star flex-row" }} >
                                                <LI><i className="fa fa-star me-0"></i></LI>
                                                <LI><i className="fa fa-star me-0"></i></LI>
                                                <LI><i className="fa fa-star me-0"></i></LI>
                                                <LI><i className="fa fa-star me-0"></i></LI>
                                                <LI><i className="fa fa-star me-0"></i></LI>
                                            </UL>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Slider>
                <Row>
                    <Col xl="12">
                        <Card className="product-review">
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="img-wrapper">
                                            <Image attrImage={{ className: "img-fluid", src: `${require("../../../assets/images/dashboard-2/person1.png")}`, alt: "person1" }} />
                                        </div>
                                    </div>
                                    <div className="person-detail">
                                        <H4>{JohannaParvez}</H4>
                                        <UL attrUL={{ className: "simple-list rating-star flex-row " }} >
                                            <LI><i className="fa fa-star me-0"></i></LI>
                                            <LI><i className="fa fa-star me-0"></i></LI>
                                            <LI><i className="fa fa-star me-0"></i></LI>
                                            <LI><i className="fa fa-star me-0"></i></LI>
                                            <LI><i className="fa fa-star me-0"></i></LI>
                                        </UL>
                                        <i className="fa fa-quote-right fa-5x quote-icon"></i>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <P>{ProductDetail}</P>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
};
export default ItemsSlider;