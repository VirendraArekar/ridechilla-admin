import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import ClipboardHighlight from './ClipboardHighlight';
import ClipboardPara from './ClipboardPara';
import ClipboardText from './ClipboardText';
import ClipboardTextarea from './ClipboardTextarea';

const FormClipboardContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title='Clipboard' mainTitle='Clipboard' parent='Form Widgets' />
            <Container fluid={true}>
                <Row>
                    <ClipboardText />
                    <ClipboardTextarea />
                    <ClipboardPara />
                    <ClipboardHighlight />
                </Row>
            </Container>
        </Fragment>
    );
};
export default FormClipboardContain;