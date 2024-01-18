import { Breadcrumbs } from '../../../AbstractElements';
import LearningFilter from '../Common/LearningFilter';
import BlogBox from './BlogBox';
import BoxList from './BoxList';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const LearningList = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Learning List" parent="Learning" title="Learning List" />
            <Container fluid={true}>
                <Row className='learning-block'>
                    <Col xl="9" className='box-col-9'>
                        <Row>
                            <BlogBox />
                            <BoxList />
                        </Row>
                    </Col>
                    <Col xl="3" className='order-filter box-col-3'>
                        <LearningFilter />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LearningList;