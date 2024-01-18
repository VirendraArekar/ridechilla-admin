import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import './add'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import {validation} from '../../utility/helper'
import { Left } from '../../Constant';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesByState, getCountries, getStatesByCountry } from '../../redux/features/countrySlice';
import Select from 'react-select';
import { P } from '../../AbstractElements';
import { createRole, getRole, updateRole } from '../../redux/features/roleSlice';
import { SwitchSizingData } from '../../Data/FormWidgets';


export default function add() {
  const location = useLocation();
  const  role  = useSelector((state) => ({ ...state.roles.role }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.roleId){
        dispatch(getRole(location?.state?.roleId))
     }
  },[])

  const [data, setData] = useState({
    name : '',
    active : true
  })

  useEffect(() => {
    if(role?.data?.name){
        setData((prevState) => ({
            ...prevState,
            name: role?.data?.name ?? '',
            active: role?.data?.active
         }));
    }
  },[role?.data])

  const [dataError, setDataError] = useState({
    name : '',
    active : true
  })



 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        name : '',
        active : ''
    })

    var errors = {
        name : '',
        active : ''
    }

    let finalError = false

    if(!validation('Name', data.name, 'required')?.valid){
        errors.name = validation('Name', data.name, 'required')?.error;
        finalError = true
    }
    if(!validation('Active', data.active, 'active')?.valid){
        errors.email = validation('Active', data.active, 'active')?.error;
        finalError = true
    }
    
    setDataError(errors);
    
    if(!finalError){
        data.value = data.name.toLowerCase();
        if(location?.state?.roleId){
            let finalData = {
                id : location?.state?.roleId ?? '',
                updatedData : data,
                toast,
                navigate
            }
            dispatch(updateRole(finalData))
        }
        else{
            let finalData = {
                data,
                navigate,
                toast,
            }
            dispatch(createRole(finalData))
        }
    }
 }

 const changeInput = (name , value) => {
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }

 const checkHandler = (e) => {
    setData((prevState) => ({
        ...prevState,
        active: e.target.checked,
     }));
 }

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add Role`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Name'}</Label>
                                    <Input className="form-control" type="text"  name="name" 
                                     placeholder="Enter name" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.name}/>
                                    {
                                        dataError.name != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.name}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className='align-item-center align-content-center'>
                                    <Label htmlFor="exampleFormControlInput2">{'Active'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.active} onChange={checkHandler}/>
                                            <span className={'switch-state bg-primary'}></span>
                                        </Label>
                                    </Media>
                                    {
                                        dataError.active != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.active}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                           
                        </Row>
                      
                    </CardBody>
                    <FooterCard footerClass="text-end" />
                </Form>
            </Card>
        </Fragment>
  )
}
