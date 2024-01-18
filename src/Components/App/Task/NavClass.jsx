import React, { Fragment, useState } from 'react';
import { Col, Card, CardBody, Nav, NavItem } from 'reactstrap';
import { Views, Tags } from '../../../Constant';
import { PlusCircle } from 'react-feather';
import NewTaskClass from './NewTask';
import HeaderProfile from './HeaderProfile';
import { taskData, tagData } from '../../../Data/Task/index';
import CreateTag from './CreateTag';

const NavClass = ({ activeToggle }) => {
    const [activeTab, setActiveTab] = useState('1');
    const [tagModal, setTagModal] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
    };
    return (
        <Fragment>
            <Col xl="3" className="box-col-4 xl-30 box-col-30">
                <div className="md-sidebar email-sidebar">
                    <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>Task Filter</a>
                    <div className={`md-sidebar-aside email-left-aside ${IsOpen ? 'open' : ''}`}>
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <HeaderProfile />
                                    <Nav className="main-menu" role="tablist">
                                        <NavItem>
                                            <NewTaskClass />
                                        </NavItem>
                                        <NavItem>
                                            <span className="main-title">{Views}</span>
                                        </NavItem>
                                        {taskData.map((item) =>
                                            <NavItem key={item.id}>
                                                <a href="#javaScript" className={activeTab === item.activeTab ? 'active' : ''} onClick={() => {
                                                    setActiveTab(item.activeTab); activeToggle(item.activeTab);
                                                }}>
                                                    <span className="title"> {item.title}</span>
                                                </a>
                                            </NavItem>
                                        )}
                                        <NavItem>
                                            <hr className='lightborder' />
                                        </NavItem>
                                        <NavItem><span className="main-title"> {Tags}<span className="pull-right" onClick={() => { setTagModal(!tagModal) }}><PlusCircle /></span></span></NavItem>
                                        <CreateTag setTagModal={setTagModal} tagModal={tagModal} />
                                        {tagData.map((item) =>
                                            <Fragment key={item.id}>
                                                <NavItem><a href="#javaScript" className={activeTab === item.activeTab ? 'show' : ''} onClick={() => {
                                                    setActiveTab(item.activeTab); activeToggle(item.activeTab);
                                                }} ><span className="title"> {item.title}</span></a></NavItem>
                                            </Fragment>
                                        )}
                                    </Nav>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default NavClass;