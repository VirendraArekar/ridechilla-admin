import React, { Fragment } from 'react';
import { MARKJENCO, MARKJENCOEMAIL } from '../../../../Constant';
import { H6, Image, P } from '../../../../AbstractElements';

const HeaderProfile = () => {
    return (
        <Fragment>
            <div className="d-flex">
                <div className="d-flex-size-email">
                    <Image attrImage={{ className: 'me-3 rounded-circle', src: `${require('../../../../assets/images/user/user.png')}`, alt: '' }} /></div>
                <div className="flex-grow-1">
                    <H6 attrH6={{ className: 'f-w-700' }} >{MARKJENCO}</H6>
                    <P>{MARKJENCOEMAIL}</P>
                </div>
            </div>
        </Fragment>
    );
};
export default HeaderProfile;