import React, { Fragment } from "react";
import { Row, Col, Card, CardBody } from 'reactstrap'
import HeaderCard from "../../Common/Component/HeaderCard";

const ThemifyCommon = ({ iconType, title, parentCallback }) => {
    const getItag = (tag) => {
        parentCallback(tag)
    }
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={title} />
                    <CardBody>
                        <Row className="icon-lists">
                            {iconType.map((icon, i) => {
                                return (
                                    <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                        <i className={`${icon}`}></i> {icon}
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default ThemifyCommon;