import { Image, H4, H6, P } from '../../../../AbstractElements';
import { JohanDeo, JohanDeoMailId, ProductDescription, ProjectDescriptionDetails } from '../../../../Constant';
import user1 from '../../../../assets/images/user/1.jpg';
import { Col, Media, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const InvoiceDescription = () => {
    return (
        <Fragment>
            <Row className="invo-profile">
                <Col xl="4">
                    <div className="invo-profile-left">
                        <Media className='d-flex'>
                            <div className="d-flex-left"><Image attrImage={{ className: 'media-object rounded-circle img-60', src: `${user1}`, alt: '' }} /></div>
                            <Media className='flex-grow-1'>
                                <H4 attrH4={{ className: 'd-flex-heading f-w-600' }}>{JohanDeo}</H4>
                                <P>{JohanDeoMailId}<span className="digits">555-555-5555</span></P>
                            </Media>
                        </Media>
                    </div>
                </Col>
                <Col xl="8">
                    <div className="invo-profile-right">
                        <div id="project">
                            <H6>{ProductDescription}</H6>
                            <P>{ProjectDescriptionDetails}</P>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
export default InvoiceDescription;