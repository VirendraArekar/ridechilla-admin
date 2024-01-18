import React, { Fragment, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { P,H3 } from '../../../../AbstractElements'
import { Contact, Hometxt, Profile } from '../../../../Constant'

const Comontab = ({title,pare,icone,navclass}) => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Fragment>
        <Col lg="12 box-col-12" xl="6 xl-100">
            <Card>
                <CardHeader>
                    <H3>{title}</H3>
                </CardHeader>
                <CardBody>
                    <div className="tabbed-card">
                        <Nav className={navclass}>
                            <NavItem>
                                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                    {icone.homeIcon && icone.homeIcon}{Hometxt}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                    {icone.Profile && icone.Profile}{Profile}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                    {icone.contactIcon && icone.contactIcon}{Contact}
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <P attrPara={{ className: 'mb-0' }} >{pare}</P>
                            </TabPane>
                            <TabPane tabId="2">
                                <P attrPara={{ className: 'mb-0' }}>{pare}</P>
                            </TabPane>
                            <TabPane tabId="3">
                                <P attrPara={{ className: 'mb-0' }}>{pare}</P>
                            </TabPane>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Fragment>
  )
}

export default Comontab