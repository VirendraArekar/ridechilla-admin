import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { Add, DefaultTouchspint, touchspin, touchspintext } from "../../../../Constant";
import Commen from "./Commen";
const DefaultTouchSpin = () => {
    const [val, setVal] = useState(40)
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{DefaultTouchspint}</H3><span>{Add} <code>{touchspin}</code> {touchspintext}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default DefaultTouchSpin