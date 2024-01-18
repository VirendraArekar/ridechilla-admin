import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Col, Card, CardHeader, CardBody, Row, } from 'reactstrap';
import { H3, P } from '../../../../AbstractElements';
import { EducationData } from '../../../../Data/SocialApp';
import { EducationandEmployement, TheNewCollege } from '../../../../Constant';

const Educations = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="social-header">
                        <H3><span>{EducationandEmployement}</span>
                            <span className="pull-right"><MoreVertical /></span></H3>
                    </CardHeader>
                    <CardBody>
                        <Row className="details-about pb-0">
                            {EducationData.map((item, i) =>
                                <Col sm="6" key={i}>
                                    <div className={`your-details ${item.detailClass ? 'your-details-xs' : ''}`}><span className="f-w-600">{TheNewCollege}</span>
                                        <P>{item.date}</P>
                                        <P>{item.desc}</P>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default Educations;