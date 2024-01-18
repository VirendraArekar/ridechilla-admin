import React, { Fragment, useState } from 'react';
import { Card, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media, Label, Input } from 'reactstrap';
import InboxClass from './Inbox';
import {Action, Markasimportant, Movetospam, MovetoTrash, Refresh} from '../../../../Constant';

const MailContain = () => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <Fragment>
            <div className="email-right-aside">
                <Card className="email-body">
                    <div className="email-profile">
                        <div>
                            <div className="pe-0 b-r-light"></div>
                            <div className="email-top">
                                <Row>
                                    <div className="col-12">
                                        <Media className='d-flex'>
                                            <Label className="email-chek d-block" htmlFor="chk-ani">
                                                <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                            </Label>
                                            <Media className='flex-grow-1'>
                                                <div className="dropdown">
                                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                        <DropdownToggle color="primary" caret>{Action}</DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem className="dropdown-item">{Refresh}</DropdownItem>
                                                            <DropdownItem className="dropdown-item">{Markasimportant}</DropdownItem>
                                                            <DropdownItem className="dropdown-item">{Movetospam}</DropdownItem>
                                                            <DropdownItem className="dropdown-item">{MovetoTrash}</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </Media>
                                        </Media>
                                    </div>
                                </Row>
                            </div>
                            <InboxClass />
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};
export default MailContain;