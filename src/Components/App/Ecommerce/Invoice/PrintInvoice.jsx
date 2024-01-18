import { P,Image } from '../../../../AbstractElements';
import React, { Fragment } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { ThankBusiness, ThankBusinessDesc } from '../../../../Constant';

const PrintInvoice = () => {
    return (
        <Fragment>
            <Row className="mt-3">
                <Col md="8">
                    <div>
                        <P attrPara={{ className: 'legal' }}><strong>{ThankBusiness}</strong>{ThankBusinessDesc}</P>
                    </div>
                </Col>
                <Col md="4">
                    <Form className="text-end invo-pal">
                        <Image attrImage={{ src: `${require('../../../../assets/images/other-images/paypal.png')}`}} alt='PayPal - The safer, easier way to pay online!'/>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};
export default PrintInvoice;