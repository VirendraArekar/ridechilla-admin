import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { H2, H4,Image} from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE, Maintanancetext1, Maintanancetext2, MAINTENANCE } from '../../../Constant';
import maintanancesvg from '../../../assets/images/other-images/maintenance-image.svg';
const Maintenance = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="error-wrapper maintenance-bg">
                    <Container>
                        <Row>
                            <Col xs='12'>
                                <div className='svg-wrapper'>
                                    <Image attrImage={{className:'maintenance-img', src:`${maintanancesvg}`}} />
                                </div>
                            </Col>
                            <div className='maintenance-heading'>
                                <H2 attrH2={{className:'headline'}}>{MAINTENANCE}</H2>
                            </div>
                            <H4 attrH4={{className:'sub-content'}}>
                                {Maintanancetext1}<br/>{Maintanancetext2}
                            </H4>
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`} className="btn btn-primary text-light">{BACK_TO_HOME_PAGE}</Link>
                            </div>
                        </Row>                        
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default Maintenance;