import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { HoverEffect } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import {imageList} from './ImagePath';

const Hover7 = () => {
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <HeaderCard title={HoverEffect} hover={" 7"} />
                        <CardBody>
                            <div id="aniimated-thumbnials6" className="row gallery my-gallery">
                                {
                                    imageList.map((item,i)=>{
                                        return(
                                            <figure itemProp="associatedMedia" key={i} className="col-md-3 col-6 img-hover hover-7">
                                                <div>
                                                    <Image attrImage={{ className: "img-fluid", src: require(`../../../assets/images/${item.src}`), itemProp: "thumbnail", alt: ""
                                                    }} />
                                                </div>
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

export default Hover7;