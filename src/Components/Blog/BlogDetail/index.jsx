import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BlogBox from './BlogBox';
import Perspiciatis from './Perspiciatis';
import Gallery from './Gallery';

const BlogDetail = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Blog Details" parent="Blog" title="Blog Details" />
            <Container fluid={true} className="blog-page">
                <Row>
                    <BlogBox />
                    <Col xxl="6" className='set-col-12 box-col-50 xl-60'>
                        <Perspiciatis />
                    </Col>
                    <Gallery />
                </Row>
            </Container>
        </Fragment>
    );
};
export default BlogDetail;