import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AnotherLink, DropdownButton, DropdownWithDivider, Link1, Useclass } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const WithDivider = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={DropdownWithDivider} span1={Useclass} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-square' }} >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
            <DropdownMenu className="dropdown-content">
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#">{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDivider;