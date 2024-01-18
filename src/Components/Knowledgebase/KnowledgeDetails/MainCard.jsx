import { H4, Image, P } from '../../../AbstractElements';
import { MainCardPara1, MainCardPara2 } from '../../../Data/KnowledegesBase';
import img from '../../../assets/images/knowledgebase/1.jpg';
import { Card, CardBody, Col } from 'reactstrap';
import React, { Fragment } from 'react';
import { WhychooseKnowledge } from '../../../Constant';

const MainCard = () => {
    return (
        <Fragment>
            <Col xl="9 box-col-70">
                <div className="blog-single">
                    <div className="blog-box">
                        <Card><Image attrImage={{ className: 'img-fluid w-100', src: `${img}`, alt: 'blog-main' }} /></Card>
                        <Card>
                            <CardBody>
                                <div className="blog-details">
                                    <H4 attrH4={{ className: 'mt-0' }}>{WhychooseKnowledge}</H4>
                                    <div className="single-blog-content-top">
                                        <P>{MainCardPara1}</P>
                                        <P>{MainCardPara2}</P>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default MainCard;