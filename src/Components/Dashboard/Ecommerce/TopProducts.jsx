import React, { Fragment } from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import {H5, Image, P } from "../../../AbstractElements";
import { TopProductsData } from "../../../Data/Dashboard/Ecommerce/Data";
import { Topproducts } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Link } from 'react-router-dom';

const TopProducts = () => {
    return (
        <Fragment>
            <Col lg="4" sm="6 box-col-30">
                <Card className="top-products">
                    <HeaderCard title={Topproducts} setting={true} />
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-bordernone">
                                <tbody>
                                    {TopProductsData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="icon">
                                                                <Image attrImage={{ className: "img-fluid", src: `${data.img}`, alt: "chair" }} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`}>   
                                                                <H5>{data.title}</H5>
                                                            </Link>
                                                            <P>{data.para}</P>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <H5>{data.coupon}</H5>
                                                    <P>{data.coupon_para}</P>
                                                </td>
                                                <td className="text-center"> <i className={`flag-icon ${data.icon}`}></i></td>
                                                <td>
                                                    <H5>{data.percent}</H5>
                                                    <P>{data.price}</P>
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

export default TopProducts;