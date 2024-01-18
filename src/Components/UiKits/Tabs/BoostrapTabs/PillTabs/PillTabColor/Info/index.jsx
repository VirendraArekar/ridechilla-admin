import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Add,Modalcontent, Contact, Hometxt, nav_info, Pillspan1, Profile, SecondaryColor } from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillInfoTab = () => {

  const [infoTab, setinfoTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <CardHeader className='pb-0'>
          <H3>{SecondaryColor}</H3>
          <span>{Add} <code>{nav_info}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-info">
            <NavItem>
              <NavLink href="#javascript" className={infoTab === '1' ? 'active' : ''} onClick={() => setinfoTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={infoTab === '2' ? 'active' : ''} onClick={() => setinfoTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={infoTab === '3' ? 'active' : ''} onClick={() => setinfoTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={infoTab}>
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

export default PillInfoTab;