import React, { Fragment } from 'react';
import { Input, Label } from 'reactstrap';
import { OutlineColors } from './OptionDatas';

const FullColored = () => {
    return (
        <Fragment>
            <div className="mb-2">
                <Label className="col-form-label">Primary Select</Label>
                <Input className="form-control-primary-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">Secondary Select</Label>
                <Input className="form-control-secondary-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">Success Select</Label>
                <Input className="form-control-success-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">Info Select</Label>
                <Input className="form-control-info-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">Warning Select</Label>
                <Input className="form-control-warning-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div className="mb-2">
                <Label className="col-form-label">Danger Select</Label>
                <Input className="form-control-danger-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
            <div>
                <Label className="col-form-label">Inverse Select</Label>
                <Input className="form-control-inverse-fill btn-square" name="select" type="select">
                    {
                        OutlineColors.map((item,index)=>{
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                    }                    
                </Input>
            </div>
        </Fragment>
    );
};
export default FullColored;