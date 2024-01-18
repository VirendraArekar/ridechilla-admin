import { MDEEditorExample } from '../../../Constant';
import SmallEditor from './SmallEditor';
import SimpleMDE from 'react-simplemde-editor';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import React, { useState, Fragment } from 'react';
import HeaderCard from '../../Common/Component/HeaderCard';
import { Breadcrumbs } from '../../../AbstractElements';

const MdeEDitorContain = () => {
    const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
    const handleChange = () => {
        setText('Enter text in the area on the left. For more info, click the ? (help) icon in the menu.');
    };
    return (
        <Fragment>
            <Breadcrumbs title='MDE Editor' parent='Editors' mainTitle='MDE Editor' />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={MDEEditorExample} />
                            <CardBody>
                                <SimpleMDE
                                    id="editor_container"
                                    onChange={handleChange}
                                    value={text}
                                    options={{
                                        autofocus: true,
                                        spellChecker: false
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <SmallEditor />
            </Container>
        </Fragment>
    );
};
export default MdeEDitorContain;