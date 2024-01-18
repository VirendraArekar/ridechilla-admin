import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Form, FormGroup, Input, Collapse, } from 'reactstrap';
import { MutualFriends, } from '../../../Constant';
import { H3, Image, Btn } from '../../../AbstractElements';
import { MutualFrndData } from '../../../Data/SocialApp';

const LeftBarMutual = () => {
    const [isMutual, setisMutual] = useState(true);
    return (
        <Fragment>
            <Col md="12" sm="6">
                <Card>
                    <CardHeader>
                        <H3 attrH3={{ className: 'p-0' }}>
                            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisMutual(!isMutual), datatoggle: 'collapse', datatarget: '#collapseicon14', 'aria-expanded': isMutual, 'aria-controls': 'collapseicon14' }}>{MutualFriends}</Btn>
                        </H3>
                    </CardHeader>
                    <Collapse isOpen={isMutual}>
                        <CardBody className="social-status filter-cards-view">
                            <Form>
                                <FormGroup className="form-group m-0">
                                    <Input className="form-control-social" type="search" placeholder="Search Contacts.." />
                                </FormGroup>
                            </Form>
                            {MutualFrndData.map((item, i) =>
                                <Media className='d-flex' key={i}>
                                    <Image attrImage={{ className: 'img-50 rounded-circle m-r-15', src: `${item.img}`, alt: 'twoImg' }} />
                                    <div className={`social-status ${item.socialClass}`}></div>
                                    <Media body className='flex-grow-1'>
                                        <span className="f-w-600 d-block">{item.title}</span>
                                        <span className="d-block">{item.email}</span>
                                    </Media>
                                </Media>
                            )}
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default LeftBarMutual;