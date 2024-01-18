import React, { Fragment, useCallback, useState } from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import UserProfile from '../../Bonus-Ui/Tour/UserProfile';
import AllCards from '../Users/UsersCards/AllCards';
import AboutTimeLine from './AboutTimeline';
import LeftBar from './LeftBar';
import PhotosTab from './PhotosTab';
import RightBar from './RightBar';
import TimeLineContain from './TimeLineContain';
import TimelineTab from './TimelineTab';

const SocialAppContain = () => {
    const [activeTab, setActiveTab] = useState('1');
    const callback = useCallback((tab) => {
        setActiveTab(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Social App" parent="Apps" title="Social App" />
            <Container fluid={true}>
                <div className="user-profile social-app-profile">
                    <Row>
                        <UserProfile />
                    </Row>
                    <TimelineTab callbackActive={callback} />
                    <TabContent activeTab={activeTab} className="tab-content">
                        <TabPane tabId="1">
                            <Row>
                                <Col xl="3 xl-25 box-col-3" md="5">
                                    <div className="default-according style-1 job-accordion" id="accordionoc4">
                                        <Row>
                                            <LeftBar />
                                        </Row>
                                    </div>
                                </Col>
                                <Col xl="6 xl-50 box-col-6" md="7">
                                    <Row>
                                        <TimeLineContain />
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
                        </TabPane>
                        <TabPane tabId="2">
                            <AboutTimeLine />
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <AllCards />
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <PhotosTab />
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </Fragment>
    );
};
export default SocialAppContain;