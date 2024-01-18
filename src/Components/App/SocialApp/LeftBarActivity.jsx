import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Collapse } from 'reactstrap';
import { Btn,H3,P, Image } from '../../../AbstractElements';
import { ActivityFeed, Photo } from '../../../Constant';
import { ActivityFeedData } from '../../../Data/SocialApp';

const LeftBarActivity = () => {
    const [isActivity, setisActivity] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H3 attrH3={{ className: 'p-0'}}> 
                            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisActivity(!isActivity), datatoggle: 'collapse', datatarget: '#collapseicon14', 'aria-expanded': isActivity, 'aria-controls': 'collapseicon14' }}>{ActivityFeed}</Btn>
                        </H3>
                    </CardHeader>
                    <Collapse isOpen={isActivity}>
                        <CardBody className="social-status filter-cards-view">
                            {ActivityFeedData.map((item,i) =>
                                <Media key={i} className='d-flex'>
                                    <Image attrImage={{ className: 'img-50 rounded-circle m-r-15', src: `${item.img}`, alt: 'tenImg' }} />
                                    <Media body className='flex-grow-1'>
                                        <span className="f-w-600 d-block">{item.title}</span>
                                        <P>{item.desc}
                                            <a href="#javascript">{Photo}</a>
                                        </P>
                                        <span className="light-span">{item.time}</span>
                                    </Media>
                                </Media>
                            )}
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default LeftBarActivity;