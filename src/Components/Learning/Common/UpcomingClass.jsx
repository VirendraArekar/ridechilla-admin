import { BusinessAnalyst, CourseBy, Loremipsum, UpcomingCourses, UXDevelopment, WebDevelopment } from '../../../Constant';
import { Btn, H5, H6, UL, LI } from '../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import { Media, Col, Card, CardHeader, Collapse, CardBody } from 'reactstrap';
import Rating from 'react-rating';

const UpcomingClass = () => {
    const [isDevelopment, setIsDevelopment] = useState(true);
    const data = [
        { 'name': UXDevelopment, 'date': 18, 'month': 'Dec', 'data': 'Development Team', rating: 4.4 },
        { 'name': BusinessAnalyst, 'date': 28, 'month': 'Dec', 'data': 'Analyst Team', rating: 2 },
        { 'name': WebDevelopment, 'date': 5, 'month': 'Jan', 'data': 'Designer', rating: 4 }
    ];
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsDevelopment(!isDevelopment), color: 'transperant' }} >{UpcomingCourses}</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isDevelopment}>
                        <CardBody className="upcoming-course">
                            {
                                data.map((item, id) => {
                                    return (
                                        <Media className='d-flex' key={id}>
                                            <Media body className='flex-grow-1'>
                                                <span className="f-w-600">{item.name}</span>
                                                <H6>
                                                    {CourseBy}<a href="#javascript"> {item.data}</a>
                                                </H6>
                                                <Rating
                                                    placeholderRating={item.rating}
                                                    placeholderSymbol='fa fa-star font-warning '
                                                    emptySymbol="fa fa-star-o font-warning me-1"
                                                    fullSymbol="fa fa-star font-warning "
                                                />
                                            </Media>
                                            <div>
                                                <H5 attrH5={{ className: 'mb-0 font-primary' }}>{item.date}</H5>
                                                <span className="d-block">{item.month}</span>
                                            </div>
                                        </Media>
                                    )
                                })
                            }
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default UpcomingClass;