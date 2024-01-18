import React, { Fragment } from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { ColorType, ContextualClasses, Description, Id } from "../../../../Constant";
import { contextualclassdata } from "../../../../Data/Table/bootstraptabledata";

const ContextualClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H3>{ContextualClasses}</H3>
                        <span>{"Use contextual classes to color table rows or individual cells. you may use Classes"} <code>{".table-*"}</code>{"in"}<code>{"tr"}</code></span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">{Id}</th>
                                    <th scope="col">{ColorType}</th>
                                    <th scope="col">{Description}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contextualclassdata.map((item)=>{
                                        return(
                                            <tr className={item.class} key={item.id}>
                                                <th scope="row">{item.id}</th>    
                                                <th>{item.classname}</th>    
                                                <th>{item.desc}</th>    
                                            </tr>
                                        )
                                    })
                                }                               
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ContextualClass;