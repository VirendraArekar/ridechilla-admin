import React, { Fragment, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { Copyhighlighte, CopyPortionParagraph, Loremipsum, Loremipsum2 } from "../../../../Constant";
import HeaderCard from "../../../Common/Component/HeaderCard";

const ClipboardHighlight = () => {
    const Highlight = "dolor sit amet"
    const [state, setState] = useState({
        value: Highlight,
        copied: false
    })
    return (
        <Fragment>
            <Col sm="12" md="6">
                <Card>
                    <HeaderCard title={CopyPortionParagraph} />
                    <CardBody>
                        <div className="clipboaard-container">
                            <P className="card-description">{CopyPortionParagraph}</P>
                            <H6 attrH6={{ className: "border rounded card-body f-w-300" }}>{Loremipsum} <span className="bg-primary text-white p-1" >{Highlight}</span>{Loremipsum2}</H6>
                            <div className="mt-3 text-end">
                                <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                                    <Button className='btn-clipboard' color='primary'><i className="fa fa-copy"></i> {Copyhighlighte}</Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default ClipboardHighlight