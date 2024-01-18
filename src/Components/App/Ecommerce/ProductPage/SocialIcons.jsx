import React, { Fragment } from 'react';
import { H4, LI, UL } from '../../../../AbstractElements';
import { Col, Row } from 'reactstrap';
import{Shareit} from '../../../../Constant';

const SocialIcons = () => {
    return (
        <Fragment>
            <div className="pro-group">
                <Row>
                    <Col md="4" className='box-col-30 xl-50'>
                        <H4 attrH4={{ className: 'product-title' }}>{Shareit}</H4>
                    </Col>
                    <Col md="8" className='xl-50 box-col-70'>
                        <div className="product-icon">
                            <UL attrUL={{ className: 'simple-list product-social'}}>
                                <LI attrLI={{className:"d-inline-block"}}><a href="https://www.facebook.com/"><i className="fa fa-facebook me-0"></i></a></LI>
                                <LI attrLI={{className:"d-inline-block"}}><a href="https://www.google.com/"><i className="fa fa-google-plus me-0"></i></a></LI>
                                <LI attrLI={{className:"d-inline-block"}}><a href="https://twitter.com/"><i className="fa fa-twitter me-0"></i></a></LI>
                                <LI attrLI={{className:"d-inline-block"}}><a href="https://www.instagram.com/"><i className="fa fa-instagram me-0"></i></a></LI>
                            </UL>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default SocialIcons;