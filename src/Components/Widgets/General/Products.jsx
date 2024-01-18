import React, { Fragment } from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import { Details, Done, InProcess, Pending, Price, ProductCart, Qtyd, Status } from "../../../Constant";
import { productData } from "../../../Data/Widgets/General/Data";
import HeaderCard from "../../Common/Component/HeaderCard";

const Products = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card className="user-status">
                    <HeaderCard title={ProductCart} setting={true} />
                    <CardBody>
                        <div className="table-responsive mb-0">
                            <Table className="table table-bordernone">
                                <thead>
                                    <tr>
                                        <th scope="col">{Details}</th>
                                        <th scope="col">{Qtyd}</th>
                                        <th scope="col">{Price}</th>
                                        <th className="text-end" scope="col">{Status}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.details}</td>
                                                <td className="digits">{data.qty}</td>
                                                <td className="digits font-primary">{data.price}</td>
                                                <td className="text-end">
                                                    {data.status === 'done' ?
                                                        <span className="badge badge-light-success">  {Done}</span> :
                                                        data.status === 'pending' ?
                                                            <span className="badge badge-light-warning">  {Pending}</span> :
                                                            <span className="badge badge-light-info">  {InProcess}</span>
                                                    }
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

export default Products;