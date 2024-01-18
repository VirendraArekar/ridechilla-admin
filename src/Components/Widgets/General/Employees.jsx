import React, { Fragment } from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import { H5, Image } from "../../../AbstractElements";
import { Designation, Employee_Status, Experience, Name, SkillLevel } from "../../../Constant";
import { EmployeeData } from "../../../Data/Widgets/General/Data";
import HeaderCard from "../../Common/Component/HeaderCard";

const EmployeeStatus = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card className="employee-status">
                    <HeaderCard title={Employee_Status} setting={true} />
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-bordernone">
                                <thead>
                                    <tr>
                                        <th scope="col">{Name}</th>
                                        <th scope="col">{Designation}</th>
                                        <th scope="col">{SkillLevel}</th>
                                        <th scope="col">{Experience}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EmployeeData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex">
                                                        <Image attrImage={{ src: `${data.img}`, alt: "" }} />
                                                        <div className="flex-grow-1">
                                                            <H5 attrH5={{className:'font-primary'}} >{data.name} <span className="text-muted">{data.pera}</span></H5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{data.designation}</td>
                                                <td>
                                                    <div className="progress-showcase">
                                                        <div className="progress" style={{ height: "8px" }}>
                                                            <div className={`progress-bar ${data.skillClass}`} role="progressbar" style={{ width: `${data.skill}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{data.exp}</td>
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
export default EmployeeStatus;