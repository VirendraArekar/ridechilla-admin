import one from '../../../../assets/images/job-search/1.jpg';
import { UIDesigner, KohoTelecom, Submit, Cancel, Savethisjob } from '../../../../Constant';
import { Btn, P, Image, H3,UL,LI } from '../../../../AbstractElements';
import PersonalDetail from './PersonalDetail';
import EducationClass from './Education';
import ExperienceClass from './Experience';
import UploadFileClass from './UploadFile';
import React, { Fragment } from 'react';
import { Col, Card, CardBody, Media, CardFooter } from 'reactstrap';

const JobApply = () => {
    return (
        <Fragment>
            <Col xl="9" className='xl-75'>
                <Card>
                    <div className="job-search">
                        <CardBody className="pb-0">
                            <Media className='d-flex'>
                                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: one, alt: '' }} />
                                <div className='flex-grow-1'>
                                    <H3 attrH3={{ className: 'f-w-700 mb-0' }} >
                                        <a href="#javascript">{UIDesigner}</a>
                                    </H3>
                                    <P>{KohoTelecom}</P>
                                    <UL attrUL={{className:'rating d-flex flex-row simple-list'}}>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star font-warning me-1"></i></LI>
                                        <LI><i className="fa fa-star-o font-warning m-0"></i></LI>
                                    </UL>
                                    <Btn attrBtn={{color:'primary',className:'job-apply-btn'}}>
                                        <span><i className="fa fa-check text-white"></i></span>{Savethisjob}
                                    </Btn>
                                </div>
                            </Media>
                            <div className="job-description">
                                <PersonalDetail />
                                <EducationClass />
                                <ExperienceClass />
                                <UploadFileClass />
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Btn attrBtn={{ color: 'primary me-1' }} >{Submit}</Btn>
                            <Btn attrBtn={{ color: 'light' }}>{Cancel}</Btn>
                        </CardFooter>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default JobApply;