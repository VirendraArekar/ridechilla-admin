import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../AbstractElements';
import { Add, border_tab, Contact, Hometxt, MaterialBottomTab, Modalcontent, Pillspan1, Profile } from '../../../../../Constant';

const BottomTab = () => {
  const [BottomLineTab, setBottomLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{MaterialBottomTab}</H3>
          <span>{Add} <code>{border_tab}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={BottomLineTab}>
            <TabPane className="fade show" tabId="1">
              <P>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P>{Modalcontent}</P>
            </TabPane>
          </TabContent>
          <Nav className="border-tab" tabs>
            <NavItem>
              <NavLink href="#javascript" className={BottomLineTab === '1' ? 'active' : ''} onClick={() => setBottomLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BottomLineTab === '2' ? 'active' : ''} onClick={() => setBottomLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BottomLineTab === '3' ? 'active' : ''} onClick={() => setBottomLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomTab;