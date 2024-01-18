import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import BestSellers from "./BestSellers";
import CountrySales from "./CountrySales";
import ItemsSlider from "./ItemSlider";
import RecentOrder from "./RecentOrder";
import SaleChart from "./SaleChart";
import TopProducts from "./TopProducts";
import WeekendView from "./WeekendView";

const Ecommerce = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Ecommerce Dashboard" title="Ecommerce" parent="Dashboard" />
            <Container fluid={true} className="ecommerce-page">
                <Row>
                    <SaleChart />
                    <RecentOrder />
                    <TopProducts />
                    <CountrySales />
                    <BestSellers />
                    <ItemsSlider />
                    <WeekendView />
                </Row>
            </Container>            
        </Fragment>
    ); 
};

export default Ecommerce;