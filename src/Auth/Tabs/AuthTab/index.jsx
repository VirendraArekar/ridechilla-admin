import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0, Authpara, Authtext } from '../../../Constant';
import { Btn, H4, P } from '../../../AbstractElements';

const AuthTab = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Fragment>
            <div className="auth-content">
                <H4>{Authtext}</H4>
                <P>{Authpara}</P>
                <Btn attrBtn={{ color: 'info', onClick: loginWithRedirect }} >{AUTH0}</Btn>
            </div>
        </Fragment>
    );
};
export default AuthTab;