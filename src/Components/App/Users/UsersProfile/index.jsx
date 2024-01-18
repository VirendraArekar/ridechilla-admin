import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import AboutMe from '../../../Bonus-Ui/Tour/Leftbar/AboutMe';
import FollowersProfile from '../../../Bonus-Ui/Tour/Leftbar/Followers';
import Followingsprofile from '../../../Bonus-Ui/Tour/Leftbar/Followings';
import FriendsProfile from '../../../Bonus-Ui/Tour/Leftbar/Friends';
import LatestPhotos from '../../../Bonus-Ui/Tour/Leftbar/LatestPhoto';
import PostFirst from '../../../Bonus-Ui/Tour/PostFirst';
import PostSecond from '../../../Bonus-Ui/Tour/PostSecond';
import PostThird from '../../../Bonus-Ui/Tour/PostThird';
import UserProfile from '../../../Bonus-Ui/Tour/UserProfile';

const UsersProfileContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="User Profile" parent="Users" title="User Profile" />
            <Container fluid={true}>
                <div className="user-profile">
                    <Row>
                        <UserProfile />
                        <Col xl="3" md="5" className="xl-35 box-col-30">
                            <div className="default-according style-1 faq-accordion job-accordion">
                                <Row>
                                    <Col xl='12'>
                                        <AboutMe />
                                    </Col>
                                    <Col xl="12" md="12" sm="6">
                                        <FollowersProfile />
                                    </Col>
                                    <Col xl="12" md="12" sm="6">
                                        <Followingsprofile />
                                    </Col>
                                    <Col xl="12" md="12" sm="6">
                                        <LatestPhotos />
                                    </Col>
                                    <Col xl="12" md="12" sm="6">
                                        <FriendsProfile />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl="9" md="7" className="xl-65 box-col-70">
                            <Row>
                                <PostFirst />
                                <PostSecond />
                                <PostThird />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default UsersProfileContain;