import { Breadcrumbs } from '../../../AbstractElements';
import Sidebar from './Sidebar';
import CardsClass from './Cards';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Next, Previous } from '../../../Constant';

const JobCards = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Cards View' parent='Job Search' title='Cards View' />
            <Container fluid={true} className="job-cardview">
                <Row>
                    <Sidebar />
                    <Col xl='9' className='xl-75 box-col-75'>
                        <Row>
                            <CardsClass limit={14} jobClass={'col-xl-6 xl-50 box-col-6 col-12'} ribbion={true} />
                            <div className="col-sm-12">
                                <div className="job-pagination">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination pagination-primary">
                                            <li className="page-item disabled"><a className="page-link" href="#">{Previous}</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">{Next}</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default JobCards;