import { Btn, H5 } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Input, Label, Collapse, CardHeader } from 'reactstrap';
import { AllSkills, Angularjs, GulpPug, htmlcss, Javascript, Nodejs, SpecificSkills } from '../../../../Constant';

const SkillClass = () => {
    const [isFilter, setIsFilter] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant' }} >{SpecificSkills}</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isFilter}>
                        <CardBody className="animate-chk">
                            <Label className="d-block" for="chk-ani21">
                                <Input className="checkbox_animated" id="chk-ani21" type="checkbox" />{htmlcss}
                            </Label>
                            <Label className="d-block" for="chk-ani22">
                                <Input className="checkbox_animated" id="chk-ani22" type="checkbox" />{Javascript}
                            </Label>
                            <Label className="d-block" for="chk-ani23">
                                <Input className="checkbox_animated" id="chk-ani23" type="checkbox" />{Nodejs}
                            </Label>
                            <Label className="d-block" for="chk-ani24">
                                <Input className="checkbox_animated" id="chk-ani24" type="checkbox" />{GulpPug}
                            </Label>
                            <Label className="d-block mb-0" for="chk-ani25">
                                <Input className="checkbox_animated" id="chk-ani25" type="checkbox" />{Angularjs}
                            </Label>
                        </CardBody>
                        <Btn attrBtn={{ className: 'btn btn-block text-center', color: 'primary', type: 'button' }} >{AllSkills}</Btn>
                    </Collapse>
                </Card>
            </Col>
        </Fragment >
    );
};

export default SkillClass;