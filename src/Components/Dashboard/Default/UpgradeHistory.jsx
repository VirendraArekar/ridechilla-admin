import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H3, Image, P } from "../../../AbstractElements";
import { Buymorespace, InviteFriends, Upgradenow } from "../../../Constant";

const UpgradeHistory = () => {
    return (
        <Fragment>
            <Col xl="4" md="6" className="des-xl-50 box-col-50">
                <Card className="upgrade-history">
                    <CardBody>
                        <div>
                            <H3>{Buymorespace}</H3>
                            <P>{InviteFriends}</P>
                            <a className="btn btn-primary" href="https://themeforest.net/user/pixelstrap/portfolio" target='_blank' rel="noreferrer"> {Upgradenow}</a>
                        </div>
                    </CardBody>
                    <div className="upgrade-img">
                        <Image attrImage={{ className: "img-fluid", src: `${require("../../../assets/images/dashboard/upgrade/1.png")}`}} />
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};
export default UpgradeHistory;