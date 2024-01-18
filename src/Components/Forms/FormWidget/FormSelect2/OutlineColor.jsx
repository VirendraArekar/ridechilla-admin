import React, { Fragment } from 'react';
import { Input, Label } from 'reactstrap';
import { DangerSelect, InfoSelect, InverseSelect, PrimarySelect, SecondarySelect, SuccessSelect, WarningSelect } from '../../../../Constant';
import { OutlineColors } from './OptionDatas';

const OutlineColor = () => {
    return (
        <Fragment>
            <div className="mb-2">
                <Label className="col-form-label">{PrimarySelect}</Label>
                <Input className="form-control-primary btn-square" name="select" type="select">
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
                <Label className="col-form-label">{SecondarySelect}</Label>
                <Input className="form-control-secondary btn-square" name="select" type="select">
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
                <Label className="col-form-label">{SuccessSelect}</Label>
                <Input className="form-control-success btn-square" name="select" type="select">
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
                <Label className="col-form-label">{InfoSelect}</Label>
                <Input className="form-control-info btn-square" name="select" type="select">
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
                <Label className="col-form-label">{WarningSelect}</Label>
                <Input className="form-control-warning btn-square" name="select" type="select">
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
                <Label className="col-form-label">{DangerSelect}</Label>
                <Input className="form-control-danger btn-square" name="select" type="select">
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
                <Label className="col-form-label">{InverseSelect}</Label>
                <Input className="form-control-inverse btn-square" name="select" type="select">
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
export default OutlineColor;