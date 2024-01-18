import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';
import AddFriends from './AddFriends';
import Hobby from './Hobby';
import Educations from './Education';
import ActivityLogg from './ActivityLog';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { PepoleYouMayKnow, ViewedYourProfile } from '../../../../Constant';

const AboutTimeLine = () => {
    return (
        <Fragment>
            <Row>
                <Col xl="3" className='xl-25 box-col-3' md="5">
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc4">
                        <Row>
                            <LeftBar />
                        </Row>
                    </div>
                </Col>
                <Col xl="6" className='xl-50 box-col-6' md="7">
                    <Row>
                        <Col sm="12">
                            <Card>
                                <HeaderCard title={PepoleYouMayKnow} />
                                <AddFriends />
                            </Card>
                        </Col>
                        <Hobby />
                        <Educations />
                        <Col sm="12">
                            <Card>
                                <HeaderCard title={ViewedYourProfile} />
                                <AddFriends />
                            </Card>
                        </Col>
                        <ActivityLogg />
                    </Row>
                </Col>
                <Col xl="3 xl-25 box-col-3">
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
                        <Row>
                            <RightBar />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
export default AboutTimeLine;