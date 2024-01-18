import React, { Fragment, useState } from 'react';
import { Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, CardHeader } from 'reactstrap';
import { Hometxt, Profile, Contact, SimpleTab } from '../../../../Constant';
import { P,H3 } from '../../../../AbstractElements';
import { TabCardData } from '../../../../Data/Bonus-ui/Data';

const TabCardCommon = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            {TabCardData.map((item, i) =>
                <Col lg="12 box-col-12" xl="6 xl-100" key={i}>
                    <Card>
                        <CardHeader className='pb-0'>
                            <H3>{SimpleTab}</H3>
                        </CardHeader>
                        <CardBody>
                            <div className="tabbed-card">
                                <Nav className={item.navClass}>
                                    <NavItem>
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                            {item.homeIcon ? item.homeIcon : ''} {Hometxt}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                            {item.glassIcon ? item.glassIcon : ''} {Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            {item.contactIcon ? item.contactIcon : ''} {Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <P attrPara={{ className: 'mb-0' }} >{item.pare}</P>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <P attrPara={{ className: 'mb-0' }}>{item.pare}</P>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <P attrPara={{ className: 'mb-0' }}>{item.pare}</P>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default TabCardCommon;