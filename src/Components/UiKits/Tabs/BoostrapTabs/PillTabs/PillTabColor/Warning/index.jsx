import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Add, Contact, Hometxt, Modalcontent, nav_warning, Pillspan1, Profile, WarningColor } from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillWarningTab = () => {

  const [warningTab, setwarningTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <CardHeader className='pb-0'>
          <H3>{WarningColor}</H3>
          <span>{Add} <code>{nav_warning}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-warning">
            <NavItem>
              <NavLink href="#javascript" className={warningTab === '1' ? 'active' : ''} onClick={() => setwarningTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={warningTab === '2' ? 'active' : ''} onClick={() => setwarningTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={warningTab === '3' ? 'active' : ''} onClick={() => setwarningTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={warningTab}>
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

export default PillWarningTab;