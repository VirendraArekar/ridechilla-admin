import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Breadcrumbs, H3, LI, OL } from '../../../AbstractElements';
import { Bootstrap, Colorcode, ColoredBreadcrumb, Data, DefaultBootstrapBreadcrumb, Defaultcode, Home, Library, NavBreadcode, NavBreadcrumb, NavBreadtext, useclass } from '../../../Constant';

const BreadcrumbClass = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Breadcrumb" parent="Bonus-ui" title="Breadcrumb" />
            <Container fluid={true}>
                <Row>
                    <Col lg="6">
                        <Card>
                            <CardHeader className="pb-0">
                                <H3>{DefaultBootstrapBreadcrumb}</H3>
                                <span>{useclass} <code>{Defaultcode}</code></span>
                            </CardHeader>
                            <CardBody>
                                <OL attrOL={{ className: 'breadcrumb p-t-0 p-l-0' }} >
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Home}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb p-l-0' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb p-l-0' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Library}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>Data</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb m-b-0 p-b-0 p-l-0' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript"><i className="fa fa-home"></i></a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} >{Library}</LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Data}</LI>
                                </OL>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <CardHeader className="pb-0">
                                <H3>{NavBreadcrumb}</H3><span>{useclass} <code>{NavBreadcode}</code> {NavBreadtext}</span>
                            </CardHeader>
                            <CardBody>
                                <nav className="breadcrumb"><a className="breadcrumb-item" href="#javascript">{Home}</a><a className="breadcrumb-item" href="#javascript">{Library}</a><span className="breadcrumb-item active">{Bootstrap}</span></nav>
                                <nav className="breadcrumb breadcrumb-icon"><a className="breadcrumb-item" href="#javascript">{Home}</a><a className="breadcrumb-item" href="#javascript">{Library}</a><span className="breadcrumb-item active">{Bootstrap}</span></nav>
                                <nav className="breadcrumb breadcrumb-no-divider"><a className="breadcrumb-item" href="#javascript">{Home}</a><a className="breadcrumb-item" href="#javascript">{Library}</a><span className="breadcrumb-item active">{Bootstrap}</span></nav>
                                <nav className="breadcrumb mb-0"><a className="breadcrumb-item" href="#javascript"><i className="fa fa-home"></i></a><a className="breadcrumb-item" href="#javascript">{Library}</a><span className="breadcrumb-item active">{Bootstrap}</span></nav>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H3>{ColoredBreadcrumb}</H3>
                                <span>{useclass} <code>{Colorcode}</code></span>
                            </CardHeader>
                            <CardBody>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-primary' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-secondary' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-success' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-info' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-warning' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-danger' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-30 bg-light' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a className="txt-dark" href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item txt-dark active' }}>{Library}</LI>
                                </OL>
                                <OL attrOL={{ className: 'breadcrumb breadcrumb-colored m-b-0 bg-dark' }}>
                                    <LI attrLI={{ className: 'breadcrumb-item' }} ><a href="#javascript">{Home}</a></LI>
                                    <LI attrLI={{ className: 'breadcrumb-item active' }}>{Library}</LI>
                                </OL>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BreadcrumbClass;