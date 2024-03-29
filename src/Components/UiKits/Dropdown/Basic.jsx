import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Action, AnotherAction, BasicDropdown, DropdownButton, SomethingElseHere } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const Basic = () => {
  return (
    <Col sm="12" lg="5">
      <Card>
        <HeaderCard title={BasicDropdown} />
        <CardBody className="dropdown-basic">
          <Dropdown className="dropdown">
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-square' }} >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
            <DropdownMenu className="dropdown-content">
              <DropdownItem href="#">{Action}</DropdownItem>
              <DropdownItem href="#">{AnotherAction}</DropdownItem>
              <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;