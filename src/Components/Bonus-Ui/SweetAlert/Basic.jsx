import React, { Fragment } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { BasicExamples } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import { BasicSweetalrtData } from '../../../Data/Bonus-ui/Data';
import { Btn } from '../../../AbstractElements';

const BasicComponent = () => {

    const Displayalert = (name) => {

        if (name === 'basic') {
            SweetAlert.fire({ title: 'Hello world!' });
        }
        if (name === 'basictitlealert') {
            SweetAlert.fire({ title: 'Heres the title!', text: '...and heres the text!' });
        }
        if (name === 'basicsuccessalert') {
            SweetAlert.fire({
                title: 'Good job!',
                text: 'You clicked the button!',
                icon: 'info',

            });
        }
        if (name === 'basicinfoalert') {
            SweetAlert.fire({
                title: 'Click on either the button or outside the modal.',
            })
                .then((result) => {
                    if (result.value) {
                        SweetAlert.fire(`The returned value is: ${result.value}`
                        );
                    } else {
                        SweetAlert.fire('The returned value is: null');
                    }

                });
        }
        if (name === 'basicwarningalert') {
            SweetAlert.fire({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'cancel',
                reverseButtons: true
            })
                .then((result) => {
                    if (result.value) {
                        SweetAlert.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    } else {
                        SweetAlert.fire(
                            'Your imaginary file is safe!'
                        );
                    }
                });
        }
    };

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={BasicExamples} />
                    <CardBody className="btn-showcase">
                        {BasicSweetalrtData.map((item, i) =>
                            <Btn key={i} attrBtn={{ color: `${item.color}`, value: `${item.name}`, onClick: (e) => { Displayalert(e.target.value) }, }}>{item.title}</Btn>
                        )}
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BasicComponent;