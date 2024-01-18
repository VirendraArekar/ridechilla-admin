import React from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { UL } from '../../../AbstractElements';
import { PaginationColor, Previous, Next } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const PaginationColorClass = () => {
    return (
        <Col xl="12">
            <Card>
                <HeaderCard title={PaginationColor} />
                <CardBody>
                    <Row>
                        <Col>
                            <Pagination className="m-b-30" aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-primary d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                            <Pagination className="m-b-30" aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-secondary d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                            <Pagination className="m-b-30" aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-success d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                        </Col>
                        <Col>
                            <Pagination className="m-b-30" aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-info d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                            <Pagination className="m-b-30" aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-warning d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                            <Pagination aria-label="Page navigation example">
                                <UL attrUL={{ className: 'pagination pagination-danger d-flex flex-row' }}>
                                    <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'1'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'2'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                                </UL>
                            </Pagination>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PaginationColorClass;