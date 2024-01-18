import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import { H3, H2, H6, LI, UL, Image } from '../../../../AbstractElements';
import {Follower, Following, TotalPost} from '../../../../Constant';

const AllCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data));
    }, []);
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            {
                cards.map((item) => {
                    return (
                        <Col lg="4" sm="6" className="box-col-33" key={item.id}>
                            <Card className="custom-card">
                                <CardHeader className="p-0">
                                    <Image attrImage={{ src: `${dynamicImage(item.card_bg)}`, className: 'img-fluid', alt: '' }} />
                                </CardHeader>
                                <div className="card-profile">
                                    <Image attrImage={{ src: `${dynamicImage(item.avatar)}`, className: 'rounded-circle', alt: '' }} />
                                </div>
                                <UL attrUL={{ as: 'ul', className: 'simple-list card-social'}}>
                                    <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook me-0"></i></a></LI>
                                    <LI><a href="https://www.google.com/"><i className="fa fa-google-plus me-0"></i></a></LI>
                                    <LI><a href="https://twitter.com/"><i className="fa fa-twitter me-0"></i></a></LI>
                                    <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram me-0"></i></a></LI>
                                    <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss me-0"></i></a></LI>
                                </UL>
                                <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>
                                    <div className="text-center profile-details">
                                        <H2>{item.name}</H2>
                                        <H6>{item.post}</H6>
                                    </div>
                                </Link>
                                <CardFooter>
                                    <Row>
                                        <Col sm="4" className="col-4">
                                            <H6>{Follower}</H6>
                                            <H3 attrH3={{ className: 'counter' }}>{item.follower}</H3>
                                        </Col>
                                        <Col sm="4" className="col-4">
                                            <H6>{Following}</H6>
                                            <H3><span className="counter">{item.following}</span>K</H3>
                                        </Col>
                                        <Col sm="4" className="col-4">
                                            <H6>{TotalPost}</H6>
                                            <H3><span className="counter">{item.totalPost}</span>M</H3>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    );
                })
            }
        </Fragment>
    );
};
export default AllCards;