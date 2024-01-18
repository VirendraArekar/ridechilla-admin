import React, { Fragment } from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { BrowserData } from "../../../Data/Widgets/General/Data";
import HeaderCard from "../../Common/Component/HeaderCard";
import { browser, Daily, Monthly, Name, Weekly } from "../../../Constant";

const Browser = () => {
    return (
        <Fragment>
            <Col lg="6" sm="12">
                <Card className="browser-table">
                    <HeaderCard title={'Usage in Browser'} setting={true} />
                    <CardBody>
                        <div className="table-responsive mb-0">
                            <Table className="table">
                                <thead>
                                    <tr>
                                        <th>{browser}</th>
                                        <th>{Name}</th>
                                        <th>{Daily}</th>
                                        <th>{Weekly}</th>
                                        <th>{Monthly}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BrowserData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <Image attrImage={{ className: "img-fluid", src: `${data.browser}`, alt: "" }} /></td>
                                                <td>{data.name}</td>
                                                <td>{data.daily}</td>
                                                <td>{data.weekly}</td>
                                                <td>{data.monthly}</td>
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
export default Browser;