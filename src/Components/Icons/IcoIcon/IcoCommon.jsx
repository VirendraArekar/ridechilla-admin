import React, { Fragment } from "react";
import { Row, Col, Card, CardBody } from 'reactstrap'
import HeaderCard from "../../Common/Component/HeaderCard";

const IcoCommon = ({ title,span, iconType, parentCallback }) => {

    const getItag = (tag) => {
        parentCallback(tag);
    }

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={title} span1={span && span}/>
                    <CardBody>
                        <Row className="icon-lists">
                            {iconType.map((iconItem, i) => {
                                return (
                                    <Col sm="6" lg="4" key={i}
                                        onClick={() => {
                                            getItag(iconItem);

                                        }}
                                    >
                                        <i className={`icofont icofont-${iconItem}`}></i> {iconItem}
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

export default IcoCommon;