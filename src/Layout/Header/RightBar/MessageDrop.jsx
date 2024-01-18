import React, { Fragment } from 'react';
import { MessageSquare } from 'react-feather';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Image, LI, P, UL, H3 } from '../../../AbstractElements';
import { MessageBox, ViewAll } from '../../../Constant';
import { Messagedata } from '../../../Data/Header/Data';

const MessageDrop = () => {
    const Navigate = useNavigate();
    const image = require.context('../../../assets/images/', true)
    const getImage = (images) => {
        return image(`./${images}`);
    }
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
                <MessageSquare />
                <UL attrUL={{ className: 'simple-list chat-dropdown onhover-show-div' }} >
                    <LI>
                        <MessageSquare />
                        <H3 attrH3={{ className: 'mb-0' }}>{MessageBox}</H3>
                    </LI>
                    {
                        Messagedata.map((item, index) => {
                            return (
                                <LI key={index}>
                                    <div className="d-flex">
                                        <Image attrImage={{ className: 'img-fluid rounded-circle me-3', src: `${getImage(item.img)}`, alt: '' }} />
                                        <div className={`status-circle ${item.status}`}></div>
                                        <div className="flex-grow-1" data-bs-original-title>
                                            <span><Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>{item.name}</Link></span>
                                            <P attrPara={{ className: 'light-font' }} >{item.desc}</P>
                                        </div>
                                        <P attrPara={{ className: `f-12 ${item.status === 'online' ? 'font-success' : 'font-danger'}` }} >{item.time}</P>
                                    </div>
                                </LI>
                            )
                        })
                    }
                    <LI attrLI={{ className: 'text-center', onClick: () => { Navigate(`${process.env.PUBLIC_URL}/app/chat-app`) } }} >
                        <a className="btn btn-primary" href="#javascript">{ViewAll}</a>
                    </LI>
                </UL>
            </LI>
        </Fragment>
    );
};

export default MessageDrop;