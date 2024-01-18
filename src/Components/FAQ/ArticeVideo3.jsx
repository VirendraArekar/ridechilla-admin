import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';
import { H6, P } from '../../AbstractElements';
import { ArticeVideoData3 } from '../../Data/FAQ';

const ArticeVideo3 = () => {
    return (
        <Fragment>
            <Col xl="4">
                <Row>
                    {
                        ArticeVideoData3.map((item, i) => {
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
        </Fragment>
    );
};
export default ArticeVideo3;