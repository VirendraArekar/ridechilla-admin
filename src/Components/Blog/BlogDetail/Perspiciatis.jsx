import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { H3,Image, LI, P, UL } from '../../../AbstractElements';
import blog2 from '../../../assets/images/blog/blog-2.jpg';
import blog3 from '../../../assets/images/blog/blog-3.jpg';
import { BlogDate, Blogdcs, Blogpara } from '../../../Constant';

const Perspiciatis = () => {
    return (
        <Fragment>
            <Row>                
                <Col xl='12' md='6'>
                    <Card>
                        <Row className="blog-box blog-list">
                            <Col xl="6 col-12">
                                <div className='blog-wrraper'>
                                    <a href='#'> 
                                        <Image attrImage={{ className: 'img-fluid sm-100-wp p-0', src: blog2, alt: '' }} />
                                    </a>
                                </div>
                            </Col>
                            <Col xl="6 col-12">
                                <div className="blog-details">
                                    <div className="blog-date digits">
                                        <span>{'02'}</span> {BlogDate}</div>
                                    <H3>{Blogdcs} </H3>
                                    <div className="blog-bottom-content">
                                        <UL attrUL={{ className: 'simple-list blog-social' }}>
                                            <LI>{'by: Admin'}</LI>
                                            <LI>{'12 Hits'}</LI>
                                        </UL>
                                        <hr className='lightborder'/>
                                        <P attrPara={{ className: 'mt-0' }} >{Blogpara}</P>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl='12' md='6'>
                    <Card>
                        <Row className="blog-box blog-list">
                            <Col xl="6 col-12">
                                <div className='blog-wrraper'>
                                    <a href='#'> 
                                        <Image attrImage={{ className: 'img-fluid sm-100-wp p-0', src: blog3, alt: '' }} />
                                    </a>
                                </div>
                            </Col>
                            <Col xl="6 col-12">
                                <div className="blog-details">
                                    <div className="blog-date digits"><span>{'03'}</span> {BlogDate}</div>
                                    <H3>{Blogdcs} </H3>
                                    <div className="blog-bottom-content">
                                        <UL attrUL={{ className: 'simple-list blog-social' }}>
                                            <LI>{'by: Admin'}</LI>
                                            <LI>{'5 Hits'}</LI>
                                        </UL>
                                        <hr className='lightborder'/>
                                        <P attrPara={{ className: 'mt-0' }} >{Blogpara}</P>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>                
            </Row>
        </Fragment>
    );
};

export default Perspiciatis;