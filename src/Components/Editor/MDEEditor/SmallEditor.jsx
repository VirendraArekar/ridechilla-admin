import { H3, P } from '../../../AbstractElements';
import SimpleMDE from 'react-simplemde-editor';
import React, { useState, Fragment } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Instructions, MNDeditortext, SecondExample } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const SmallEditor = () => {
    const [value, setValue] = useState();
    const handelChange = (e) => {
        setValue(e);
    };
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <HeaderCard title={SecondExample} />
                        <CardBody>
                            <Row>
                                <Col md="6">
                                    <SimpleMDE
                                        id="editor_container"
                                        options={{
                                            autofocus: true,
                                            spellChecker: false
                                        }}
                                        onChange={handelChange} />
                                </Col>
                                <div className="col-md-6 reader">
                                    <H3>{Instructions}</H3>
                                    <P>{MNDeditortext}</P><br />
                                    {value}
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default SmallEditor;