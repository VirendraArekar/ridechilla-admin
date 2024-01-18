import React, { Fragment } from 'react';
import { H4,H5, LI, P, UL } from '../../../../AbstractElements';
import { Truck, Clock } from 'react-feather';
import { Card, CardBody, Col, Label, Input, Media, } from 'reactstrap';
import {Aime, Aliff, Celio, FreeShipping, FreeShippingWorldWide, OnlineService, Pepe_Jeans, Raymond, ServiceTime} from '../../../../Constant';

const BrandShipping = () => {
    return (
        <Fragment>
            <Col xl="2" md="6" className="box-col-5 xl-50 proorder-lg-1">
                <Card>
                    <CardBody>
                        <div className="filter-block">
                            <H4>{'Brand'}</H4>
                            <UL attrUL={{ className: 'simple-list' }}>
                                <LI>
                                    <div className="form-check">
                                        <Input className="form-check-input" id="Raymond" type="checkbox" value="" />
                                        <Label className="form-check-label" htmlFor="Raymond">{Raymond}</Label>
                                    </div>
                                </LI>
                                <LI>
                                    <div className="form-check">
                                        <Input className="form-check-input" id="Pepe-Jeans" type="checkbox" value="" />
                                        <Label className="form-check-label" htmlFor="Pepe-Jeans">{Pepe_Jeans}</Label>
                                    </div>
                                </LI>
                                <LI>
                                    <div className="form-check">
                                        <Input className="form-check-input" id="Celio" type="checkbox" value="" />
                                        <Label className="form-check-label" htmlFor="Celio">{Celio}</Label>
                                    </div>
                                </LI>
                                <LI>
                                    <div className="form-check">
                                        <Input className="form-check-input" id="aime" type="checkbox" value="" />
                                        <Label className="form-check-label" htmlFor="aime">{Aime}</Label>
                                    </div>
                                </LI>
                                <LI>
                                    <div className="form-check">
                                        <Input className="form-check-input" id="aliff" type="checkbox" value="" />
                                        <Label className="form-check-label" htmlFor="aliff">{Aliff}</Label>
                                    </div>
                                </LI>
                            </UL>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="collection-filter-block">
                            <UL attrUL={{ className: 'simple-list pro-services' }}>
                                <LI>
                                    <Media className='d-flex'><Truck />
                                        <div className='flex-grow-1' >
                                            <H5>{FreeShipping}</H5>
                                            <P>{FreeShippingWorldWide}</P>
                                        </div>
                                    </Media>
                                </LI>
                                <LI>
                                    <Media className='d-flex'><Clock />
                                        <div className='flex-grow-1' >
                                            <H5>{ServiceTime}</H5>
                                            <P>{OnlineService}</P>
                                        </div>
                                    </Media>
                                </LI>
                            </UL>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default BrandShipping;