import React, { Fragment } from 'react'
import { ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import { AnotherAction, Button, Dropdown, Makevertical, Vertical } from '../../../Constant'
import HeaderCard from '../../Common/Component/HeaderCard'

const VerticalBtnGroup = () => {
  return (
    <Fragment>
         <Col lg="6">
            <Card className="height-equal" style={{minHeight:'411px'}}>
                <HeaderCard title={Vertical} span1={Makevertical} />
                <CardBody className="btn-group-wrapper">
                    <ButtonGroup vertical >
                        <Btn attrBtn={{ color: 'primary', type: 'button' }} >{Button}</Btn>
                        <Btn attrBtn={{ color: 'secondary', type: 'button', className: 'b-r-0' }}>{Button}</Btn>
                        <UncontrolledDropdown className='btn-group'>
                            <DropdownToggle color='success' caret>{Dropdown}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>{AnotherAction}</DropdownItem>
                                <DropdownItem >{AnotherAction}</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>                        
                        <Btn attrBtn={{ color: 'info', type: 'button', className: 'b-r-0' }} >{Button}</Btn>
                        <Btn attrBtn={{ color: 'warning', type: 'button', className: 'b-r-0' }} >{Button}</Btn>
                        <UncontrolledDropdown className='btn-group'>
                            <DropdownToggle color='danger' caret>{Dropdown}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>{AnotherAction}</DropdownItem>
                                <DropdownItem>{AnotherAction}</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className='btn-group'>
                            <DropdownToggle color='light' caret>{Dropdown}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>{AnotherAction}</DropdownItem>
                                <DropdownItem>{AnotherAction}</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ButtonGroup>
                </CardBody>
            </Card>
        </Col>
    </Fragment>
  )
}
export default VerticalBtnGroup