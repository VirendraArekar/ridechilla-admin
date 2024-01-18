import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import Commen from "./Commen";
const IconButton = () => {
    const [val, setVal] = useState(55)
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{'Touchspin Icon Button'}</H3><span>{'Use'} <code>{'.data-bts-button-down-txt & data-bts-button-up-txt'}</code>{' attribute to set touchspin icon-button.'}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default IconButton