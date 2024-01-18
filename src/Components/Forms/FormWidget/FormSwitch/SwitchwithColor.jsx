import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Media } from 'reactstrap';
import { Switchwithcolor } from '../../../../Data/FormWidgets';

const SwitchwithColor = () => {
    return (
        <Fragment>
            <CardBody className="row switch-showcase">
                <Col sm="12">
                    {
                        Switchwithcolor.map((item) => {
                            return (
                                <Media className={item.mainclass} key={item.id}>
                                    <Label className="col-form-label m-r-10">{item.title}</Label>
                                    <Media body className={`flex-grow-1 ${item.mediaclass}`}>
                                        <Label className="switch">
                                            <Input type="checkbox" disabled={item.disabled} defaultChecked={true} />
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
export default SwitchwithColor;