import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { FollowingsData } from '../../../../Data/Bonus-ui/Data';
import Image from '../../../../CommonElements/Media';
import { H5, Btn } from '../../../../AbstractElements';
import { AddFriend, Followings } from '../../../../Constant';

const Followingsprofile = () => {

    const [isShow, setIsShow] = useState(true);
    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <H5 attrH5={{ className: 'mb-0 p-0' }} >
                        <Btn attrBtn={{ color: 'transparent btn-link ps-0', onClick: () => { setIsShow(!isShow) } }}>{Followings}</Btn>
                    </H5>
                </CardHeader>
                <div className={`collapse ${isShow ? 'show' : ''}`} id="collapseicon11" aria-labelledby="collapseicon11">
                    <CardBody className="card-body social-list filter-cards-view">
                        {FollowingsData.map((item) =>
                            <div className="d-flex" key={item.id}>
                                <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${item.img}` }} />
                                <div className="media-body flex-grow-1"><span className="d-block">{item.name}</span><a href="#javascript">{AddFriend}</a></div>
                            </div>
                        )}
                    </CardBody>
                </div>
            </Card>
        </Fragment>
    );
};

export default Followingsprofile;