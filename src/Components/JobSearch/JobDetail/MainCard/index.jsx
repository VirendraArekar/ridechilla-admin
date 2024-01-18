import React, { Fragment } from 'react';
import { H3, P, UL, LI, Btn, Image, H5 } from '../../../../AbstractElements';
import JobDescription from './jobDescription';
import { Card, Col, CardBody, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardsClass from '../../JobCardView/Cards';

const MainCard = () => {
    return (
        <Fragment>
            <Col xl='9 xl-75'>
                <Card>
                    <div className="job-search">
                        <CardBody>
                            <div className="d-flex">
                                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: `${require('../../../../assets/images/job-search/1.jpg')}`, alt: '' }} />
                                <div className="flex-grow-1">
                                    <H3 attrH3={{ className: 'f-w-600' }} ><a href="#javascript">Product Designer (UI/UX Designer)</a></H3>
                                    <P>Koho - United States</P>
                                    <UL attrUL={{ className: 'rating simple-list d-flex flex-row' }} >
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                    </UL>
                                    <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-apply`}>
                                        <Btn attrBtn={{ className: 'btn btn-sm job-apply-btn', color: 'primary' }}>Apply for this job</Btn>
                                    </Link>
                                </div>
                            </div>
                            <JobDescription />
                        </CardBody>
                    </div>
                </Card>
                <div className="header-faq">
                    <H5 attrH5={{ className: 'mb-0 f-w-600' }}>Similar jobs</H5>
                </div>
                <Row>
                    <CardsClass limit={5} jobClass={'col-xl-6 xl-50 box-col-6 col-12'} ribbion={false} col12={true} />
                </Row>
            </Col >
        </Fragment >
    );
};

export default MainCard;