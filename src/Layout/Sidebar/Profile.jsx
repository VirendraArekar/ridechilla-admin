import React, { Fragment, useEffect, useState } from 'react';
import { Settings } from 'react-feather';
import { H6, Image, LI, UL, P } from '../../AbstractElements';
import man from '../../assets/images/dashboard/1.png';
import { Experience, Follow, Follower, HumanResources, year2 } from '../../Constant';

const Profile = () => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'));
    const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
        setName(localStorage.getItem('Name'));
    }, [setProfile, setName]);

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <a className="setting-primary" href="#javascript">
                    <Settings />
                </a>
                <a href='#javascript'>
                    <Image attrImage={{ className: 'img-90 rounded-circle', src: authenticated ? auth0_profile.picture : profile, alt: '' }} />
                    <H6 attrH6={{ className: 'mt-3 f-14 f-w-600' }} >{authenticated ? auth0_profile.name : name}</H6>
                </a>
                <P attrPara={{ className: 'mb-0 font-roboto' }} >{HumanResources}</P>
                <UL attrUL={{ className: 'flex-row simple-list' }}>
                    <LI><span><span className="counter">19.8</span>k</span>
                        <P>{Follow}</P>
                    </LI>
                    <LI><span>{year2}</span>
                        <P>{Experience}</P>
                    </LI>
                    <LI><span><span className="counter">95.2</span>k</span>
                        <P>{Follower} </P>
                    </LI>
                </UL>
            </div>
        </Fragment >
    );
};

export default Profile;