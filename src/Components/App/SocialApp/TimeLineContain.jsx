import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Card, CardBody, Col, Input, Media } from 'reactstrap';
import { H4,P, Image } from '../../../AbstractElements';
import imgg from '../../../assets/images/user/1.jpg';
import imgg1 from '../../../assets/images/user/2.png';
import imgg2 from '../../../assets/images/user/3.jpg';
import smile from '../../../assets/images/social-app/timeline-1.png';
import smily from '../../../assets/images/smiley.png';
import { AlexendraDhadio, comment, comment2, comment3, comment4, Days15Ago, ELANA, IssaBell, JasonBorne, MonthAgo, MoreCommnets, OliviaJon, SocialTime, YearAgo } from '../../../Constant';
import TimeLineContain2 from './TimeLineContain2';

const TimeLineContain = () => {    
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <div className="new-users-social">
                            <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                                <Media body className="flex-grow-1"> <H4 attrH4={{ className: 'mb-0 f-w-700' }}>{ELANA}</H4><P>{SocialTime}</P>
                                </Media><span className="pull-right mt-0"><MoreVertical /></span></Media>
                        </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${smile}` }} />
                        <div className="timeline-content"><P>{comment2}</P>
                            <div className="like-content mt-2">
                                <span><i className="fa fa-heart font-danger"></i></span>
                                <span className="pull-right comment-number"><span>20 </span>
                                <span><i className="fa fa-share-alt me-0"></i></span></span>
                                <span className="pull-right comment-number"><span>10 </span>
                                <span><i className="fa fa-comments-o"></i></span></span>
                            </div>
                            <div className="social-chat">
                                <div className="your-msg">
                                    <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{JasonBorne} <span>{YearAgo} <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment}</P>
                                        </Media>
                                    </Media>
                                </div>
                                <div className="other-msg">
                                    <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg1}` }} />
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{AlexendraDhadio} <span>{MonthAgo} <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment3}</P>
                                        </Media>
                                    </Media>
                                </div>
                                <div className="other-msg">
                                    <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg2}` }} />
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{OliviaJon} <span>{Days15Ago} <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment4}</P>
                                        </Media>
                                    </Media>
                                </div>
                                <div className="your-msg">
                                    <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />  
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{IssaBell} <span>{YearAgo} <i className="fa fa-reply font-primary"></i></span></span> <P>{comment}</P>
                                        </Media>
                                    </Media>
                                </div>
                                <div className="text-center"><a className="f-w-600" href="#javascript">{MoreCommnets}</a></div>
                            </div>
                            <div className="comments-box">
                                <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                    <Media body className="flex-grow-1">
                                        <div className="input-group text-box">
                                            <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your comments" />
                                            <div className="input-group-text"><Image attrImage={{ src: `${smily}`, alt: '', }} /></div>
                                        </div>
                                    </Media>
                                </Media>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <TimeLineContain2/>
        </Fragment >
    );
};
export default TimeLineContain;