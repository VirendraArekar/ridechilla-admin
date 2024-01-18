import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Browser from "./Browser";
import Calender from "./Calender";
import ContactUs from "./ContactUs";
import DataWidgets from "./DataWidgets";
import EmployeeStatus from "./Employees";
import Feedback from "./Feedback";
import OrderDetails from "./OrderDetails";
import Products from "./Products";
import ProfileWidgets from "./ProfileWidgets";
import RecentActivityClass from "./RecentActivity";
import SaleDetails from "./SaleDetails";
import SocialWidgets from "./SocialWidgets";
import StaticWidgets from "./StaticWidgets";
import Testimonial from "./Testimonial";
import WeatherClass from "./Weather";

const General = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="General" title="General" parent="Widgets" />
            <Container fluid={true} className="general-widget">
                <Row>
                    <StaticWidgets />
                    <SaleDetails />
                    <OrderDetails />
                    <WeatherClass />
                    <DataWidgets />
                    <Feedback />
                    <ProfileWidgets />
                    <RecentActivityClass />
                    <Testimonial />
                    <Browser />
                    <SocialWidgets />
                    <Products />
                    <EmployeeStatus />
                    <Calender />
                    <ContactUs />
                </Row>
            </Container>
        </Fragment>
    );
};
export default General;