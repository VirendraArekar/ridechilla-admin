import React, { Fragment } from "react";
import { Row, Col, Card, CardBody } from 'reactstrap'
import HeaderCard from "../../Common/Component/HeaderCard";

const FontawesomeCommon = ({ iconType, title, parentCallback }) => {
    const getItag = (tag) => {
        parentCallback(tag)
    }
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={title}/>
                    <CardBody>
                        <Row className="icon-lists">
                            {iconType.map((icon, i) => {
                                return (
                                    <Col sm="6" md="4" xl="3" key={i} onClick={(e) => getItag(icon)}>
                                        <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
export default FontawesomeCommon;