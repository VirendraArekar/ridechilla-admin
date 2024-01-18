import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Image, LI, UL } from '../../../../AbstractElements';
import ChatAppContext from '../../../../_helper/Chat';
import start_conversion from '../../../../assets/images/start-conversion.jpg';

const ChatMessage = () => {
    const bottomRef = useRef(null);
    const [scroll, setScroll] = useState(0);
    const { allMemberss, chatss, selectedUserr, currentUserr, fetchChatMemberAsyn, fetchChatAsyn, } = useContext(ChatAppContext);
    var images = require.context('../../../../assets/images', true);

    useEffect(() => {
        fetchChatMemberAsyn();
        fetchChatAsyn();
        setScroll(1);
    }, [allMemberss.length, chatss.length]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatss, scroll])

    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    const selectedChat =
        allMemberss && chatss && selectedUserr
            ? chatss.find(
                (x) =>
                    x.users.includes(currentUserr.id) &&
                    x.users.includes(selectedUserr.id)
            )
            : null;

    return (
        <Fragment>
            {allMemberss && chatss && selectedUserr ?
                <div className="chat-history chat-msg-box custom-scrollbar">
                    <UL attrUL={{ className: 'simple-list' }}>
                        {selectedChat && selectedChat.messages.length > 0 ? (
                            selectedChat.messages.map((item, id) => {
                                const participators = allMemberss.find(
                                    (x) => x.id === item.sender
                                );
                                return (
                                    <LI key={id} attrLI={{ className: 'clearfix' }} >
                                        <div className={`message my-message ${item.sender !== currentUserr.id ? '' : 'pull-right other-message'}`}>
                                            <Image attrImage={{
                                                src: `${dynamicImage(participators.thumb)}`,
                                                className: `rounded-circle ${item.sender !== currentUserr.id ? 'float-start' : 'float-end'}
                                                chat-user-img img-30`
                                            }} />
                                            <div className="message-data text-end">
                                                <span className="message-data-time">
                                                    {item.time}
                                                </span>
                                            </div>
                                            {item.text}
                                        </div>
                                    </LI>
                                );
                            })
                        ) : (
                            <div>
                                <Image attrImage={{ className: 'img-fluid', src: `${start_conversion}`, alt: 'start conversion ' }} />
                            </div>
                        )}
                        <LI>
                            <div ref={bottomRef}></div>
                        </LI>
                    </UL>
                </div>
                : <div className="loading"></div>
            }
        </Fragment>
    );
};
export default ChatMessage;