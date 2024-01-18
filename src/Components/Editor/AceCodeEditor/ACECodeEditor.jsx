import CssMode from './CSSMode';
import HtmlMode from './HTMLMode';
import JavascriptMode from './JavascriptMode';
import JavaMode from './Java';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';

const ACEEditorContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title='ACE Code Editor' parent='Editors' mainTitle='ACE Codes Editor' />
            <Container fluid={true}>
                <Row>
                    <JavascriptMode />
                    <HtmlMode />
                    <CssMode />
                    <JavaMode />
                </Row>
            </Container>
        </Fragment>
    );
};
export default ACEEditorContain;