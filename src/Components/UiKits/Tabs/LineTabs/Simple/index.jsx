import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../AbstractElements';
import { Add, border_tab, Contact, Hometxt, Modalcontent, Pillspan1, Profile, SimpleMaterialTab } from '../../../../../Constant';

const Simple = () => {
  const [BasicLineTab, setBasicLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{SimpleMaterialTab}</H3>
          <span>{Add} <code>{border_tab}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="border-tab" tabs>
            <NavItem>
              <NavLink href="#javascript" className={BasicLineTab === '1' ? 'active' : ''} onClick={() => setBasicLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BasicLineTab === '2' ? 'active' : ''} onClick={() => setBasicLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BasicLineTab === '3' ? 'active' : ''} onClick={() => setBasicLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicLineTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Simple;