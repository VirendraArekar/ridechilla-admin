import React, { Fragment } from "react";
import { Card, Col } from "reactstrap";
import { H3, H5, P } from "../../../AbstractElements";
import { APRIL, Caldesc, Imustexplain } from "../../../Constant";

const Calender = () => {
    return (
        <Fragment>
            <Col xl="4" lg="6" sm="12" className="xl-50 box-col-6">
                <Card className="height-equal">
                    <div className="calender-widget">
                        <div className="cal-img"></div>
                        <div className="cal-date">
                            <H5>04<br />{APRIL}</H5>
                        </div>
                        <div className="cal-desc text-center card-body">
                            <H3>{Imustexplain}</H3>
                            <P>{Caldesc}</P>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};
export default Calender;