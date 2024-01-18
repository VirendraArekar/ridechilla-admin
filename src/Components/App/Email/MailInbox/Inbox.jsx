import React, { Fragment, useContext } from 'react';
import EmailContext from '../../../../_helper/Email';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import { H6, P, Image } from '../../../../AbstractElements';
import { Input, Label, Media } from 'reactstrap';

const InboxClass = () => {
    const { allEmails } = useContext(EmailContext);
    return (
        <Fragment>
            <div className="inbox">
                {allEmails &&
                    allEmails.map((item) => {
                        return (
                            <Media key={item.id} className='d-flex'>
                                <div className="d-flex-size-email">
                                    <Label className="d-block mb-0" htmlFor="chk-ani">
                                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                    </Label>
                                    <Star className="like" />
                                    <Image attrImage={{
                                        className: 'me-3 rounded-circle'
                                        , src: `${require(`../../../../assets/images/${item.image}`)}`, alt: ''
                                    }} />
                                </div>
                                <Media body className='flex-grow-1'>
                                    <Link to={{ pathname: `${process.env.PUBLIC_URL}/app/email/readmail`, state: item.name }}>
                                        <H6>{item.name}</H6>
                                    </Link>
                                    <P>{item.text}</P>
                                    <span>{item.time}</span>
                                </Media>
                            </Media>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default InboxClass;