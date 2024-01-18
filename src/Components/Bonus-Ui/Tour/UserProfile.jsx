import React, { Fragment } from 'react';
import UserProfileImg from '../../../assets/images/user-profile/bg-profile.jpg';
import { Col, Card } from 'reactstrap';
import UserSeven from '../../../assets/images/user/7.jpg';
import { H4, H6, Image, LI, UL } from '../../../AbstractElements';
import {Designer, EmayWalter, Follower, Following, Likes, TotalFollowers, TotalFollowing, TotalLikes} from '../../../Constant';

const UserProfile = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card className="profile-header bg-size" style={{ backgroundImage: `url(${UserProfileImg})`, backgroundSize:'cover',  backgroundPosition: 'center center' }}>
                    <div className="profile-img-wrrap">
                        <Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${require('../../../assets/images/user-profile/bg-profile.jpg')}`, alt: ''}}/></div>
                    <div className="userpro-box">
                        <div className="img-wrraper">
                            <div className="avatar">
                                <Image attrImage={{ className: 'step1', alt: '', src: `${UserSeven}`, dataintro: 'This is Profile image' }} />
                            </div>
                            <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5 step2" data-intro="Change Profile image here"></i></div>
                        </div>
                        <div className="user-designation">
                            <div className="title"><a target="_blank" href="#javascript">
                                <H4>{EmayWalter}</H4>
                                <H6>{Designer}</H6></a></div>
                            <div className="social-media step3" data-intro="This is your Social details">
                                <UL attrUL={{ className: 'user-list-social flex-row simple-list' }} >
                                    <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook me-0"></i></a></LI>
                                    <LI><a href="https://www.google.com/"><i className="fa fa-google-plus me-0"></i></a></LI>
                                    <LI><a href="https://twitter.com/"><i className="fa fa-twitter me-0"></i></a></LI>
                                    <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram me-0"></i></a></LI>
                                    <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss me-0"></i></a></LI>
                                </UL>
                            </div>
                            <div className="follow">
                                <UL attrUL={{ className: 'follow-list flex-row simple-list' }}>
                                    <LI>
                                        <div className="follow-num counter">{TotalFollowers}</div><span>{Follower}</span>
                                    </LI>
                                    <LI>
                                        <div className="follow-num counter">{TotalFollowing}</div><span>{Following}</span>
                                    </LI>
                                    <LI>
                                        <div className="follow-num counter">{TotalLikes}</div><span>{Likes}</span>
                                    </LI>
                                </UL>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default UserProfile;