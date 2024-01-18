import React, { Fragment } from 'react';
import { Card, CardBody, Col, Input, Label, Media } from 'reactstrap';
import { BasicSwitchData } from '../../../../Data/FormWidgets';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { Basicswitch } from '../../../../Constant';

const BasicSwitch = () => {
    return (
        <Fragment>
            <Col sm="12" xl="6" lg="12" md="6">
                <Card>
                    <HeaderCard title={Basicswitch} />
                    <CardBody className="row switch-showcase height-equal">
                        <Col sm="12">
                            {
                                BasicSwitchData.map((item, index) => {
                                    return (
                                        <Media className={item.mainclass} key={index}>
                                            <Label className="col-form-label m-r-10">{item.title}</Label>
                                            <Media body className={`flex-grow-1 ${item.mediaclass}`}>
                                                {
                                                    (item.title === 'Bootstrap Switch' || item.title === 'Bootstrap Disable') ?
                                                        <div className="form-check form-switch">
                                                            <Input className="form-check-input" defaultChecked={item.checkedclass} disabled={item.disabled} type="checkbox" />
                                                        </div>
                                                        :
                                                        <Label className="switch">
                                                            <Input type="checkbox" defaultChecked={item.checkedclass} disabled={item.disabled} /><span className="switch-state" ></span>
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
export default BasicSwitch;