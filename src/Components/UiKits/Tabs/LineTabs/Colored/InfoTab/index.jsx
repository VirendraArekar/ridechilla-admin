import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { H3, P } from '../../../../../../AbstractElements';
import { Add, Hometxt, Inbox, MaterialRightTab, Modalcontent, nav_info, Pillspan1, Profile, Settings } from '../../../../../../Constant';

const InfoColorTab = () => {
  const [InfoRightLineTab, setInfoRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{MaterialRightTab}</H3>
          <span>{Add} <code>{nav_info}</code> {Pillspan1}</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="9" className="tabs-responsive-side">
              <TabContent activeTab={InfoRightLineTab} className='text-end'>
                <TabPane className="fade show" tabId="1" >
                  <P>{Modalcontent}</P>
                </TabPane>  
                <TabPane tabId="2">
                  <P>{Modalcontent}</P>
                </TabPane>
                <TabPane tabId="3">
                  <P>{Modalcontent}</P>
                </TabPane>
                <TabPane tabId="4">
                  <P>{Modalcontent}</P>
                </TabPane>
              </TabContent>
            </Col>
            <Col sm="3">
              <Nav className="flex-column nav-info border-tab nav-right">
                <NavLink href="#javascript" className={InfoRightLineTab === '1' ? 'active' : ''} onClick={() => setInfoRightLineTab('1')}>{Hometxt}</NavLink>
                <NavLink href="#javascript" className={InfoRightLineTab === '2' ? 'active' : ''} onClick={() => setInfoRightLineTab('2')}>{Profile}</NavLink>
                <NavLink href="#javascript" className={InfoRightLineTab === '3' ? 'active' : ''} onClick={() => setInfoRightLineTab('3')}>{Inbox}</NavLink>
                <NavLink href="#javascript" className={InfoRightLineTab === '4' ? 'active' : ''} onClick={() => setInfoRightLineTab('4')}>{Settings}</NavLink>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoColorTab;