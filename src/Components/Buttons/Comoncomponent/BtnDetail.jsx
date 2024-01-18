import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H3, Btn } from '../../../AbstractElements'
import { Buttondata } from '../../../Data/Button/Defaultbtn'

const BtnDetail = () => {
    return (
        <Fragment>
            {
                Buttondata.map((item, i) => {
                    return (
                        <Col sm={12} key={i}>
                            <Card>
                                <CardHeader className='pb-0'>
                                    <H3>{item.title}</H3>
                                    {item.span}
                                </CardHeader>
                                <CardBody>
                                    <div className='d-flex'>
                                        {
                                            item.data.map((items, i) => {
                                                return (
                                                    <Btn key={i} attrBtn={{ color: `${items.class} me-3 ` }} >{items.text}</Btn>
                                                )
                                            })
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Fragment>
    )
}
export default BtnDetail