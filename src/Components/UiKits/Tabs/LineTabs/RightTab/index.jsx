import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../AbstractElements';
import { Add, border_tab, Hometxt, Inbox, MaterialRightTab, Modalcontent, Pillspan1, Profile, Settings } from '../../../../../Constant';

const RightTab = () => {
  const [RightLineTab, setRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{MaterialRightTab}</H3>
          <span>{Add} <code>{border_tab}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="9">
              <TabContent activeTab={RightLineTab} className="text-end">
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
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column border-tab nav-right" >
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '1' ? 'active' : ''} onClick={() => setRightLineTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="#javascript" className={RightLineTab === '2' ? 'active' : ''} onClick={() => setRightLineTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '3' ? 'active' : ''} onClick={() => setRightLineTab('3')}>{Inbox}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={RightLineTab === '4' ? 'active' : ''} onClick={() => setRightLineTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightTab;