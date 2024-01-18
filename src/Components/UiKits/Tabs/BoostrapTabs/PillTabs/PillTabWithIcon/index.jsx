import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { P } from '../../../../../../AbstractElements';
import { Contact, Hometxt, Modalcontent, Pilltabcontent, PillTabsWithIcon, Profile } from '../../../../../../Constant';
import HeaderCard from '../../../../../Common/Component/HeaderCard';

const PillTabWithIcon = () => {

  const [pillWithIconTab, setpillWithIconTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
        <HeaderCard  title={PillTabsWithIcon}/>
        <CardBody>
          <Nav className="nav-pills">
            <NavItem>
              <NavLink href="#javascript" className={pillWithIconTab === '1' ? 'active' : ''} onClick={() => setpillWithIconTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={pillWithIconTab === '2' ? 'active' : ''} onClick={() => setpillWithIconTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={pillWithIconTab === '3' ? 'active' : ''} onClick={() => setpillWithIconTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={pillWithIconTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{className:'mb-0 m-t-30'}}>{Modalcontent}{Pilltabcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{className:'mb-0 m-t-30'}}>{Pilltabcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{className:'mb-0 m-t-30'}}>{Pilltabcontent}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillTabWithIcon;