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
import { createService, getService, updateService } from '../../redux/features/serviceSlice';
import { SwitchSizingData } from '../../Data/FormWidgets';


export default function add() {
  const location = useLocation();
  const  service  = useSelector((state) => ({ ...state.services.service }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.serviceId){
        dispatch(getService(location?.state?.serviceId))
     }
  },[])

  const [data, setData] = useState({
    name : '',
    status : true
  })

  useEffect(() => {
    if(service?.data?.name){
        setData((prevState) => ({
            ...prevState,
            name: service?.data?.name ?? '',
            status: service?.data?.status
         }));
    }
  },[service?.data])

  const [dataError, setDataError] = useState({
    name : '',
    status : true
  })



 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        name : '',
        status : ''
    })

    var errors = {
        name : '',
        status : ''
    }

    let finalError = false

    if(!validation('Name', data.name, 'required')?.valid){
        errors.name = validation('Name', data.name, 'required')?.error;
        finalError = true
    }
    if(!validation('Status', data.status, 'status')?.valid){
        errors.email = validation('Status', data.status, 'status')?.error;
        finalError = true
    }
    
    setDataError(errors);
    
    if(!finalError){
        if(location?.state?.serviceId){
            let finalData = {
                id : location?.state?.serviceId ?? '',
                updatedData : data,
                toast,
                navigate
            }
            dispatch(updateService(finalData))
        }
        else{
            let finalData = {
                data,
                navigate,
                toast,
            }
            dispatch(createService(finalData,(err) => {
                console.log('ERROR --------------', err)
            }))
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
        status: e.target.checked,
     }));
 }

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add Service`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Name'}</Label>
                                    <Input className="form-control" type="text"  name="name" 
                                     placeholder="Enter name" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.name} />
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
                                    <Label htmlFor="exampleFormControlInput2">{'Status'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.status} onChange={checkHandler}/>
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
