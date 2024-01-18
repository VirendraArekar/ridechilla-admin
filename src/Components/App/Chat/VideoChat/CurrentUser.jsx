import React, { Fragment } from 'react';
import { Image } from '../../../../AbstractElements';
import { Media } from 'reactstrap';
import { JohnLoren, myfavorite } from '../../../../Constant'

const CurrentUser = () => {
    var images = require.context('../../../../assets/images/avtar', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };

    return (
        <Fragment>
            <Media className="d-flex">
                <Image attrImage={{
                    src: `${dynamicImage('7.jpg')}`, className: 'rounded-circle user-image'
                }}
                />
                <div className="about">
                    <div className="name f-w-600">{JohnLoren}</div>
                    <div className="status">{myfavorite}</div>
                </div>
            </Media>
        </Fragment>
    );
};

export default CurrentUser;