import React, { Fragment } from 'react';
import { CardBody, } from 'reactstrap';
import { AddFriend } from '../../../../Constant';
import { Btn, LI, UL, Image } from '../../../../AbstractElements';
import { FriendsData } from '../../../../Data/Bonus-ui/Data';

const AddFriends = () => {
    return (
        <Fragment>
            <CardBody className="avatar-showcase">
                <div className="pepole-knows">
                    <UL attrUL={{ className: 'simple-list d-flex flex-row flex-wrap' }}>
                        {FriendsData.map((item, i) =>
                            <LI key={i}>
                                <div className="add-friend text-center">
                                    <Image attrImage={{ className: 'img-60 img-fluid rounded-circle', alt: 'twoImg', src: item.img }} /><span className="d-block f-w-600">{item.title}</span>
                                    <Btn attrBtn={{ color: 'primary', size: 'xs' }}>{AddFriend}</Btn>
                                </div>
                            </LI>
                        )}
                    </UL>
                </div>
            </CardBody>
        </Fragment>
    );
};
export default AddFriends;