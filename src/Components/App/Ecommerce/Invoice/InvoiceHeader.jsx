import React, { Fragment } from 'react';
import { H3, H2, P ,Image} from '../../../../AbstractElements';
import { InvoiceHash, IssuedMay, Koho, PaymentDue,Kohoemail } from '../../../../Constant';
import { Col, Media, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import login from '../../../../assets/images/logo/logo-icon.png'

const InvoiceHeader = () => {
    return (
        <Fragment>
            <div>
                <Row className="invo-header">
                    <Col sm="6">
                        <Media className='d-flex'>
                            <div className="d-flex-left">
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Image attrImage={{ className: 'd-flex-object img-60', src: `${login}`, alt: '' }}
                                    />
                                </Link>
                            </div>
                            <Media className="flex-grow-1 m-l-20">
                                <H2 attrH2={{ className: 'media-heading f-w-600' }}>{Koho}</H2>
                                <P> {Kohoemail}
                                    <br />
                                    <span className="digits">{'289-335-6503'}</span>
                                </P>
                            </Media>
                        </Media>
                    </Col>
                    <Col sm="6">
                        <div className="text-md-end text-xs-center">
                            <H3>
                                {InvoiceHash}
                                <span className="digits counter">1069</span>
                            </H3>
                            <P>
                                {IssuedMay}
                                <span className="digits"> 16, 2023</span>
                                <br />
                                {PaymentDue}{' '}
                                <span className="digits"> 20, 2023</span>
                            </P>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment >
    );
};
export default InvoiceHeader;