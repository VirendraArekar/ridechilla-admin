import React, { Fragment } from 'react'
import { ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import { Action, AnotherAction, Dropdown, Header, Nesting } from '../../../Constant'
import HeaderCard from '../../Common/Component/HeaderCard'

const NestingButton = () => {
  return (
    <Fragment>
        <Col lg={6}>
            <Card className="height-equal" style={{minHeight:'411px'}}>
                <HeaderCard title={Nesting} span1="Make nesting buttons" />
                <CardBody className="btn-group-wrapper nesting-dropdown">
                    <div className="m-b-30">
                        <ButtonGroup>
                            <Btn attrBtn={{ color: 'primary' }} ><i className="fa fa-bold"></i></Btn>
                            <Btn attrBtn={{ color: 'secondary' }}><i className="fa fa fa-italic"></i></Btn>
                            <UncontrolledDropdown>
                                <DropdownToggle color='light' caret>{Dropdown}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>{Header}</DropdownItem>
                                    <DropdownItem disabled>{Action}</DropdownItem>
                                    <DropdownItem>{AnotherAction}</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>{AnotherAction}</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>
                    </div>
                    <div className="m-b-30">
                        <ButtonGroup>
                            <Btn attrBtn={{ color: 'primary' }} ><i className="fa fa-bold"></i></Btn>
                            <Btn attrBtn={{ color: 'secondary' }} ><i className="fa fa fa-italic"></i></Btn>
                            <Btn attrBtn={{ color: 'success' }} ><i className="fa fa-file-image-o"></i></Btn>
                            <Btn attrBtn={{ color: 'info' }} ><i className="fa fa-paperclip"></i></Btn>
                        </ButtonGroup>
                    </div>
                    <div className="m-b-30">
                        <ButtonGroup>
                            <Btn attrBtn={{ color: 'primary', size: 'lg' }}  ><i className="fa fa-bold"></i></Btn>
                            <Btn attrBtn={{ color: 'secondary', size: 'lg' }} ><i className="fa fa fa-italic"></i></Btn>
                            <Btn attrBtn={{ color: 'success', size: 'lg' }} ><i className="fa fa-file-image-o"></i></Btn>
                            <Btn attrBtn={{ color: 'info', size: 'lg' }} ><i className="fa fa-paperclip"></i></Btn>
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Fragment>
  )
}
export default NestingButton