import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import HeaderProfile from '../Common/HeaderProfile';
import NavComponent from './NavComponent';
import TabComponent from './TabComponent';
import ContactAppContext from '../../../../_helper/Contact';

const LeftContact = () => {
    const { users } = useContext(ContactAppContext);
    const [activeTab, setActiveTab] = useState('1');
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
      };
    useEffect(() => {
    }, [users]);
    const selectedUser = users[0];

    const callback = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    return (
        <Fragment>
            <Col xl="3" className="box-col-30 xl-30">
                <div className="email-left-aside md-sidebar contact-sidebar">
                    <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>Contact Filter</a>
                    <div className={`md-sidebar-aside custom-scrollbar email-left-aside ${IsOpen ? 'open' : ''}`}>
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <HeaderProfile />
                                    <NavComponent callbackActive={callback} />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Col>
            <Col xl="9" md="12" className="box-col-70 xl-70">
                <div className="email-right-aside bookmark-tabcontent contacts-tabs">
                    <div className="email-body">
                        <div className="ps-0">
                            <TabComponent activeTab={activeTab} users={users} selectedUser={selectedUser} />
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default LeftContact;