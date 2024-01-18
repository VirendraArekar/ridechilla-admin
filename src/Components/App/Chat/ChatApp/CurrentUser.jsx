import React, { Fragment, useContext } from 'react';
import ChatAppContext from '../../../../_helper/Chat';
import { Image } from '../../../../AbstractElements';
import { Media } from 'reactstrap';

const CurrentUser = () => {
    const { currentUserr } = useContext(ChatAppContext);
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };

    return (
        <Fragment>            
            {currentUserr && <Media className="d-flex">
                <Image attrImage={{
                    src: `${dynamicImage(currentUserr.thumb)}`
                    ,className: 'rounded-circle user-image'
                }}
                />
                <div className="about">
                    <div className="name f-w-600">{currentUserr.name}</div>
                    <div className="status">{currentUserr.status}</div>
                </div>
            </Media>}
        </Fragment>
    );
};

export default CurrentUser;