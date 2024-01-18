import { BlogDate, byPaigeTurner, byPeteyCruiser, Hits15, JavaLanguage, learningtext, WebDevelopment } from '../../../Constant';
import { H3, Image, LI, P, UL } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';

const BlogBox = () => {
    return (
        <Fragment>
            <Col xl="12" sm='6'>
                <Card>
                    <Row className="blog-box blog-list">
                        <Col xl="5" className='col-12'>
                            <Image attrImage={{ className: 'img-fluid sm-100-w', src: `${require('../../../assets/images/faq/1.jpg')}` }} />
                        </Col>
                        <Col xl="7" className='col-12'>
                            <div className="blog-details">
                                <div className="blog-date"><span>{'05'}</span> {BlogDate}</div>
                                <H3>{JavaLanguage} </H3>
                                <div className="blog-bottom-content">
                                    <UL attrUL={{ className: 'blog-social simple-list' }} >
                                        <LI>{byPaigeTurner}</LI>
                                        <LI attrLI={{ className: 'digits' }}>{Hits15}</LI>
                                    </UL>
                                    <hr className='lightborder' />
                                    <P attrPara={{ className: 'mt-0' }}>{learningtext}</P>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xl="12" sm="6">
                <Card>
                    <Row className="blog-box blog-list">
                        <Col xl="5" className='col-12'>
                            <Image attrImage={{ className: 'img-fluid sm-100-w', src: `${require('../../../assets/images/faq/2.jpg')}`, alt: '' }} />
                        </Col>
                        <Col xl="7" className='col-12'>
                            <div className="blog-details">
                                <div className="blog-date digits"><span>{'10'}</span> {'March 2022'}</div>
                                <H3>{WebDevelopment} </H3>
                                <div className="blog-bottom-content">
                                    <UL attrUL={{ className: 'blog-social simple-list' }} >
                                        <LI>{byPeteyCruiser}</LI>
                                        <LI attrLI={{ className: 'digits' }} >{'34 Hits'}</LI>
                                    </UL>
                                    <hr className='lightborder'/>
                                    <P attrPara={{ className: 'mt-0' }} >{learningtext}</P>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BlogBox;