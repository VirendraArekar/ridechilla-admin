import React, { Fragment, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { Clipboardon, Copy, CopyParagraph } from "../../../../Constant";
import HeaderCard from "../../../Common/Component/HeaderCard";

const ClipboardPara = () => {
    const vall = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    const [state, setState] = useState({
        value: vall,
        copied: false
    })
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <HeaderCard title={Clipboardon} />
                    <CardBody>
                        <div className="clipboaard-container">
                            <P className="card-description">{CopyParagraph}</P>
                            <CopyToClipboard text={state.value}
                                onCopy={() => setState({ copied: true })}>
                                <H6 attrH6={{ className: "border rounded card-body f-w-300" }}>
                                    {vall}
                                </H6>
                            </CopyToClipboard>
                            <div className="mt-3 text-end">
                                <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                                    <Button className='btn-clipboard' color='primary' ><i className="fa fa-copy"></i> {Copy}</Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default ClipboardPara