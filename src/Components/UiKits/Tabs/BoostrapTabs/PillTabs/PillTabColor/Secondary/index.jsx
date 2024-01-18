import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Add, Contact, Hometxt, Modalcontent, nav_secondary, Pillspan1, Profile, SecondaryColor } from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillSecondaryTab = () => {

  const [secondaryTab, setSecondary] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <CardHeader className='pb-0'>
          <H3>{SecondaryColor}</H3>
          <span>{Add} <code>{nav_secondary}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-secondary">
            <NavItem>
              <NavLink href="#javascript" className={secondaryTab === '1' ? 'active' : ''} onClick={() => setSecondary('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={secondaryTab === '2' ? 'active' : ''} onClick={() => setSecondary('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={secondaryTab === '3' ? 'active' : ''} onClick={() => setSecondary('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={secondaryTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{Modalcontent}</P>
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

export default PillSecondaryTab;