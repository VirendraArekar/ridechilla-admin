import React, { Fragment } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { ActivityLog } from '../../../../Constant';
import { H4 } from '../../../../AbstractElements';
import Activity from '../Common/Activity';
import HeaderCard from '../../../Common/Component/HeaderCard';

const ActivityLogg = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={ActivityLog} />
                    <CardBody>
                        <div className="activity-log">
                            <div className="my-activity">
                                <H4 attrH4={{ className: 'f-w-600' }}>{'Today'}</H4>
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <H4 attrH4={{ className: 'f-w-600' }}>{'25 December'}</H4>
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <H4 attrH4={{ className: 'f-w-600' }}>{'8 september'}</H4>
                                <Activity />
                            </div>
                            <div className="my-activity">
                                <H4 attrH4={{ className: 'f-w-600' }}>{'6 June'}</H4>
                                <Activity />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default ActivityLogg;