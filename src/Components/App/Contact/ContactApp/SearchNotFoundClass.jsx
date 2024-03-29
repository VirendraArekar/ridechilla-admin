import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import { Image, P } from '../../../../AbstractElements';
import search from '../../../../assets/images/search-not-found.png';
import { NotFoundContact } from '../../../../Constant'

const SearchNotFoundClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <div>
                    <div className="search-not-found text-center">
                        <div>
                            <Image attrImage={{ src: `${search}`, alt: '', className: 'second-search' }} />
                            <P attrPara={{ className: 'mb-0' }} >{NotFoundContact}</P>
                        </div >
                    </div >
                </div >
            </Col>
        </Fragment >
    );
};

export default SearchNotFoundClass;