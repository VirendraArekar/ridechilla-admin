import React, { Fragment } from 'react'
import { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H3, Btn } from '../../../AbstractElements';
import BtnDescription from './BtnDescription';
import { Danger, DifferentButtonstyle, ButtonStyle, Info, Light, Primary, secondary, Success, Warning } from '../../../Constant';
import Btnstyle from './Btnstyle';

const Bttons = () => {
    const [Classname, setclassName] = useState();
    const [size, setSize] = useState();
    const onSelectchange = (value) => {
        setclassName(value);
    }
    const onchangeSize = (size) => {
        setSize(size);
    }
    return (
        <Fragment>
            <Row>
                <Col xl="4" lg="5">
                    <Card>
                        <CardHeader className='border-bottom'>
                            <H3>{DifferentButtonstyle}</H3>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Btnstyle onchangeSize={onchangeSize} onSelectchange={onSelectchange} />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="8" lg="7">
                    <div>
                        <Card>
                            <CardHeader className='border-bottom'>
                                <H3>{ButtonStyle}</H3>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'primary-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-primary' : ''} ${Classname !== 'outline' && 'btn-primary'}`} m-1 w-75`, size: `${size && size}` }} >{Primary}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'secondary-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-secondary' : ''} ${Classname !== 'outline' && 'btn-secondary'}`} m-1 w-75`, size: `${size && size}` }} >{secondary}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'success-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-success' : ''} ${Classname !== 'outline' && 'btn-success'}`} m-1 w-75`, size: `${size && size}` }} >{Success}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'info-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-info' : ''} ${Classname !== 'outline' && 'btn-info'}`} m-1 w-75`, size: `${size && size}` }} >{Info}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'warning-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-warning' : ''} ${Classname !== 'outline' && 'btn-warning'}`} m-1 w-75`, size: `${size && size}` }} >{Warning}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'danger-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-danger' : ''} ${Classname !== 'outline' && 'btn-danger'}`} m-1 w-75`, size: `${size && size}` }} >{Danger}</Btn>
                                    </Col>
                                    <Col sm='6' className='text-center'>
                                        <Btn attrBtn={{ color: `${Classname === 'gradien' ? 'light-gradien' : `${Classname && Classname}${(Classname === 'air' || Classname === 'outline') ? '-light' : ''} ${Classname !== 'outline' && 'btn-light'}`} m-1 w-75`, size: `${size && size}` }} >{Light}</Btn>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                <BtnDescription />
            </Row>
        </Fragment>
    )
}
export default Bttons;