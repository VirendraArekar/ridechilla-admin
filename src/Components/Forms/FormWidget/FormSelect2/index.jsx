import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FullColored from './FullColored';
import OutlineColor from './OutlineColor';
import SelectForm from './SelectForm';
import { FullColoredVariant, OutlineColorVariant, Select2 } from '../../../../Constant';
import { Breadcrumbs } from '../../../../AbstractElements';

const FormSelectContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Select2' parent="Form Widgets" title="Select2" />           
            <Container fluid={true}>
                <div className="select2-drpdwn">
                    <Row>
                        <Col md="12">
                            <Card>
                                <HeaderCard title={Select2} />
                                <CardBody className='o-hidden'>
                                    <SelectForm />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card>
                                <HeaderCard title={OutlineColorVariant} />
                                <CardBody>
                                    <OutlineColor />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card>
                                <HeaderCard title={FullColoredVariant} />
                                <CardBody>
                                    <FullColored />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default FormSelectContain;