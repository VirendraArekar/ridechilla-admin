import { H3, Image, LI, P, UL } from '../../../../AbstractElements';
import JobSearchContext from '../../../../_helper/JobSearch';
import React, { Fragment, useContext } from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const CardsClass = ({ jobClass, limit, ribbion, col12 }) => {
    const { jobData } = useContext(JobSearchContext);
    return (
        <Fragment>
            {jobData && jobData.slice(0, limit).map((item) => {
                return (
                    <Col className={`${(limit === item.Id && col12) ? 'col-xl-12 xl-100 box-col-12' : jobClass}`} key={item.Id}>
                        <Card className={`${(item.ribbion && ribbion) ? 'ribbon-vertical-left-wrapper' : ''}`}>
                            {(item.ribbion) ? <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbion && 'd-none'}`}><i className="icofont icofont-love"></i></div> : ''}
                            <div className="job-search">
                                <CardBody>
                                    <div className="d-flex">
                                        <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: `${require(`../../../../assets/images/${item.logo}`)}`, alt: '' }} />
                                        <div className="flex-grow-1">
                                            <H3 attrH3={{ className: 'f-w-600' }}>
                                                <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-detail`}>{item.job_name}</Link>
                                                {item.type === 'new' ?
                                                    <span className="badge badge-primary pull-right">{item.badgeValue}</span>
                                                    : <span className="pull-right">{item.type}</span>
                                                }
                                            </H3>
                                            <P attrPara={{ className: 'me-2' }}>{item.job_area}, {item.job_city}</P>
                                            <Rating className='rating'
                                                placeholderRating={item.rating}
                                                placeholderSymbol='fa fa-star font-warning '
                                                emptySymbol="fa fa-star-o font-warning"
                                                fullSymbol="fa fa-star font-warning "
                                            />
                                        </div>
                                    </div>
                                    <P>{item.Job_description}</P>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                )
            }
            )}
        </Fragment>
    );
};
export default CardsClass;