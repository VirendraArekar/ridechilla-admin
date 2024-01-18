import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Media } from 'reactstrap';
import { SwitchOutlinecolor } from '../../../../Data/FormWidgets';

const SwitchOutline = ({check}) => {
    return (
        <Fragment>
            <CardBody className="row switch-showcase height-equal">
                <Col sm="12">
                    {
                        SwitchOutlinecolor.map((item) => {
                            return (
                                <Media className={item.mainclass} key={item.id}>
                                    <Label className="col-form-label m-r-10">{item.title}</Label>
                                    <Media body className={`flex-grow-1 ${item.mediaclass}`}>
                                        <Label className="switch">
                                            <Input type="checkbox" defaultChecked={check} />
                                            <span className={item.spanclass}></span>
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
export default SwitchOutline;