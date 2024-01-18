import React, { Fragment } from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { H1, Image, P } from "../../../AbstractElements";
import { WelcomeWilliam,Continue,DefaultdashDiscription } from "../../../Constant";

const ProfileGreeting = () => {
    return (
        <Fragment>
            <Col lg={5}>
                <Card className="profile-greeting">
                    <CardBody>
                        <div>
                            <H1>{WelcomeWilliam}</H1>
                            <P>{DefaultdashDiscription}</P>
                            <Link to='/app/users/userProfile' className="btn">
                                {Continue}<ArrowRight />
                            </Link>
                        </div>
                        <div className="greeting-img" >
                            <Image attrImage={{ className: "img-fluid", src: `${require("../../../assets/images/dashboard/profile-greeting/bg.png")}`, alt: "" }} />
                        </div >
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};

export default ProfileGreeting;