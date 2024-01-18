import React, { Fragment } from "react";
import { Outlet } from "react-router";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import ActivityReview from "./ActivityReview";
import BeyoLine from "./BeyoLine";
import Investment from "./Investment";
import ProfileGreeting from "./ProfileGreeting";
import SocialShared from "./SocialShared";
import Transaction from "./Transaction";
import UpgradeHistory from "./UpgradeHistory";
import ValueChart from "./ValueChart";
import YearlyView from "./YearlyView";

const Default = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Default Dashboard" title="Default" parent="Dashboard" />
            <Container fluid={true} className="default-page">
                <Row>
                    <ProfileGreeting />
                    <YearlyView />
                    <ActivityReview />
                    <Transaction />
                    <ValueChart />
                    <BeyoLine />
                    <Investment />
                    <SocialShared />
                    <UpgradeHistory />
                </Row>
            </Container>
            <Outlet />
        </Fragment>
    );
};

export default Default;