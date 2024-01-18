import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { DropdownSplitButton, Link1, PrimaryButton } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { SplitData } from '../../../../Data/Ui-kit/Data';
import SplitButtonDropdown from './SplitButtonDropdown';

const SplitButton = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={DropdownSplitButton} />
        <CardBody className="dropdown-basic">
          <div className="btn-group">
            <Btn attrBtn={{ color: 'primary' }} >{PrimaryButton}</Btn>
            <Dropdown className="separated-btn">
              <Btn attrBtn={{ color: 'primary' }} ><i className="icofont icofont-arrow-down"></i></Btn>
              <DropdownMenu className="dropdown-content digits">
                <DropdownItem href="#">{Link1}</DropdownItem>
                <DropdownItem href="#">{Link1}</DropdownItem>
                <DropdownItem href="#">{Link1}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {SplitData.map((items) =>
            <SplitButtonDropdown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButton;