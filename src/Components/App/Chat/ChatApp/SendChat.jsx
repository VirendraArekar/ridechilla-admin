import React, { useContext, useState } from 'react';
import { Col, Input, InputGroup, Row } from 'reactstrap';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Btn, Image } from '../../../../AbstractElements';
import ChatAppContext from '../../../../_helper/Chat';
import { Send } from '../../../../Constant';

const SendChat = () => {

    const [messageInput, setMessageInput] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { chatss, selectedUserr, currentUserr, sendMessageAsyn, replyByUserAsyn, } = useContext(ChatAppContext);

    const addEmoji = (emoji) => {
        const text = `${messageInput}${emoji}`;
        setShowEmojiPicker(false);
        setMessageInput(text);
    };
    const handleMessageChange = (message) => {
        setMessageInput(message);
    };
    const handleMessagePress = (e) => {
        if (e.key === 'Enter' || e === 'send') {
            var container = document.querySelector('.chat-history');
            setTimeout(function () {
                container.scrollBy({ top: 200, behavior: 'smooth' });
            }, 310);

            let currentUserId = currentUserr.id;
            let selectedUserId = selectedUserr.id;
            let selectedUserName = selectedUserr.name;

            if (messageInput.length > 0) {
                sendMessageAsyn(currentUserId, selectedUserId, messageInput, chatss);
                setMessageInput('');
                setTimeout(() => {
                    const replyMessage =
                        'Hey This is ' +
                        selectedUserName +
                        ', Sorry I busy right now, I will text you later';
                    if (selectedUserr.online === true)
                        document.querySelector('.status-circle').classList.add('online');
                    selectedUserr.online = true;
                    replyByUserAsyn(currentUserId, selectedUserId, replyMessage, chatss);
                }, 2000);
            }
        }
    };
    return (
        <div className="chat-message clearfix">
            <Row>
                <div>
                    {showEmojiPicker ? <Picker data={data} onEmojiSelect={(e) => { addEmoji(e.native) }} /> : null}
                </div>
                <Col xl="12" className="d-flex">
                    <div className="smiley-box bg-primary">
                        <div className="picker" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                            <Image attrImage={{ src: `${require('../../../../assets/images/smiley.png')}`, alt: '' }} />
                        </div>
                    </div>
                    <InputGroup className="text-box">
                        <Input
                            type="text"
                            className="form-control input-txt-bx"
                            placeholder="Type a message......"
                            value={messageInput}
                            onKeyPress={(e) => handleMessagePress(e)}
                            onChange={(e) =>
                                handleMessageChange(e.target.value)
                            }
                        />
                        <Btn attrBtn={{ className: 'text-uppercase', color: 'primary', onClick: () => { handleMessagePress('send') } }}>{Send}</Btn>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
};

export default SendChat;