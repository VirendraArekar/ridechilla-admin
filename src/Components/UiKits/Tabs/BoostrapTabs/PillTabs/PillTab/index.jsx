import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Modalcontent, Pilltabcontent, PillTabs, Profile } from '../../../../../../Constant';
import { P } from '../../../../../../AbstractElements';
import HeaderCard from '../../../../../Common/Component/HeaderCard';

const PillTab = () => {

  const [pillTab, setpillTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100 box-col-12">
      <Card>
        <HeaderCard title={PillTabs} />
        <CardBody>
          <Nav className="nav-pills">
            <NavItem>
              <NavLink href="#javascript" className={pillTab === '1' ? 'active' : ''} onClick={() => setpillTab('1')}>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={pillTab === '2' ? 'active' : ''} onClick={() => setpillTab('2')}>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={pillTab === '3' ? 'active' : ''} onClick={() => setpillTab('3')}>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={pillTab}>
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

export default PillTab;