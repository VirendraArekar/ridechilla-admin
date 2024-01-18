import React, { Fragment } from 'react';
import { FormGroup } from 'react-bootstrap';
import { H3, P,UL,LI } from '../../../AbstractElements';
import { CreateAccount, Donthaveaccount, orSigninwith } from '../../../Constant';
import { Link } from 'react-router-dom';

const SocialAuth = ({btntext,logtext}) => {
    return (
        <Fragment>
            <div className='login-social-title'>
                <H3>{orSigninwith}</H3>
            </div>
            <div >
                <FormGroup className='form-group'>
                    <UL attrUL={{className:'login-social d-flex flex-row simple-list'}}>
                        <LI><a href='https://www.facebook.com/'><i className="fa fa-facebook me-0"></i></a></LI>
                        <LI><a href='https://www.google.com/'><i className="fa fa-linkedin me-0"> </i></a></LI>
                        <LI><a href='https://twitter.com/'><i className="fa fa-twitter me-0"></i></a></LI>
                        <LI><a href='https://www.instagram.com/'><i className="fa fa-instagram me-0"></i></a></LI>
                    </UL>                
                </FormGroup>
            </div>
            <P attrPara={{ className: 'mt-4 mb-0 text-center'}} >
                {logtext?logtext:Donthaveaccount}{(!logtext && !btntext)?<Link to={`${process.env.PUBLIC_URL}/pages/auth/register-simple`} className="ms-2">{CreateAccount}</Link>:
                <Link to={`${process.env.PUBLIC_URL}/login`} className="ms-2">{btntext}</Link>}
            </P>
        </Fragment>
    );
};

export default SocialAuth;
