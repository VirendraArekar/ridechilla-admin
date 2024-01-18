import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import { Btn, H2, Image, LI, UL } from '../../../../AbstractElements';
import {ENDCALL} from '../../../../Constant';
import vidImage from "../../../../assets/images/other-images/caller.jpg"
import vidImage1 from "../../../../assets/images/other-images/receiver-img.jpg"

const VideoHistory = () => {
    return (
        <Fragment>
            <div className="chat-history">
                <Row>
                    <Col className="text-center pe-0 call-content">
                        <div>
                            <div className="total-time">
                                <H2 attrH2={{ className: "digits" }}>36 : 56</H2>
                            </div>
                            <div className="call-icons">
                                <UL attrUL={{ className: "simple-list list-inline d-flex flex-row" }}>
                                    <LI attrLI={{ className: "list-inline-item" }}><a href="#javascript"><i className="icon-video-camera me-0"></i></a></LI>
                                    <LI attrLI={{ className: "list-inline-item" }}><a href="#javascript"><i className="icon-volume me-0"></i></a></LI>
                                    <LI attrLI={{ className: "list-inline-item" }}><a href="#javascript"><i className="icon-user me-0"></i></a></LI>
                                </UL>
                            </div>
                            <Btn attrBtn={{ color: "danger", className: "btn-block btn-lg" }}>{ENDCALL}</Btn>
                            <div className="receiver-img"><Image attrImage={{ src: `${vidImage1}` }} /></div>
                        </div>
                    </Col>
                    <Col sm="6" className="caller-img-sec">
                        <div className="caller-img bg-size" style={{backgroundImage:`url(${vidImage})`,backgroundSize:'cover',backgroundPosition:'center center',display:'block'}}>
                            <Image attrImage={{ className: "img-fluid bg-img-cover d-none", src: `${vidImage}`}} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default VideoHistory