import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H3 } from '../../../AbstractElements';
import { Active, Disabled, DropdownButton, dropdownDisable, DropdownWithDisable, Normal, Useclass } from '../../../Constant';

const WithDisable = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{DropdownWithDisable}</H3>
          <span>{Useclass} <code>{dropdownDisable}</code></span>
        </CardHeader>
        <CardBody className="dropup-basic">
          <Dropdown className="dropup">
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-square' }}>{DropdownButton} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
            <DropdownMenu className="dropup-content">
              <DropdownItem href="#">{Normal}</DropdownItem>
              <DropdownItem href="#" active>{Active}</DropdownItem>
              <DropdownItem href="#" disabled>{Disabled}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDisable;