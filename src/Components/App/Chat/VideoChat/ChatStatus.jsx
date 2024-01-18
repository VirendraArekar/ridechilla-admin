import React, { Fragment, useContext } from 'react';
import ChatAppContext from '../../../../_helper/Chat';
import { Image, LI, UL } from '../../../../AbstractElements';
import errorImg from '../../../../assets/images/search-not-found.png';
import SearchChatList from '../ChatApp/SearchChatList';
import CurrentUser from './CurrentUser';
import { Media } from 'reactstrap';

const ChatStatus = () => {
    const { allMemberss } = useContext(ChatAppContext);
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            <div className="chat-box">
                <div className="chat-left-aside">
                    <CurrentUser />
                    <div className="people-list" id="people-list">
                        <SearchChatList />
                        {allMemberss && allMemberss.length > 0 ? (
                            <UL attrUL={{ className: 'simple-list custom-scrollbar' }} >
                                {allMemberss.map((item, id) => {
                                    return (
                                        <LI key={id} attrLI={{ className: `clearfix` }}>
                                            <Media>
                                                <Image attrImage={{
                                                    src: `${dynamicImage(item.thumb)}`, className: 'rounded-circle user-image'
                                                }} />
                                                <div className={`status-circle ${item.online === true ? 'online' : 'offline'}`}></div>
                                                <Media body className='flex-grow-1'>
                                                    <div className="about">
                                                        <div className="name">{item.name}</div>
                                                        <div className="status">{item.status}</div>
                                                    </div>
                                                </Media>
                                            </Media>
                                        </LI>
                                    );
                                })}
                            </UL>
                        ) : (
                            <Image attrImage={{ className: 'img-fluid m-auto', src: { errorImg }, }} />
                        )}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};
export default ChatStatus;