import React, { Fragment, useState } from "react";
import { Check } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import Commen from "./Commen";
const TickIcon = () => {
    const [val, setVal] = useState(59)
    const post = <Check />
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H3 attrH3={{ className: "card-title" }}>{'Touchspin With Icon'}</H3><span>{'Add icon class in'} <code>{'data-bts-postfix'}</code>{'attribute to icon to postfix as well prefix.'}</span>
                    </CardHeader>
                    <CardBody>
                        <Commen val={val} setVal={setVal} post={post} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default TickIcon