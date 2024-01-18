import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import BrowserChartWidgets from "./BrowserChart";
import ChartWidgets from "./ChartWidgets";
import Finance from "./Finance";
import LiveChart from "./LiveChart";
import MarketingChart from "./MarketingChart";
import MonthlySaleChart from "./Monthly";
import TurnoverChartComponent from "./Turnover";
import UsesChart from "./UserChart";

const Chart = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Chart" title="Chart" parent="Widgets" />
            <Container fluid={true}>
                <ChartWidgets />
                <MarketingChart />
                <Row>
                    <LiveChart />
                    <TurnoverChartComponent />
                    <MonthlySaleChart />
                    <UsesChart />
                </Row>
                <BrowserChartWidgets />
                <Finance />
            </Container>
        </Fragment>
    );
};

export default Chart;