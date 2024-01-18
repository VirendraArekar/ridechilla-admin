import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Modalcontent, Profile, TabsBottomLeftAlign } from '../../../../../../Constant';
import { P } from '../../../../../../AbstractElements';
import HeaderCard from '../../../../../Common/Component/HeaderCard';

const BottomLeftAlignCard = () => {
  const [BottomTab, setBottomTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <HeaderCard title={TabsBottomLeftAlign} />
        <CardBody>
          <TabContent activeTab={BottomTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-b-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-b-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-b-30' }}>{Modalcontent}</P>
            </TabPane>
          </TabContent>
          <Nav className="nav nav-tabs nav-bottom" >
            <NavItem>
              <NavLink href="#javascript" className={BottomTab === '1' ? 'active' : ''} onClick={() => setBottomTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={BottomTab === '2' ? 'active' : ''} onClick={() => setBottomTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BottomTab === '3' ? 'active' : ''} onClick={() => setBottomTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomLeftAlignCard;