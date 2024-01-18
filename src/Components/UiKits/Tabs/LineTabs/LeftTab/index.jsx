import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../AbstractElements';
import { Add, border_tab, Hometxt, Inbox, MaterialLeftTab, Modalcontent, Pillspan1, Profile, Settings } from '../../../../../Constant';

const LeftTab = () => {
  const [LeftLineTab, setLeftLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{MaterialLeftTab}</H3>
          <span>{Add} <code>{border_tab}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-pills border-tab nav-left" >
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '1' ? 'active' : ''} onClick={() => setLeftLineTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="#javascript" className={LeftLineTab === '2' ? 'active' : ''} onClick={() => setLeftLineTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '3' ? 'active' : ''} onClick={() => setLeftLineTab('3')}>{Inbox}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '4' ? 'active' : ''} onClick={() => setLeftLineTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={LeftLineTab}>
                <TabPane className="fade show" tabId="1">
                  <P>{Modalcontent}</P>
                </TabPane>
                <TabPane tabId="2">
                  <P>{Modalcontent}</P>
                </TabPane>
                <TabPane tabId="3">
                  <P>{Modalcontent}</P>
                </TabPane>
                <TabPane tabId="4">
                  <P>{Modalcontent}</P>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftTab;