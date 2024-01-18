import React from "react";
import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { UL } from "../../../AbstractElements";
import { PaginationSizing, Previous, Next } from '../../../Constant'
import HeaderCard from "../../Common/Component/HeaderCard";

const PaginationSizingClass = () => {
    return (
        <Col xl="6">
            <Card>
                <HeaderCard title={PaginationSizing} />
                <CardBody>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-lg pagination-primary d-flex flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-sm pagination-primary d-flex flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                    <Pagination aria-label="Page navigation example">
                        <UL attrUL={{ className: 'pagination pagination-xs pagination-primary d-flex flex-row' }}>
                            <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                        </UL>
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PaginationSizingClass;