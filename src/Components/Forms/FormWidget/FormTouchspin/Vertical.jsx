import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { Add, touchspin_verticald, VerticalText, VerticalTouchspin } from "../../../../Constant";
import Commen from "./Commen";
const Vertical = () => {
    const [val, setVal] = useState(80)
    const vertical = true;
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{VerticalTouchspin}</H3><span>{Add}  <code>{touchspin_verticald}</code>{VerticalText}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} vertical={vertical} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default Vertical