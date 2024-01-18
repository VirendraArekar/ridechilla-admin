import { H5, Btn } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Input, Label } from 'reactstrap';
import { AllJobTitle, Frontenddesigner, GraphicDesigner, JobTitle, PHPdeveloper, ReactDeveloper, UIUxdesigner } from '../../../../Constant';

const JobTitleClass = () => {
    const [isFilter, setIsFilter] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{className:'mb-0'}}>
                            <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant' }} >{JobTitle}</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isFilter}>
                        <CardBody className="animate-chk">
                            <Label className="d-block" for="chk-ani11">
                                <Input className="checkbox_animated" id="chk-ani11" type="checkbox" />{UIUxdesigner}
                            </Label>
                            <Label className="d-block" for="chk-ani12">
                                <Input className="checkbox_animated" id="chk-ani12" type="checkbox" />{GraphicDesigner}(10)
                            </Label>
                            <Label className="d-block" for="chk-ani13">
                                <Input className="checkbox_animated" id="chk-ani13" type="checkbox" />{Frontenddesigner}(15)
                            </Label>
                            <Label className="d-block" for="chk-ani14">
                                <Input className="checkbox_animated" id="chk-ani14" type="checkbox" />{PHPdeveloper}(42)
                            </Label>
                            <Label className="d-block mb-0" for="chk-ani15">
                                <Input className="checkbox_animated" id="chk-ani15" type="checkbox" />{ReactDeveloper}(5)
                            </Label>
                        </CardBody>
                        <Btn attrBtn={{ className: 'btn btn-block text-center', color: 'primary', type: 'button' }} >{AllJobTitle}</Btn>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default JobTitleClass;