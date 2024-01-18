import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Action, AnotherAction, BasicColorDropdown, SeparatedLink, SomethingElseHere } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import { BasicColorData } from '../../../Data/Ui-kit/Data';
import CommonDropDown from './Common/CommonDropDown';
import { Btn } from '../../../AbstractElements';

const BasicColor = () => {
  return (
    <Col sm="12" lg="7">
      <Card>
        <HeaderCard title={BasicColorDropdown} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <div className="btn-group mb-0">
              <Btn attrBtn={{ color: 'primary dropbtn', className: 'btn-square' }}>{Action}<span><i className="icofont icofont-arrow-down"></i></span></Btn>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href="#">{Action}</DropdownItem>
                <DropdownItem href="#">{AnotherAction}</DropdownItem>
                <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#">{SeparatedLink}</DropdownItem>
              </DropdownMenu>
            </div>
          </Dropdown>
          {BasicColorData.map((items) =>
            <CommonDropDown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColor;