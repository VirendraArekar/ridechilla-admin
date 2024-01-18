import { Breadcrumbs } from '../../../AbstractElements';
import LearningFilter from '../Common/LearningFilter';
import LearningDeatil from './LearningDeatil';
import React, { Fragment } from 'react';
import { Container, Row , Col} from 'reactstrap';

const DetailCourse = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Detailed Course" parent="Learning" title="Detailed Course" />
            <Container fluid={true} className="learning-detail">
                <Row>
                    <LearningDeatil />
                    <Col xl="3" className='order-filter box-col-30 xl-40'>
                        <LearningFilter />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DetailCourse;