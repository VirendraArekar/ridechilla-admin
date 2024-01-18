import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { HoverEffect } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { imageList } from './ImagePath';

const Hover12 = () => {
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <HeaderCard title={HoverEffect} hover={" 12"} />
                        <CardBody>
                            <div id="aniimated-thumbnials11" className="row gallery my-gallery">
                                {
                                    imageList.map((item, i) => {
                                        return (
                                            <figure itemProp="associatedMedia" key={i} className="col-md-3 col-6 img-hover hover-12">
                                                <Link>
                                                    <div>
                                                        <Image attrImage={{
                                                            className: "img-fluid", src: require(`../../../assets/images/${item.src}`), itemProp: "thumbnail", alt: ""
                                                        }} />
                                                    </div>
                                                </Link>
                                            </figure>
                                        )
                                    })
                                }
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Hover12;