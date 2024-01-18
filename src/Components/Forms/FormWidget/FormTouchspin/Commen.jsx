import React, { Fragment, useState } from 'react';
import { Input, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupText, ButtonDropdown } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Action, AnotherAction, Header } from '../../../../Constant';

const Commen = (props) => {
    const [toggle, setToggle] = useState(false);
    const Minus = () => {
        if(props.val > 0){
            if (props.decimal) {
                props.setVal(props.val - 0.25);
            } else if (props.step) {
                props.setVal(props.val - 10);
            } else {
                props.setVal(props.val - 1);
            }
        }
    };
    const Addition = () => {
        if (props.decimal) {
            props.setVal(props.val + 0.25);
        } else if (props.step) {
            props.setVal(props.val + 10);
        } else {
            props.setVal(props.val + 1);
        }
    };
    return (
        <Fragment>            
            {props.vertical
                ?       
                    <fieldset>
                        <div className="touchspin-vertical-tab">
                            <div className="input-group bootstrap-touchspin">
                                <Input className="touchspin-vertical left-radius ms-0 form-control touchspin text-center" type="number" name="quantity" 
                                onChange={()=>{}} value={props.val} style={{ display: 'block' }} />                                
                                <span className="input-group-btn-vertical">
                                    <Btn attrBtn={{ color: 'primary btn-square', className: 'btn-square bootstrap-touchspin-up', onClick: ()=>{ Addition()} }}>
                                    <i className="fa fa-angle-up"></i></Btn>                                    
                                    <Btn attrBtn={{ color: 'primary', className: 'btn-square bootstrap-touchspin-down', onClick: ()=>{Minus()} }}><i className="fa fa-angle-down"></i></Btn>
                                </span>
                            </div>
                        </div>
                    </fieldset>       
                :
                <div className="input-group bootstrap-touchspin">
                    <InputGroup>
                        <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick:()=> {Minus()} }}><i className="fa fa-minus"></i>
                        </Btn>
                        {props.pre &&
                            <InputGroupText>
                                {props.pre}
                            </InputGroupText>
                        }
                        <Input className="touchspin text-center" type="text" name="quantity" onChange={()=>{}}
                            style={{ display: 'block' }} value={props.val}/>
                        {props.post && <InputGroupText addontype="append">{props.post}</InputGroupText>}

                        <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: ()=>{Addition()} }}>
                            <i className="fa fa-plus"></i>
                        </Btn>
                        {props.show &&
                            <ButtonDropdown isOpen={toggle} toggle={() => setToggle(!toggle)}>
                                <DropdownToggle caret>
                                    Action
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        {Header}
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        {Action}
                                    </DropdownItem>
                                    <DropdownItem>
                                        {AnotherAction}
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        {AnotherAction}
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        }
                    </InputGroup>
                </div>}
        </Fragment >
    );
};
export default Commen;