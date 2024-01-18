import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { H5, LI, UL, Btn } from '../../../../AbstractElements';
import Image from '../../../../CommonElements/Media';
import { LatestPhotosData } from '../../../../Data/Bonus-ui/Data';
import { Latest_Photos } from '../../../../Constant';

const LatestPhotos = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <H5 attrH5={{ className: 'p-0 mb-0' }} >
                        <Btn attrBtn={{ color: 'transparent btn-link ps-0', onClick: () => { setIsShow(!isShow) } }}>{Latest_Photos}</Btn>
                    </H5>
                </CardHeader>
                <div className={`collapse ${isShow ? 'show' : ''}`} id="collapseicon4" aria-labelledby="collapseicon4">
                    <CardBody className="card-body photos filter-cards-view">
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                            {LatestPhotosData.map((item) =>
                                <LI key={item.id}>
                                    <div className="latest-post">
                                        <Image attrImage={{ className: 'img-fluid', alt: '', src: item.img }} />
                                    </div>
                                </LI>
                            )}
                        </UL>
                    </CardBody>
                </div>
            </Card>
        </Fragment >
    );
};

export default LatestPhotos;