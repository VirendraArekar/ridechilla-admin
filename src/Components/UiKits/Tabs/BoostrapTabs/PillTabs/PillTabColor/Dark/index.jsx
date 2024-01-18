import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Add, Contact, Hometxt, Modalcontent, Navstar, nav_pill, PillDarkColor, Pillspan1, Pillspan2, Pilltabcontent, Profile, remove } from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillDarkTab = () => {

  const [pillDarkTab, setpillDarkTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <CardHeader className='pb-0'>
          <H3>{PillDarkColor}</H3>
          <span>{Add} <code>{Navstar}</code> {Pillspan1}</span><span>{remove}  <code>{nav_pill}</code> {Pillspan2}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-dark">
            <NavItem>
              <NavLink href="#javascript" className={pillDarkTab === '1' ? 'active' : ''} onClick={() => setpillDarkTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={pillDarkTab === '2' ? 'active' : ''} onClick={() => setpillDarkTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={pillDarkTab === '3' ? 'active' : ''} onClick={() => setpillDarkTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={pillDarkTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{Pilltabcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{Modalcontent}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillDarkTab;