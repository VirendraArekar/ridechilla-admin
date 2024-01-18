import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import { H3, P, Image, Btn } from '../../../AbstractElements';
import timeline4 from '../../../assets/images/social-app/timeline-4.png';
import { ProfileIntro, SocialNetworks, Dribbble, Facebooks, Twitters, AboutMe, FavouriteMusicBands, AboutMetext, FavouriteTvShow, FavouriteText } from '../../../Constant';
import LatestPhotos from '../../Bonus-Ui/Tour/Leftbar/LatestPhoto';
import FollowersProfile from '../../Bonus-Ui/Tour/Leftbar/Followers';
import Followingsprofile from '../../Bonus-Ui/Tour/Leftbar/Followings';
import FriendsProfile from '../../Bonus-Ui/Tour/Leftbar/Friends';

const RightBar = () => {
    const [isIntro, setisIntro] = useState(true);
    return (
        <Fragment>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <Card>
                    <CardHeader>
                        <H3 attrH3={{ className: 'p-0' }}>
                            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisIntro(!isIntro), datatoggle: 'collapse', datatarget: '#collapseicon7', 'aria-expanded': isIntro, 'aria-controls': 'collapseicon7' }}>{ProfileIntro}</Btn>
                        </H3>
                    </CardHeader>
                    <Collapse isOpen={isIntro}>
                        <CardBody className="filter-cards-view">
                            <div className='filter-view-group'>
                                <span className="f-w-600">{AboutMe} :</span><P attrPara={{ className: 'm-0' }}>{AboutMetext}</P>
                            </div>
                            <div className='filter-view-group'>
                                <span className="f-w-600">{FavouriteTvShow} :</span><P attrPara={{ className: 'm-0' }}>{FavouriteText}</P>
                            </div>
                            <div className='filter-view-group'>
                                <span className="f-w-600">{FavouriteMusicBands} :</span><P attrPara={{ className: 'm-0' }}>{FavouriteText}</P>
                            </div>
                            <div className="social-network theme-form"><span className="f-w-600">{SocialNetworks}</span>
                                <Btn attrBtn={{ color: 'social-btn btn-fb mb-2 text-center' }}><i className="fa fa-facebook m-r-5"></i>{Facebooks}</Btn>
                                <Btn attrBtn={{ color: 'social-btn btn-twitter mb-2 text-center' }}><i className="fa fa-twitter m-r-5"></i>{Twitters}</Btn>
                                <Btn attrBtn={{ color: 'social-btn btn-google text-center' }}><i className="fa fa-dribbble m-r-5"></i>{Dribbble}</Btn>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <FollowersProfile />
            </Col>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <Followingsprofile />
            </Col>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <LatestPhotos />
            </Col>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <FriendsProfile />
            </Col>
            <Col xl="12" md='6' className='xl-100 box-col-12'>
                <Card><Image attrImage={{ className: 'img-fluid', src: `${timeline4}`, alt: '' }} /></Card>
            </Col>
        </Fragment>
    );
};

export default RightBar;