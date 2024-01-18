import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { H3, H5, Image, P } from "../../../AbstractElements";
import { Activity } from "../../../Constant";
import { ActivityData } from "../../../Data/Dashboard/Default/Data";
import { Link } from 'react-router-dom';

const ActivityReview = () => {
    return (
        <Fragment>
            <Col xl="3" md="6" lg="4">
                <Card className="activity-review">
                    <CardHeader className="pb-0">
                        <H3> {Activity} </H3>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive" >
                            <Table className="table table-bordernone" >
                                <tbody>
                                    {ActivityData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex">
                                                        <Image attrImage={{ className: "img-fluid", src: `${data.img}`, alt: "" }} />
                                                        <div className="flex-grow-1">
                                                            <Link to={`${process.env.PUBLIC_URL}/app/todo`}><H5>{data.title}</H5></Link>
                                                            <P>{data.para}</P>
                                                        </div>
                                                        <div className="time-badge">
                                                            <P>{data.time}</P>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody >
                            </Table>
                        </div >
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    )
}
export default ActivityReview;