import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Input, Label, Media } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { SwitchColor } from '../../../../Constant';
import { Switchcolor } from '../../../../Data/FormWidgets';

const BasicColor = () => {
    return (
        <Fragment>
            <Col sm="12" xl="6" lg="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3>{SwitchColor}</H3>
                    </CardHeader>
                    <CardBody className="row switch-showcase height-equal">
                        <Col sm="12">
                            {
                                Switchcolor.map((item, index) => {
                                    return (
                                        <Media className={item.mainclass} key={index}>
                                            <Label className="col-form-label m-r-10">{item.title}</Label>
                                            <Media body className={`flex-grow-1 ${item.mediaclass}`}>
                                                {
                                                    (item.title === 'Bootstrap Switch' || item.title === 'Disabled checked') ?
                                                        <div className="form-check form-switch">
                                                            <Input className="form-check-input" defaultChecked={item.checkedclass} disabled={item.disabled} type="checkbox" />
                                                        </div>
                                                        :
                                                        <Label className="switch">
                                                            <Input type="checkbox" defaultChecked={item.checkedclass} />
                                                            <span className={item.spanclass} ></span>
                                                        </Label>
                                                }
                                            </Media>
                                        </Media>
                                    );
                                })
                            }
                        </Col>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default BasicColor;