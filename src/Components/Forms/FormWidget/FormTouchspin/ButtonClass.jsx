import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import Commen from "./Commen";
const ButtonClass = () => {
    const [val, setVal] = useState(25)
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>Change Button Class to link</H3><span>Add <code>.attribute to change button</code>Class.</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default ButtonClass