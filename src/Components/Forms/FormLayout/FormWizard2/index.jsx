import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Breadcrumbs, P, Btn } from '../../../../AbstractElements'
import { Step1, Step2, Step3, Step4 } from '../../../../Constant'
import HeaderCard from '../../../Common/Component/HeaderCard'
import Formstep1 from './Formstep1'
import Formstep2 from './Formstep2'
import Formstep3 from './Formstep3'
import Formstep4 from './Formstep4'

const Formwizard2 = () => {
    const [steps, setSteps] = useState(1);
    const [formdata, setFormdata] = useState({});
    return (
        <Fragment>
            <Breadcrumbs parent="Forms Widgets" title="Form Wizard-2" mainTitle='Form Wizard-2' />
            <Container fluid={true}>
                <Row>
                    <Col sm='12'>
                        <Card>
                            <HeaderCard title={'Form Wizard And Validation'} span1={'Validation Step Form Wizard'} />
                            <CardBody>
                                <div>
                                    <div className="stepwizard">
                                        <div className="stepwizard-row setup-panel">
                                            <div className="stepwizard-step">
                                                <Btn attrBtn={{ color: `${steps === 1 ? 'primary' : 'light'}`, onClick: () => { setSteps(1) } }}>1</Btn>
                                                <P>{Step1}</P>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Btn attrBtn={{ color: `${steps === 2 ? 'primary' : 'light'}`, onClick: () => { setSteps(2) } }}>2</Btn>
                                                <P>{Step2}</P>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Btn attrBtn={{ color: `${steps === 3 ? 'primary' : 'light'}`, onClick: () => { setSteps(3) } }}>3</Btn>
                                                <P>{Step3}</P>
                                            </div>
                                            <div className="stepwizard-step">
                                                <Btn attrBtn={{ color: `${steps === 4 ? 'primary' : 'light'}`, onClick: () => { setSteps(4) } }}>4</Btn>
                                                <P>{Step4}</P>
                                            </div>
                                        </div>
                                    </div>
                                    {steps === 1 && <Formstep1 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 2 && <Formstep2 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 3 && <Formstep3 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                    {steps === 4 && <Formstep4 setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Formwizard2