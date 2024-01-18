import React, { Fragment } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Switchoutline, Switchsizing, SwitchUncheckedOutline, SwitchWithcolor, SwitchWithIcon } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import BasicSwitch from './BasicSwitch';
import BasicColor from './SwitchColor';
import SwitchIcon from './SwitchIcon';
import SwitchOutline from './SwitchOutline';
import SwitchSizing from './SwitchSizing';
import SwitchwithColor from './SwitchwithColor';

const FormSwitchContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title='Switch' mainTitle='Switch' parent='Form Widgets' />
            <Container fluid={true}>
                <Row>
                    <BasicSwitch />
                    <BasicColor />
                    <Col sm="12" xl="6" lg="12" md="6">
                        <Card>
                            <HeaderCard title={Switchoutline} />
                            <SwitchOutline check={true} />
                        </Card>
                    </Col>
                    <Col sm="12" xl="6" lg="12" md="6">
                        <Card>
                            <HeaderCard title={SwitchUncheckedOutline} />
                            <SwitchOutline check={false} />
                        </Card>
                    </Col>
                    <Col sm="12" xl="4">
                        <Card>
                            <HeaderCard title={Switchsizing} />
                            <SwitchSizing />
                        </Card>
                    </Col>
                    <Col sm="12" xl="4">
                        <Card>
                            <HeaderCard title={SwitchWithIcon} />
                            <SwitchIcon />
                        </Card>
                    </Col>
                    <Col sm="12" xl="4">
                        <Card>
                            <HeaderCard title={SwitchWithcolor} />
                            <SwitchwithColor />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default FormSwitchContain;