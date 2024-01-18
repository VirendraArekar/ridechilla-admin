import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import AboutMe from './AboutMe';
import LatestPhotos from './LatestPhoto';
import Followingsprofile from './Followings';
import FollowersProfile from './Followers';
import FriendsProfile from './Friends';

const LeftbarProfile = () => {
    return (
        <Fragment>
            <Col xl="3" lg='12' md="5" className="xl-35 box-col-30">
                <div className="default-according style-1 faq-accordion job-accordion">
                    <Row>
                        <Col xl='12'>
                            <AboutMe />
                        </Col>
                        <Col xl="12" lg="6" md="12" sm="6">
                            <FollowersProfile />
                        </Col>
                        <Col xl="12" lg="6" md="12" sm="6">
                            <Followingsprofile />
                        </Col>
                        <Col xl="12" lg="6" md="12" sm="6">
                            <LatestPhotos />
                        </Col>
                        <Col xl="12" lg="6" md="12" sm="6">
                            <FriendsProfile />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Fragment>
    )
}

export default LeftbarProfile;