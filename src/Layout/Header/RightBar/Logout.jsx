import React, { Fragment, useEffect, useState } from 'react';
import { Image, LI, P, UL } from '../../../AbstractElements';
import { User, Mail, FileText, LogOut } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import man from '../../../assets/images/dashboard/profile.png';
import { Account, Inbox, logout, Taskboard } from '../../../Constant';

const LogoutClass = () => {
    const Navigate = useNavigate();
    const authenticated = JSON.parse(localStorage.getItem('authenticated'));
    const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
        setName(JSON.parse(localStorage.getItem('user'))?.name);
    }, [setProfile, setName]);

    const Logout = () => {
        // localStorage.removeItem('profileURL');
        // localStorage.removeItem('token');
        // localStorage.removeItem('auth0_profile');
        // localStorage.removeItem('Name');
        localStorage.removeItem('user');
        // localStorage.setItem('authenticated', false);
        localStorage.setItem('login', false);
        Navigate(`${process.env.PUBLIC_URL}/login`);
    };

    return (
        <Fragment>
            <LI attrLI={{ className: "profile-nav onhover-dropdown p-0" }} >
                <div className="d-flex profile-media">
                    <Image attrImage={{ className: 'b-r-50 m-0', src: authenticated ? auth0_profile.picture : profile, alt: '' }} />
                    <div className="flex-grow-1"><span>{authenticated ? auth0_profile.name : name}</span>
                        <P attrPara={{ className: "mb-0 font-roboto" }} >Admin <i className="middle fa fa-angle-down"></i></P>
                    </div >
                </div >
                <UL attrUL={{ className: "profile-dropdown onhover-show-div" }}>
                    <LI>
                        <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}><User />{Account}</Link>
                    </LI>
                    {/* <LI>
                        <Link to={`${process.env.PUBLIC_URL}/app/email/mailbox`}><Mail />{Inbox}</Link>
                    </LI>
                    <LI>
                        <Link to={`${process.env.PUBLIC_URL}/app/todo`}><FileText />{Taskboard}</Link>
                    </LI> */}
                    <LI attrLI={{ onClick: Logout }}>
                        <Link to={`${process.env.PUBLIC_URL}/login`}><LogOut />{logout}</Link>
                    </LI>
                </UL>
            </LI >
        </Fragment >
    );
};

export default LogoutClass;