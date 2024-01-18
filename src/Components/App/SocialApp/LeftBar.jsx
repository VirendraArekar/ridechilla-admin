import React, { Fragment, useState } from 'react';
import one from '../../../assets/images/user/1.jpg';
import timeline3 from '../../../assets/images/social-app/timeline-3.png';
import { MyProfile, MyPage, View, Messages, Likes, Notification, SocialProfiledesc } from '../../../Constant';
import { Btn, H6, H4, H5, H3, Image } from '../../../AbstractElements';
import LeftBarMutual from './LeftBarMutual';
import LeftBarActivity from './LeftBarActivity';
import { Col, Card, CardHeader, CardBody, Media, Collapse } from 'reactstrap';
import Customers from './Customers';

const LeftBar = () => {
    const [isProfile, setisProfile] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H3 attrH3={{ className: 'p-0' }}>
                            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisProfile(!isProfile), datatoggle: 'collapse', datatarget: '#collapseicon5', 'aria-expanded': isProfile, 'aria-controls': 'collapseicon5' }} >{MyProfile}</Btn>
                        </H3>
                    </CardHeader>
                    <Collapse isOpen={isProfile}>
                        <CardBody className="socialprofile filter-cards-view">
                            <Media className='d-flex'>
                                <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', src: `${one}`, alt: '' }} />
                                <Media body className='flex-grow-1'>
                                    <H5 attrH5={{ className: 'font-primary f-w-600' }}>{MyPage}</H5>
                                    <span className="d-block">
                                        <span><i className="fa fa-comments-o"></i>
                                            <span className="px-2">{Messages}
                                                <span className="badge rounded-pill badge-light ms-1">{'9'}</span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="d-block">
                                        <span><i className="fa fa-bell-o"></i>
                                            <span className="px-2">{Notification}
                                                <span className="badge rounded-pill badge-light ms-1">{'9'}</span>
                                            </span>
                                        </span>
                                    </span>
                                </Media>
                            </Media>
                            <div className="social-btngroup d-flex">
                                <Btn attrBtn={{ color: 'primary text-center me-2', type: 'button' }} >{Likes}</Btn>
                                <Btn attrBtn={{ color: 'light text-center', type: 'button' }}>{View}</Btn>
                            </div>
                            <div className="likes-profile text-center">
                                <H4 attrH4={{ className: 'f-w-600 mb-1' }}>
                                    <i className="fa fa-heart font-danger"></i>{' 884'}
                                </H4>
                            </div>
                            <H6 attrH6={{ className: 'text-center' }}>{SocialProfiledesc}</H6>
                            <div className="customers text-center social-group">
                                <Customers />
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card><Media className="img-fluid" alt="" src={timeline3} /></Card>
            </Col>
            <LeftBarMutual />
            <LeftBarActivity />
        </Fragment>
    );
};

export default LeftBar;