import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { H3, H5, Image, P} from "../../../AbstractElements";
import { SocialData } from "../../../Data/Dashboard/Default/Data";
import { TopSocialMedia } from "../../../Constant";

const SocialShared = () => {
    return (
        <Fragment>
            <Col xl="3" md="6" className="des-xl-50 box-col-50">
                <Card className="social-shared">
                    <CardHeader className="pb-0">
                        <H3>{TopSocialMedia}</H3>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-bordernone">
                                <tbody>
                                    {SocialData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="icon">
                                                            <a href="#javascript">
                                                                <Image attrImage={{ className: "img-fluid", src: `${data.img}`, alt: "" }} />
                                                            </a>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <H5>{data.title}</H5>
                                                            <P>{data.para}</P>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <i className="fa fa-arrow-up font-success me-2"></i>
                                                        <H5>{data.growth}</H5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <H5>{data.price}</H5>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default SocialShared;