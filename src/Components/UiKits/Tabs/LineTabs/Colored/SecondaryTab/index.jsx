import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../../AbstractElements';
import { Add, Contact, Hometxt, MaterialColorTab, Modalcontent, nav_secondary, Pillspan1, Profile} from '../../../../../../Constant';

const SecondaryColorTab = () => {
  const [SecondarycolorLineTab, setSecondarycolorLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{MaterialColorTab}</H3>
          <span>{Add} <code>{nav_secondary}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Nav className="border-tab nav-secondary" tabs>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '1' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '2' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '3' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={SecondarycolorLineTab}>
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

export default SecondaryColorTab;