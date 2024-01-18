import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane,} from 'reactstrap';
import { Add, Contact, Hometxt, Modalcontent, nav_primary, Pillspan1, PrimaryColor, Profile,} from '../../../../../../../Constant';
import { H3, P } from '../../../../../../../AbstractElements';

const PillPrimaryTab = () => {
  const [primarycolorTab, setprimarycolorTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{PrimaryColor}</H3>
          <span>{Add} <code>{nav_primary}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="nav-primary" tabs>
            <NavItem>
              <NavLink href="#javascript" className={primarycolorTab === '1' ? 'active' : ''} onClick={() => setprimarycolorTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={primarycolorTab === '2' ? 'active' : ''} onClick={() => setprimarycolorTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={primarycolorTab === '3' ? 'active' : ''} onClick={() => setprimarycolorTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={primarycolorTab}>
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

export default PillPrimaryTab;
