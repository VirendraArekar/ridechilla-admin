import React, { Fragment } from "react";
import { Card, CardBody,Col, Table } from "reactstrap";
import { H5, Image, P} from "../../../AbstractElements";
import { BestSellersData } from "../../../Data/Dashboard/Ecommerce/Data";
import { Bestsellers, Date, Name, Product, Status, Total } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Link } from 'react-router-dom';

const BestSellers = () => {
    return (
        <Fragment>
            <Col xxl="5" xl="4" lg="12" sm="6 box-col-30">
                <Card className="best-sellers">
                    <HeaderCard title={Bestsellers} setting={true} />
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-bordernone">
                                <thead>
                                    <tr>
                                        <th>{Name}</th>
                                        <th>{Date}</th>
                                        <th>{Product}</th>
                                        <th>{Total}</th>
                                        <th>{Status}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BestSellersData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="icon">
                                                            <Image attrImage={{ className: "img-fluid", src: `${data.img}`, alt: "person1" }} />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={`${process.env.PUBLIC_URL}/app/social-app`}>   
                                                                <H5>{data.name}</H5>
                                                            </Link>
                                                            <P>{data.para}</P>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <H5>{data.date}</H5>
                                                </td>
                                                <td>
                                                    <H5>{data.product}</H5>
                                                </td>
                                                <td>
                                                    <H5>{data.total}</H5>
                                                </td>
                                                <td>
                                                    <div className="status-showcase">
                                                        <P>{data.status}</P>
                                                        <div className={`progress ${data.color}`} style={{ height: "5px" }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: `${data.status}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
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
export default BestSellers;