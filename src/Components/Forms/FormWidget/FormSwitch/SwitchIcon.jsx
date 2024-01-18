import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Media } from 'reactstrap';
import { SwitchSizingData } from '../../../../Data/FormWidgets';

const SwitchIcon = () => {
    return (
        <Fragment>
            <CardBody className="row switch-showcase">
                <Col sm="12">
                    {
                        SwitchSizingData.map((item) => {
                            return (
                                <Media className={item.mainclass} key={item.id}>
                                    <Label className="col-form-label m-r-10">{item.title}</Label>
                                    <Media body className={`flex-grow-1 ${item.mediaclass1}`}>
                                        <Label className="switch">
                                            <Input type="checkbox" defaultChecked={item.checkedclass} />
                                            <span className={item.spanclass} ></span>
                                        </Label>
                                    </Media>
                                </Media>
                            );
                        })
                    }
                </Col>
            </CardBody>
        </Fragment>
    );
};
export default SwitchIcon;