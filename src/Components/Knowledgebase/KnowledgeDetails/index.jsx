import { Breadcrumbs } from '../../../AbstractElements';
import DetailedSidebar from './DetailedSidebar';
import MainCard from './MainCard';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const KnowledgeDetailContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Knowledgebase Detail' parent='Knowledgebase' title='Knowledgebase Details' />
            <Container fluid={true} className="knowledge-details">
                <Row>
                    <DetailedSidebar />
                    <MainCard />
                </Row>
            </Container>
        </Fragment>
    );
};
export default KnowledgeDetailContain;