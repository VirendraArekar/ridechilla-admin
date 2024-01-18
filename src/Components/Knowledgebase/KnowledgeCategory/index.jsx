import Articals from '../KnowledgeBase/Articals';
import HeaderPart from '../KnowledgeBase/HeaderPart';
import { Breadcrumbs } from '../../../AbstractElements';
import CategoryData from './CategoryData';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const KnowledgeCategoryContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Knowledgebase Category' parent='Knowledgebase' title='Knowledgebase Category' />
            <Container fluid={true}>
                <Row>
                    <HeaderPart />
                    <Articals />
                    <CategoryData />
                </Row>
            </Container>
        </Fragment>
    );
};
export default KnowledgeCategoryContain;