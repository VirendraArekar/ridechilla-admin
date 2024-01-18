import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { HoverEffect } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import {imageList} from './ImagePath'

const Hover1 = () => {
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <HeaderCard title={HoverEffect} hover={" 1"} />                       
                        <CardBody>
                            <div id="aniimated-thumbnials" className="row my-gallery gallery">
                                {
                                    imageList.map((item,i)=>{
                                        return(
                                            <figure itemProp="associatedMedia" key={i} className="col-md-3 col-6 img-hover hover-1">
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

export default Hover1