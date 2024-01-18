import { Image, H6, LI, UL, P } from '../../../AbstractElements';
import LearningContext from '../../../_helper/Learning';
import React, { Fragment, useContext } from 'react';
import { Col, Card } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const BoxList = () => {
    const { learningData } = useContext(LearningContext);
    const Navigate = useNavigate();
    const clickApply = () => {
        Navigate(`${process.env.PUBLIC_URL}/app/learning/learning-detail`);
    };

    return (
        <Fragment>
            {learningData && learningData.slice(0, 6).map((data, index) => {
                return (
                    <Col xl="4" className='box-col-33' sm="6" key={index}>
                        <Card>
                            <div className="product-box learning-box">
                                <div className="product-img">
                                    <Image attrImage={{ className: 'img-fluid top-radius-blog', src: `${require(`../../../assets/images/faq/${data.img}`)}` }} />
                                    <div className="product-hover">
                                        <UL attrUL={{ className: 'flex-row simple-list' }}>
                                            <LI><i className="icon-link" onClick={() => clickApply()}></i></LI>
                                            <LI><i className="icon-import"></i></LI>
                                        </UL>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <Link to={`${process.env.PUBLIC_URL}/app/learning/learning-detail`}>
                                        <div className='bottom-details'>
                                            <H6>{data.title}</H6>
                                        </div>
                                    </Link>
                                    <P>{data.short_description}</P>
                                </div>
                            </div>
                        </Card>
                    </Col>
                );
            })}
        </Fragment>
    );
};

export default BoxList;
