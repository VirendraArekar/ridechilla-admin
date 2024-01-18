import { Btn, H5 } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Input, Label } from 'reactstrap';
import { Accounting, AllIndustries, ComputerSoftware, FinancialServices, ITEngineer, Serviceindustry } from '../../../../Constant';

const Industry = () => {
    const [isFilter, setIsFilter] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant' }} >Industry</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isFilter}>
                        <CardBody className="animate-chk">
                            <Label className="d-block" for="chk-ani16">
                                <Input className="checkbox_animated" id="chk-ani16" type="checkbox" />{ComputerSoftware}(14)
                            </Label>
                            <Label className="d-block" for="chk-ani17">
                                <Input className="checkbox_animated" id="chk-ani17" type="checkbox" />{ITEngineer}(10)
                            </Label>
                            <Label className="d-block" for="chk-ani18">
                                <Input className="checkbox_animated" id="chk-ani18" type="checkbox" />{Serviceindustry}(20)
                            </Label>
                            <Label className="d-block" for="chk-ani19">
                                <Input className="checkbox_animated" id="chk-ani19" type="checkbox" />{Accounting}(34)
                            </Label>
                            <Label className="d-block mb-0" for="chk-ani20">
                                <Input className="checkbox_animated" id="chk-ani20" type="checkbox" />{FinancialServices}(5)
                            </Label>
                        </CardBody>
                        <Btn attrBtn={{ className: 'btn btn-block  text-center', color: 'primary', type: 'button' }} >{AllIndustries}</Btn>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Industry;