import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Card, CardBody, Col, Input, Media } from 'reactstrap';
import { H4,P, Image } from '../../../AbstractElements';
import imgg from '../../../assets/images/user/1.jpg';
import time2 from '../../../assets/images/social-app/timeline-2.png';
import smily from '../../../assets/images/smiley.png';
import { comment, comment2, ELANA, IssaBell, JasonBorne, MoreCommnets, SocialTime, YearAgo,} from '../../../Constant';

const TimeLineContain2 = () => {    
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <div className="new-users-social">
                            <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                                <Media body className="flex-grow-1">
                                    <H4 attrH4={{ className: 'mb-0 f-w-700' }}>{ELANA}</H4> <P>{SocialTime}</P>
                                </Media><span className="pull-right mt-0"><MoreVertical /></span></Media>
                        </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${time2}` }} />
                        <div className="timeline-content"> <P>{comment2}</P>
                            <div className="like-content">
                                <span><i className="fa fa-heart font-danger"></i></span>
                                <span className="pull-right comment-number"><span>20 </span>
                                    <span><i className="fa fa-share-alt me-0"></i></span>
                                </span>
                                <span className="pull-right comment-number"><span>10 </span>
                                    <span><i className="fa fa-comments-o"></i></span>
                                </span>
                            </div>
                            <div className="social-chat">
                                <div className="your-msg">
                                    <Media className='d-flex'>
                                        <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{JasonBorne} 
                                                <span>{YearAgo} <i className="fa fa-reply font-primary"></i></span>
                                            </span>
                                            <P>{comment}</P>
                                        </Media>
                                    </Media>
                                </div>
                                <div className="your-msg">
                                    <Media className='d-flex'>
                                        <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <Media body className="flex-grow-1">
                                            <span className="f-w-600">{IssaBell} 
                                                <span>{YearAgo} <i className="fa fa-reply font-primary"></i></span>
                                            </span>
                                            <P>{comment}</P>
                                        </Media>
                                    </Media>
                                </div><div className="text-center"><a className="f-w-600" href="#javascript">{MoreCommnets}</a></div>
                            </div>
                            <div className="comments-box">
                                <Media className='d-flex'><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} /> 
                                    <Media body className="flex-grow-1"> 
                                        <div className="input-group text-box">
                                            <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your comments" />
                                            <div className="input-group-text">
                                                <Image attrImage={{ src: `${smily}`, alt: '' }} />
                                            </div>
                                        </div>
                                    </Media>
                                </Media>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default TimeLineContain2;