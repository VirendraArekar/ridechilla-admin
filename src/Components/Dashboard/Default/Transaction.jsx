import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { H3, H5, Image, P } from "../../../AbstractElements";
import { DateandTime, Income, ItemName, Progress, Status, TransactionName } from "../../../Constant";
import { TransactionData } from "../../../Data/Dashboard/Default/Data";
import { Link } from 'react-router-dom';

const Transaction = () => {
    return (
        <Fragment>
            <Col lg="5">
                <Card className="transaction-history">                   
                    <CardHeader className="pb-0">
                        <H3>{TransactionName}</H3>
                    </CardHeader>
                    <CardBody>
                        <Table className="table table-bordernone table-responsive">
                            <thead>
                                <tr>
                                    <th>{ItemName}</th>
                                    <th>{DateandTime}</th>
                                    <th>{Income}</th>
                                    <th>{Progress}</th>
                                    <th>{Status}</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {TransactionData.map((item) => {
                                    return (<tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <div className="icon">
                                                    <Image attrImage={{ className: "img-fluid", src: `${item.img}`, alt: "" }} /></div>
                                                <div className="flex-grow-1">
                                                    <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`}><H5 >{item.name}</H5></Link>
                                                    <P>{item.subTitle}</P>
                                                </div>
                                            </div>
                                        </td >
                                        <td>
                                            <H5>{item.date}</H5>
                                            <P>{item.time}</P>
                                        </td>
                                        <td>
                                            <H5>{item.income}</H5>
                                        </td>
                                        <td>
                                            <div className="progress-showcase">
                                                <P>{item.progress}</P>
                                                <div className={`progress ${item.class}`} style={{ height: "5px" }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: `${item.progress}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div >
                                            </div >
                                        </td >
                                        <td>
                                            <H5>{item.status}</H5>
                                        </td>
                                    </tr >)
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col >
        </Fragment >
    )
}

export default Transaction;