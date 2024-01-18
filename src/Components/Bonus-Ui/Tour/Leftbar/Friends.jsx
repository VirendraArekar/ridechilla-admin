import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { FriendsData } from '../../../../Data/Bonus-ui/Data';
import Image from '../../../../CommonElements/Media';
import { H3, Btn } from '../../../../AbstractElements';
import { Friends } from '../../../../Constant';

const FriendsProfile = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <H3 attrH5={{ className: 'mb-0 p-0' }} >
                        <Btn attrBtn={{ color: 'transparent btn-link ps-0', onClick: () => { setIsShow(!isShow) } }}>{Friends}</Btn>
                    </H3>
                </CardHeader>
                <div className={`collapse ${isShow ? 'show' : ''}`} id="collapseicon13" aria-labelledby="collapseicon13">
                    <CardBody className="avatar-showcase filter-cards-view">
                        {
                            FriendsData.map((item) =>
                                <div className="d-inline-block friend-pic" key={item.id}>
                                    <Image attrImage={{ className: 'img-50 rounded-circle', src: `${item.img}`, alt: '#' }} />
                                </div>
                            )
                        }
                    </CardBody>
                </div>
            </Card>
        </Fragment>
    );
};

export default FriendsProfile;