import React, { useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { P } from '../../../../../AbstractElements';
import { Action, AnotherAction, BasicTabs, Contact, dropdown, Hometxt, Modalcontent, Profile, SeparatedLink, SomethingElseHere } from '../../../../../Constant';
import HeaderCard from '../../../../Common/Component/HeaderCard';

const BasicTabCard = () => {

  const [BasicTab, setBasicTab] = useState('1');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Col sm="12" xl="6 xl-100" >
      <Card>
        <HeaderCard title={BasicTabs} />
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>{Hometxt}</NavLink>
            </NavItem>
            <Dropdown className="nav-items" isOpen={dropdownOpen} toggle={toggle}>              
                <DropdownToggle className={`nav-link dropdown-toggle bg-transparent border-none ${BasicTab === '2' ? 'active' : ''}`} tag="a" href="#javascript" color="default" onClick={() => setBasicTab('2')}>{dropdown}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#javascript">{Action}</DropdownItem>
                  <DropdownItem href="#javascript">{AnotherAction}</DropdownItem>
                  <DropdownItem href="#javascript">{SomethingElseHere}</DropdownItem>
                  <DropdownItem href="#javascript">{SeparatedLink}</DropdownItem>
                </DropdownMenu>              
            </Dropdown>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '4' ? 'active' : ''} onClick={() => setBasicTab('4')}>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
            <TabPane tabId="4">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{Modalcontent}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTabCard;