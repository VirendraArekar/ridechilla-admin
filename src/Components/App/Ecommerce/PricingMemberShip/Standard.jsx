import { Btn,H6, H2, H3, LI, P, UL } from '../../../../AbstractElements';
import { Subscribe, month } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Col, CardBody, Card, Row } from 'reactstrap';
import { Membershipdata } from '../../../../Data/Ecommerce';

const Standards = () => {
    return (
        <Fragment>
            <CardBody>
                <Row className="pricing-content pricing-col">
                    {
                        Membershipdata?.map((item,index)=>{
                            return(
                                <Col md='3' key={index}>
                                    <Card className="pricing-block text-center">
                                        <div className="pricing-header">
                                            <H2>{item.title}</H2>
                                            <div className="price-box">
                                                <div>
                                                    <H3>{item.price}</H3>
                                                    <P>{month}</P>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <UL attrUL={{ className: 'simple-list pricing-inner' }}>
                                                {
                                                    item.data?.map((item,id)=>{
                                                        return(
                                                            <LI key={id}><H6>{item.space}<span>{item.name}</span></H6></LI>
                                                        )
                                                    })
                                                }
                                            </UL>
                                            <Btn attrBtn={{className:'btn btn-lg' ,color: 'primary', size: 'lg' }}>{Subscribe}</Btn>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </CardBody>
        </Fragment>
    );
};
export default Standards;