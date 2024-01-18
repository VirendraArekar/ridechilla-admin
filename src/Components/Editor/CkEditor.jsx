import React, { Fragment, useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CKEditors from 'react-ckeditor-component';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import HeaderCard from '../Common/Component/HeaderCard';
import { CKEditorExample } from '../../Constant';

const CkEditorContain = () => {
    const [content, setContent] = useState('content');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent);
    };
    return (
        <Fragment>
            <Breadcrumbs title='Ck Editor' parent='Editors' mainTitle='Ck Editor' />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={CKEditorExample} />
                            <CardBody>
                                <CKEditors
                                    activeclassName="p10"
                                    content={content}
                                    events={{
                                        'change': onChange
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default CkEditorContain;