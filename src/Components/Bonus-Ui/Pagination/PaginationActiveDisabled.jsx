import React from 'react';
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UL } from '../../../AbstractElements';
import { PaginationActiveDisabled, Previous, Next } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const PaginationActiveDisabledClass = () => {
    return (
        <Col xl="4">
            <Card>
                <HeaderCard title={PaginationActiveDisabled} />
                <CardBody>
                    <Pagination aria-label="...">
                        <UL attrUL={{ className: "pagination pagination-primary d-flex flex-row simple-list" }}>
                            <PaginationItem disabled><PaginationLink>{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript" >{'1'}</PaginationLink></PaginationItem>
                            <PaginationItem active><PaginationLink href="#javascript">{'2'} <span className="sr-only">{'(current)'}</span></PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PaginationActiveDisabledClass;