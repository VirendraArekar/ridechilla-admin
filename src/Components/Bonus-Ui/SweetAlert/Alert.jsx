import React, { Fragment } from 'react';
import SweetAlert from 'sweetalert2';
import { AlertState } from '../../../Constant';
import { Col, Card, CardBody } from 'reactstrap';
import { AlertSweetalertData } from '../../../Data/Bonus-ui/Data';
import HeaderCard from '../../Common/Component/HeaderCard';
import { Btn } from '../../../AbstractElements';

const Alert = () => {

    const Displayalert = (name) => {
        if (name === 'Success') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'success' });
        }
        if (name === 'Danger') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'error' });
        }
        if (name === 'Information') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'info' });
        }
        if (name === 'Warning') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'warning' });
        }
    };

    return (
        <Fragment>
            <Col lg="7">
                <Card>
                    <HeaderCard title={AlertState} />
                    <CardBody className="btn-showcase">
                        {AlertSweetalertData.map((item, i) =>
                            <Btn key={i} attrBtn={{ color: `${item.color}`, value: `${item.title}`, onClick: (e) => { Displayalert(e.target.value) }, }}>{item.title}</Btn>
                        )}
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Alert;