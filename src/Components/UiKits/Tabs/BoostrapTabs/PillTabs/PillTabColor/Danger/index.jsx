import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Add, Contact, DangerColor, Hometxt, Modalcontent, nav_danger, Pillspan1, Profile } from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillDangerTab = () => {
  const [dangerTab, setdangerTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <CardHeader className='pb-0'>
          <H3>{DangerColor}</H3>
          <span>{Add} <code>{nav_danger}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-danger">
            <NavItem>
              <NavLink href="#javascript" className={dangerTab === '1' ? 'active' : ''} onClick={() => setdangerTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={dangerTab === '2' ? 'active' : ''} onClick={() => setdangerTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={dangerTab === '3' ? 'active' : ''} onClick={() => setdangerTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={dangerTab}>
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

export default PillDangerTab;