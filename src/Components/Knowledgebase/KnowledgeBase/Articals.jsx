import { H2, P } from '../../../AbstractElements';
import { ArticalsData } from '../../../Data/KnowledegesBase';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';

const Articals = () => {
    return (
        <Fragment>
            {
                ArticalsData.map((item) => {
                    return (
                        <Col xl="4" className={item.class} key={item.id}>
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="d-flex faq-widgets">
                                        <Media body className='flex-grow-1'>
                                            <H2>{item.title}</H2>
                                            <P>{item.para}</P>
                                        </Media>
                                        {item.icon}
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })
            }
        </Fragment>
    );
};
export default Articals;