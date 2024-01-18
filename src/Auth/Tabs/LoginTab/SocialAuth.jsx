import React, { Fragment } from 'react';
import { FormGroup } from 'react-bootstrap';
import { H3, P, UL, LI } from '../../../AbstractElements';
import { CreateAccount, Donthaveaccount, orSigninwith } from '../../../Constant';
import { Link } from 'react-router-dom';
import { GitHub } from 'react-feather';

const SocialAuth = () => {
    return (
        <Fragment>
            <div className='login-social-title'>
                <H3>{orSigninwith}</H3>
            </div>
            <div >
                <FormGroup className='form-group'>
                    <UL attrUL={{ className: 'login-social d-flex flex-row simple-list' }}>
                        <LI> <a href="#"><i className="fa fa-facebook me-0"></i></a></LI>
                        <LI> <a href='#'><i className="fa fa-google txt-googleplus me-0"></i></a></LI>
                        <LI> <a href="#"><GitHub size={15} style={{ marginTop: '5px' }} /></a></LI>
                    </UL>
                </FormGroup>
            </div>
            <P attrPara={{ className: 'mt-4 mb-0 text-center' }} >
                {Donthaveaccount}<Link to={`${process.env.PUBLIC_URL}/pages/auth/register-simple`} className="ms-2">{CreateAccount}</Link>
            </P>
        </Fragment>
    );
};

export default SocialAuth;