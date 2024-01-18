import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H3 } from '../../../AbstractElements';
import { DropdownButton, DropdownWithDropUp, dropup, Link1, Useclass } from '../../../Constant';

const WithDropUp = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{DropdownWithDropUp}</H3>
          <span>{Useclass} <code>{dropup}</code></span>
        </CardHeader>
        <CardBody className="dropup-basic">
          <Dropdown className="dropup">
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-square' }}  >{DropdownButton} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
            <DropdownMenu className="dropup-content">
              <DropdownItem href="#">{Link1}</DropdownItem>
              <DropdownItem href="#">{Link1}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDropUp;