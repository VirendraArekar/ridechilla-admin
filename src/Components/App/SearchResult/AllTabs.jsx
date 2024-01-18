import { H4, LI, P, UL } from '../../../AbstractElements';
import imgg from '../../../assets/images/blog/blog.jpg';
import PagesSort from './Pages';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { AllAbout, Hits, MarkJecno, SearchDesc, SearchImageTime } from '../../../Constant';
import { Rating } from 'react-simple-star-rating';

const AllTabs = () => {
    const [tabsData, setTabsData] = useState();
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
            setTabsData(resp.data);
        });
    }, []);
    const [rating, setRating] = useState(2.5);
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    return (
        <Fragment>
            <div className="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
                <Row>
                    <Col xl="6 box-col-6">
                        <P attrPara={{ className: 'pb-4' }}>{AllAbout}</P>
                        {tabsData && tabsData.map((item, i) => {
                            return (
                                <div className="info-block" key={i}>
                                    <H4>{item.title}</H4>
                                    <a href="#javascript">{item.url}</a>
                                    <P>{item.detail}</P>
                                    <div className="star-ratings">
                                        <UL attrUL={{ className: 'simple-list search-info d-flex flex-row' }}>
                                            <LI>
                                                <Rating onClick={changeRating} initialValue={rating} size='15px' fillColor='#E56809' style={{ padding: '0' }} />
                                            </LI>
                                            <LI>{item.star}</LI>
                                            <LI>{item.vote}</LI>
                                            <LI>{item.news}</LI>
                                        </UL>
                                    </div>
                                </div>
                            );
                        })
                        }
                        <PagesSort />
                    </Col>
                    <Col xl="6 box-col-6 search-banner" >
                        <Card>
                            <div className="blog-box blog-shadow bg-size" style={{ backgroundImage: `url(${imgg})`, backgroundSize: 'cover', backgroundPosition: 'center center', display: 'block' }}>
                                <div className="blog-details">
                                    <P attrPara={{ className: 'digits' }}>{SearchImageTime}</P>
                                    <H4>{SearchDesc}</H4>
                                    <UL attrUL={{ className: 'simple-list blog-social digits d-flex flex-row' }}>
                                        <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
                                        <LI><i className="icofont icofont-thumbs-up"></i>{Hits}</LI>
                                    </UL>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default AllTabs;