import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Modalcontent, Profile, TabsRightAlign } from '../../../../../../Constant';
import { P } from '../../../../../../AbstractElements';
import HeaderCard from '../../../../../Common/Component/HeaderCard';

const RighhtAlign = () => {

  const [RightTab, setRightTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <HeaderCard title={TabsRightAlign} />
        <CardBody>
          <Nav className="nav nav-tabs nav-right" >
            <NavItem>
              <NavLink href="#javascript" className={RightTab === '1' ? 'active' : ''} onClick={() => setRightTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={RightTab === '2' ? 'active' : ''} onClick={() => setRightTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={RightTab === '3' ? 'active' : ''} onClick={() => setRightTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={RightTab}>
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

export default RighhtAlign;