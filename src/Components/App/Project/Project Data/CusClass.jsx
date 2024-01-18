import React from "react";
import { Col, Row, Progress } from "reactstrap";
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { Issues, Resolved, Comment } from '../../../../Constant';

const CusClass = (props, key) => {
    const { item = '' } = props;
    return (
        <Col xxl="4" lg="4" md="6" className="box-col-33" key={key}>
            <div className="project-box">
                <span className={`badge ${item.badge === "Done" ? 'bg-secondary' : 'bg-primary'}`}>{item.badge}</span>
                <H4>{item.title}</H4>
                <div className="media d-flex">
                    <Image attrImage={{ className: "img-20 me-2 rounded-circle", src: `${require(`../../../../assets/images/${item.img}`)}`, alt: "" }} />
                    <div className="media-body">
                        <P>{item.sites}</P>
                    </div>
                </div>
                <P>{item.desc}</P>
                <Row className="details">
                    <Col xs="6"><span>{Issues} </span></Col>
                    <Col xs="6" className={item.badge === "Done" ? 'font-secondary' : 'font-primary'}>{item.issue}</Col>
                    <Col xs="6"> <span>{Resolved}</span></Col>
                    <Col xs="6" className={item.badge === "Done" ? 'font-secondary' : 'font-primary'}>{item.resolved}</Col>
                    <Col xs="6"> <span>{Comment}</span></Col>
                    <Col xs="6" className={item.badge === "Done" ? 'font-secondary' : 'font-primary'}>{item.comment}</Col>
                </Row>
                <div className="customers d-inline-block ">
                    <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                        <LI attrLI={{ className: "d-inline-block" }}>
                            <Image attrImage={{ className: "img-30 rounded-circle", src: `${require(`../../../../assets/images/${item.customers_img1}`)}`, alt: "" }} />
                        </LI>
                        <LI attrLI={{ className: "d-inline-block" }}>
                            <Image attrImage={{ className: "img-30 rounded-circle", src: `${require(`../../../../assets/images/${item.customers_img2}`)}`, alt: "" }} />
                        </LI>
                        <LI attrLI={{ className: "d-inline-block" }}>
                            <Image attrImage={{ className: "img-30 rounded-circle", src: `${require(`../../../../assets/images/${item.customers_img3}`)}`, alt: "" }} />
                        </LI>
                        <LI attrLI={{ className: "d-inline-block ms-2" }}>
                            <P attrPara={{ className: 'f-12' }}>{`+${item.like} More`}</P>
                        </LI>
                    </UL>
                </div>
                <div className="project-status mt-4">
                    <div className="d-flex mb-0">
                        <P>{item.progress}% </P>
                        <div className="flex-grow-1 text-end"><span>{item.badge}</span></div>
                    </div>
                    {item.progress === "100" ?
                        <Progress className="sm-progress-bar" color="secondary" value={item.progress} style={{ height: "5px" }} />
                        :
                        <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: "5px" }} />
                    }
                </div>
            </div>
        </Col>

    )
}

export default CusClass;
