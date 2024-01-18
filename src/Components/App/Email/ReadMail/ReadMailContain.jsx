import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { H3, H6, LI, P, UL, Image } from '../../../../AbstractElements';
import user from '../../../../assets/images/user/user.png';
import emai1 from '../../../../assets/images/email/1.jpg';
import emai2 from '../../../../assets/images/email/2.jpg';
import emai3 from '../../../../assets/images/email/3.jpg';
import {ATTACHMENTS, DearSirGoodMorning, DownloadAll, Elementumvarius, Emailpara, Forward, Hello, Lorem, Lormdisc, Lormipsa, Reply, ReplyAll} from '../../../../Constant';

const MailContain = () => {
    return (
        <Fragment>
            <div className="email-right-aside">
                <Card className="email-body">
                    <div className="email-profile">
                        <div className="email-right-aside">
                            <div className="email-body">
                                <div className="email-content">
                                    <div className="email-top">
                                        <Row>
                                            <Col xl="12">
                                                <div className="d-flex">
                                                    <Image attrImage={{ className: 'me-3 rounded-circle', src: `${user}`, alt: '' }} />
                                                    <div className="flex-grow-1">
                                                        <H6 attrH6={{ className: 'd-block' }}>{Lormipsa}</H6>
                                                        <P>{Lormdisc}</P>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="email-wrapper">
                                        <div className="emailread-group">
                                            <div className="read-group">
                                                <P>{Hello}</P>
                                                <P>{DearSirGoodMorning}</P>
                                            </div>
                                            <div className="read-group">
                                                <H3>{Elementumvarius}</H3>
                                                <P>{Lorem}</P>
                                                <P attrPara={{ className: 'm-t-10' }}>{Emailpara}</P>
                                            </div>
                                        </div>
                                        <div className="emailread-group">
                                            <H6 attrH6={{ className: 'text-muted mb-0' }}><i className="icofont icofont-clip"></i> {ATTACHMENTS}</H6><a className="text-muted text-end right-download font-primary f-w-600" href="#javascripts"><i className="fa fa-long-arrow-down me-2"></i>{DownloadAll}</a>
                                            <div className="clearfix"></div>
                                            <div className="attachment">
                                                <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                                                    <LI><Image attrImage={{ className: 'img-fluid m-0', src: `${emai1}`, alt: '' }} /></LI>
                                                    <LI><Image attrImage={{ className: 'img-fluid m-0', src: `${emai2}`, alt: '' }} /></LI>
                                                    <LI><Image attrImage={{ className: 'img-fluid m-0', src: `${emai3}`, alt: '' }} /></LI>
                                                </UL>
                                            </div>
                                        </div>
                                        <div className="emailread-group">
                                            <textarea className="form-control" rows="4" cols="50" placeholder="write about your nots"></textarea>
                                            <div className="action-wrapper">
                                                <UL attrUL={{ className: 'simple-list actions ' }}>
                                                    <LI><a className="btn btn-primary" href="#javascripts"><i className="fa fa-reply me-2"></i>{Reply}</a></LI>
                                                    <LI><a className="btn btn-secondary" href="#javascripts"><i className="fa fa-reply-all me-2"></i>{ReplyAll}</a></LI>
                                                    <LI><a className="btn btn-danger" href="#javascripts"><i className="fa fa-share me-2"></i>{Forward}</a></LI>
                                                </UL>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};
export default MailContain;