import React from 'react';
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Action, AnotherAction, PrimaryButton, RoundedDropdown, SeparatedLink, SomethingElseHere } from '../../../../Constant';
import CommonDropDown from '../Common/CommonDropDown';
import { RoundedData } from '../../../../Data/Ui-kit/Data';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { Btn } from '../../../../AbstractElements';

const Rounded = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={RoundedDropdown} />
        <CardBody className="dropdown-basic rounded-dropdown">
          <Dropdown>
            <ButtonGroup className="mb-0">
              <Btn attrbtn={{ color: 'primary dropbtn', className: 'btn-round' }}>{PrimaryButton}<span><i className="icofont icofont-arrow-down"></i></span></Btn>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href="#">{Action}</DropdownItem>
                <DropdownItem href="#">{AnotherAction}</DropdownItem>
                <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
                <DropdownItem href="#">{SeparatedLink}</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {RoundedData.map((items) =>
            <CommonDropDown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Rounded;