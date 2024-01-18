import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { BasicTableBottomColor, Company, Country, Designation, FirstName, Language, LastName, table, tabletext, Useclass, Username, bottomcolor } from '../../../../Constant';
import { H3,Image } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const BasicTableClass = () => {
    const { data } = useContext(TableContext);
    const DynamicImage =(image) =>{
        return require(`../../../../assets/images/dashboard/beyo-line/${image}`);
    }
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H3>{BasicTableBottomColor}</H3>
                        <span>{Useclass}<code>{table}</code> {tabletext} {bottomcolor}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr className='border-bottom-primary'>
                                    <th scope="col">{'#'}</th>
                                    <th scope="col">{FirstName}</th>
                                    <th scope="col">{LastName}</th>
                                    <th scope="col">{Username}</th>
                                    <th scope="col">{Designation}</th>
                                    <th scope="col">{Company}</th>
                                    <th scope="col">{Language}</th>
                                    <th scope="col">{Country}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) =>
                                        <tr key={item.id} className={item.borderColor}>
                                            <th scope="row">{item.id}</th>
                                            <td>
                                                <Image attrImage={{className:'img-fluid img-30 me-2',src:DynamicImage(item.img)}} />{item.firstName}
                                            </td>
                                            <td>{item.lastName}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.role}</td>
                                            <td>{item.company}</td>
                                            <td>
                                                <div className={`badge ${item.badgeClass}`}>{item.language}</div>
                                            </td>
                                            <td>{item.country}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BasicTableClass;