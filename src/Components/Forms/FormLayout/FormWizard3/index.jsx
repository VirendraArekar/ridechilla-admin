import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap'
import { Breadcrumbs, P } from '../../../../AbstractElements'
import { BirthDate, Email, Registration } from '../../../../Constant'
import HeaderCard from '../../../Common/Component/HeaderCard'
import Formstep1 from './Formstep1'
import Formstep2 from './Formstep2'
import Formstep3 from './Formstep3'

const FormWizard3 = () => {
    const [steps, setSteps] = useState(1);
    const [formdata, setFormdata] = useState({});
    return (
        <Fragment>
            <Breadcrumbs parent="Forms Widgets" title="Form Wizard-3" mainTitle='Form Wizard-3' />
            <Container fluid={true}>
                <Row>
                    <Col sm='12'>
                        <Card>
                            <HeaderCard title={'Form Wizard With Icon'} />
                            <CardBody>
                                <Form className='f1' method='post'>
                                    <div className="f1-steps">
                                        <div className="f1-progress">
                                            <div className="f1-progress-line" data-now-value="49" data-number-of-steps={3} />
                                        </div>
                                        <div className={`f1-step ${steps === 1 ? "active" : 'activated'}`}>
                                            <div className="f1-step-icon"><i className="fa fa-user" /></div>
                                            <P>{Registration}</P>
                                        </div>
                                        <div className={`f1-step ${steps === 2 ? "active" : ''} ${steps > 2 ? "activated" : ''}`}>
                                            <div className="f1-step-icon"><i className="fa fa-key" /></div>
                                            <P>{Email}</P>
                                        </div>
                                        <div className={`f1-step ${steps === 3 ? "active" : ''}`}>
                                            <div className="f1-step-icon"><i className="fa fa-twitter" /></div>
                                            <P>{BirthDate}</P>
                                        </div>
                                    </div>
                                </Form>
                                {steps === 1 && <Formstep1 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                {steps === 2 && <Formstep2 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                {steps === 3 && <Formstep3 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default FormWizard3
