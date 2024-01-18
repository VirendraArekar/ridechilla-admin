import React from 'react';
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const RoundedDropdowns = ({ item }) => {
  return (
    <Dropdown>
      <ButtonGroup className="mb-0">
        <Btn attrBtn={{ color: 'primary dropbtn', className: 'btn-round' }}>{item.btnText}<span><i className="icofont icofont-arrow-down"></i></span></Btn>
        <DropdownMenu className="dropdown-content">
          {item.items.map((itm) =>
            <DropdownItem href="#" key={itm.id}>{itm.item}</DropdownItem>
          )}
        </DropdownMenu>
      </ButtonGroup>
    </Dropdown>
  );
};

export default RoundedDropdowns;