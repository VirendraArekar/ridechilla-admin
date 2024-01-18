import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { HoverEffect } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import {imageList} from './ImagePath';

const Hover3 = () => {
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <HeaderCard title={HoverEffect} hover={"3"} />
                        <CardBody>
                            <div id="aniimated-thumbnials2" className="row gallery my-gallery">
                                {
                                    imageList.map((item,i)=>{
                                        return(
                                            <figure itemProp="associatedMedia" key={i} className="col-md-3 col-6 img-hover hover-3">
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

export default Hover3