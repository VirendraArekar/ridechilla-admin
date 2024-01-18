import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import LearningContext from '../../../_helper/Learning';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

const FeaturesTutorial = ({ FeaturedData }) => {
    const Navigate = useNavigate();
    const { learningData } = useContext(LearningContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (FeaturedData) {
            setData(FeaturedData);
        } else {
            setData(learningData);
        }
    }, [learningData, FeaturedData])

    const clickApply = () => {
        Navigate(`${process.env.PUBLIC_URL}/app/knowledgebase-detail`);
    };
    var images = require.context('../../../assets/images/faq', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            <Row>
                {
                    data && data.map((item, id) => {
                        return (
                            <Col xl="3" className='box-col-3' sm="6" key={id}>
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <div className='knowledgebase-image'>
                                            <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}` }} />
                                        </div>
                                        <div className="product-hover">
                                            <UL attrUL={{ className: 'simple-list flex-row' }}>
                                                <LI><i className="icon-link" onClick={clickApply}></i></LI>
                                                <LI><i className="icon-import"></i></LI>
                                            </UL>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <H6><NavLink to={`${process.env.PUBLIC_URL}/app/knowledgebase-detail`}>
                                            {item.title}
                                        </NavLink></H6>
                                        <P>{item.short_description}</P>
                                    </CardBody>
                                    <CardFooter className='d-flex align-items-center justify-content-between'>
                                        <span>{item.date}</span>
                                        <Rating className='pull-right' initialValue={item.rvalue} size='18px' fillColor='#534686' style={{ padding: '0' }} />
                                    </CardFooter>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        </Fragment>
    );
};
export default FeaturesTutorial;