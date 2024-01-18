import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import Commen from "./Commen";
const Prefix = () => {
    const [val, setVal] = useState(10)
    const pre = "#"
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{'Touchspin with Prefix'}</H3><span>{'Add'} <code>{'data-bts-prefix="PREFIX_VALUE"'}</code>  {'attribute to input to add prefix to touchspin input group.'}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} pre={pre} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default Prefix