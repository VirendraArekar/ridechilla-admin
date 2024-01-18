import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import Commen from "./Commen";
const Postfix = () => {
    const [val, setVal] = useState(30)
    const post = "%"
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{'Touchspin with Postfix'}</H3><span>{'Add'} <code>{'.data-bts-postfix="POSTFIX_VALUE"'}</code>{' attribute to input to add postfix to touchspin inputgroup.'}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} post={post} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default Postfix