import React, { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs, P } from "../../AbstractElements";
import HeaderCard from "../Common/Component/HeaderCard";
import { BasicExamplestext, scrollpara, SampleCard } from "../../Constant";

const SamplePage = ({mainTitle,title,parent}) => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle={mainTitle ? mainTitle:'Sample Page'} title={title ? title:'Sample Page'} parent={parent?parent:'Pages'} />
            <Container fluid={true} className="fix-sample">
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={SampleCard} span1={BasicExamplestext} />
                            <CardBody>
                                <P>{scrollpara}</P>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default SamplePage;