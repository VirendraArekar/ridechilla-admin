import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, ButtonGroup, Label, Input } from 'reactstrap';
import { Btn, H3 } from '../../../AbstractElements';
import { Option1, Option2 } from '../../../Constant';
import { RadioBtnData } from '../../../Data/Button';

const RadioBtnClass = () => {
    return (
        <Fragment>
            <div className="col-12">
                {RadioBtnData.map((item, i) =>
                    <Card key={i}>
                        <CardHeader className='pb-0'>
                            <H3>{item.title}</H3>
                            <span>{item.span} <code>{item.code1}</code> {item.detail1}<code>{item.code2}</code> {item.detail2} <code>{item.code3}</code> {item.detail3}</span>
                        </CardHeader>
                        <CardBody className="btn-group-showcase">
                            <Row>
                                {item.btnSub.map((btnItem, i) =>
                                (btnItem.checkBox ?
                                    <Col lg={6} sm={12} key={i}>
                                        <ButtonGroup className={btnItem.btnClass} data-toggle="buttons">
                                            <Btn attrBtn={{ color: btnItem.colorClass }} >
                                                <div className={btnItem.divClass}>
                                                    <Input id={btnItem.id1} type="checkbox" />
                                                    <Label htmlFor={btnItem.id1}>{Option1}</Label>
                                                </div>
                                            </Btn>
                                            <Btn attrBtn={{ color: btnItem.colorClass }} >
                                                <div className={btnItem.divClass}>
                                                    <Input id={btnItem.id2} type="checkbox" />
                                                    <Label htmlFor={btnItem.id2}>{Option2}</Label>
                                                </div>
                                            </Btn>
                                        </ButtonGroup>
                                    </Col>
                                    :
                                    <Col xl={4} md={6} lg={12} sm={12} key={i}>
                                        <div className={btnItem.btnClass}>
                                            <ButtonGroup>
                                                <Btn attrBtn={{ color: btnItem.colorClass }} >
                                                    <div className={btnItem.divClass}>
                                                        <Input id={btnItem.id1} type="radio" name="radio1" value="option1" />
                                                        <Label htmlFor={btnItem.id1}>{btnItem.title1}</Label>
                                                    </div>
                                                </Btn>
                                                <Btn attrBtn={{ color: btnItem.colorClass }}>
                                                    <div className={btnItem.divClass}>
                                                        <Input id={btnItem.id2} type="radio" name="radio1" value="option1" defaultChecked />
                                                        <Label htmlFor={btnItem.id2}>{btnItem.title2}</Label>
                                                    </div>
                                                </Btn>
                                            </ButtonGroup>
                                        </div>
                                    </Col>)
                                )}
                            </Row>
                        </CardBody>
                    </Card>
                )}

            </div>
        </Fragment>
    );
};

export default RadioBtnClass;