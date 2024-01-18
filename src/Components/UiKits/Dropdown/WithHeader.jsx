import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H3} from '../../../AbstractElements';
import { AnotherLink, DropdownButton, dropdownHeader, DropdownHeader, DropdownWithHeader, Link1, Useclass } from '../../../Constant';

const WithHeader = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{DropdownWithHeader}</H3>
          <span>{Useclass} <code>{dropdownHeader}</code></span>
        </CardHeader>
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-square' }}>{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
            <DropdownMenu className="dropdown-content">
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href="#">{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithHeader;