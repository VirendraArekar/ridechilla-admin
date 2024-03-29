import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import MailSidebar from '../MailInbox/MailSidebar';
import ComposeMessage from './ComposeMessage';

const ComposeContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Email Application" parent="Email" title="Email Compose" />
            <Container fluid={true}>
                <div className="email-wrap">
                    <Row>
                        <Col xl="3" md="6" className="xl-30 box-col-30">
                            <MailSidebar />
                        </Col>
                        <Col xl="9" md="12" className="xl-70 box-col-70">
                            <ComposeMessage />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default ComposeContain;