import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3,P } from '../../../AbstractElements'
import { ButtonDiscription } from '../../../Constant'

const BtnDescription = () => {
  return (
    <Fragment>
        <Col sm='12'>
            <Card>
                <CardHeader className='border-bottom'>
                    <H3>{ButtonDiscription}</H3>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm='12'>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn</code> class for Bootstrap state buttons</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn-square</code> class for Flate buttons</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn-pill</code> class for Edge buttons</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn-lg , .btn-sm , .btn-xs</code> class for Different size button</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.disabled</code> class or <code>disabled={true}</code> attribute for disabled state</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn-outline-*</code> class for border buttons</span></P>
                            <P attrPara={{className:'mb-1'}}><span>Use <code>.btn-outline-*-2x</code> class for Bold Outline button</span></P>
                            <P attrPara={{className:'mb-0'}}><span>Use <code>.btn-*-gradien</code> class for gradien button</span></P>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    </Fragment>
  )
}
export default BtnDescription