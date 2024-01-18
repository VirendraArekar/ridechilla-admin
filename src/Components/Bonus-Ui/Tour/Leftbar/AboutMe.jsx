import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { H5, H3, LI, P, UL, Btn } from '../../../../AbstractElements';
import { AboutM, Dribbble, Facebooks, SocialNetworks, Twitters } from '../../../../Constant';
import { AboutMeData } from '../../../../Data/Bonus-ui/Data';

const AboutMe = () => {
    const [isShow, setIsShow] = useState(true);
    return (
        <Fragment>
            <Card data-intro="This is your Your detail" className="step4">
                <CardHeader>
                    <H3 attrH3={{ className: 'p-0' }} >
                        <Btn attrBtn={{ color: 'transparent btn-link ps-0', onClick: () => { setIsShow(!isShow) } }} >{AboutM}</Btn>
                    </H3>
                </CardHeader>
                <div className={`collapse ${isShow ? 'show' : ''}`}>
                    <CardBody className="post-about">
                        <UL attrUL={{ className: 'simple-list' }}>
                            {AboutMeData.map((item) =>
                                <LI key={item.id}>
                                    <div className="icon">{item.icon}</div>
                                    <div>
                                        <H5>{item.designation}</H5>
                                        <P attrPara={{ className: 'text-dark' }}>{item.place}</P>
                                    </div>
                                </LI>
                            )}
                        </UL>
                        <div className="social-network theme-form">
                            <span className="f-w-600">{SocialNetworks}</span>
                            <a href='https://www.facebook.com/' className='btn social-btn btn-fb mb-2 text-center text-white'><i className="fa fa-facebook m-r-5"></i>{Facebooks}</a>
                            <a href='https://www.google.com/' className='btn social-btn btn-twitter mb-2 text-center text-white'><i className="fa fa-twitter m-r-5"></i>{Twitters}</a>
                            <a href='https://dribbble.com/' className='btn social-btn btn-google text-center text-white'><i className="fa fa-dribbble m-r-5"></i>{Dribbble}</a>
                        </div>
                    </CardBody>
                </div>
            </Card>
        </Fragment>
    );
};

export default AboutMe;
