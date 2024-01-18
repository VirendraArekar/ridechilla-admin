import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';
import { H6, P ,H5} from '../../AbstractElements';
import { Latestarticles } from '../../Constant';
import { ArticeVideoData1 } from '../../Data/FAQ';
import ArticeVideo2 from './ArticeVideo2';
import ArticeVideo3 from './ArticeVideo3';

const ArticeVideo = () => {
    return (
        <Fragment>
            <Col lg="12" className='faq-articles'>
                <div className="header-faq">
                    <H5 attrH5={{className:"mb-0"}}>{Latestarticles}</H5>
                </div>
                <Row>
                    <Col xl="4" md="6">
                        <Row>
                            {
                                ArticeVideoData1.map((item, i) => {
                                    return (
                                        <Col sm="12" key={i}>
                                            <Card>
                                                <CardBody>
                                                    <Media className='d-flex'>
                                                        {item.IconClass}
                                                        <Media body className='flex-grow-1'>
                                                            <H6 attrH6={{ className: 'f-w-600' }}>{item.title}</H6>
                                                            <P>{item.discription}</P>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Col>
                    <ArticeVideo2 />
                    <ArticeVideo3 />
                </Row>
            </Col>
        </Fragment>
    );
};
export default ArticeVideo;