
import { Breadcrumbs, H3 } from '../../../AbstractElements';
import Articals from './Articals';
import FeaturesTutorial from './FeaturesTutorial';
import HeaderPart from './HeaderPart';
import { Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import { FeaturedTutorials } from '../../../Constant';

const KnowledgeBaseContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Knowledgebase' parent='Knowledgebase' title='Knowledgebase' />
            <Container fluid={true} className="faq-section">
                <Row>
                    <HeaderPart />
                    <Articals />
                    <Col lg="12" className="featured-tutorial">
                        <div className="header-faq">
                            <H3 attrH3={{ className: 'mb-0' }} >{FeaturedTutorials}</H3>
                        </div>
                        <FeaturesTutorial />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default KnowledgeBaseContain;