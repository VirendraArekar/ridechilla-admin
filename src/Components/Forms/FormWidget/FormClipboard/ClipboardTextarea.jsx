import React, { Fragment, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { P, Btn } from "../../../../AbstractElements";
import { ClipboardOnTextarea, Copy, Cut, Cutandcopytextarea } from "../../../../Constant";
import HeaderCard from "../../../Common/Component/HeaderCard";
const ClipboardTextarea = () => {
    const vall = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
    const [state, setState] = useState({
        value: vall,
        copied: false
    })
    return (
        <Fragment>
            <Col sm="12" md="6" >
                <Card>
                    <HeaderCard title={ClipboardOnTextarea} />
                    <CardBody >
                        <div className="clipboaard-container">
                            <P attrPara={{ className: "card-description" }}>{Cutandcopytextarea}</P>
                            <Input className="form-control" id="clipboardExample2" type="textarea" rows="1" spellCheck="false" defaultValue={state.value} onChange={({ target: { value } }) => setState({ value, copied: false })}></Input>
                            <div className="mt-3 text-end">
                                <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                                    <Button className='btn-clipboard me-1' color='primary'><i className="fa fa-copy"></i> {Copy}</Button>
                                </CopyToClipboard>
                                <CopyToClipboard text={state.value}
                                    onCopy={() => { setState({ copied: true, value: '' }); document.getElementById("clipboardExample2").value = ''; }}>
                                    <Button className='btn-clipboard-cut'><i className="fa fa-cut"></i> {Cut}</Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    )
}
export default ClipboardTextarea