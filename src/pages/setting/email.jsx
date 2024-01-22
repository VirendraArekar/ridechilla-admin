import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getEmailSetting, updateEmailSetting } from '../../redux/features/emailSettingSlice';
import { validation } from '../../utility/helper';


export default function add() {
  const location = useLocation();
  const emailSetting  = useSelector((state) => ({ ...state.emailSettings.emailSetting }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        dispatch(getEmailSetting('65adada9281bea4610ac7e17'))
  },[])

  const [data, setData] = useState({
    smtpHost : '',
    smtpPort : '',
    smtpUsername : '',
    smtpPassword : '',
    emailFrom : ''
  })

 useEffect(() => {
    if(emailSetting?.data?.smtpHost){
        setData((prevState) => ({
            ...prevState,
            smtpHost : emailSetting?.data?.smtpHost ?? '',
            smtpPort : emailSetting?.data?.smtpPort ?? '',
            smtpUsername : emailSetting?.data?.smtpUsername ?? '',
            smtpPassword : emailSetting?.data?.smtpPassword ?? '',
            emailFrom : emailSetting?.data?.emailFrom ?? ''
         }));
    }
 },[emailSetting?.data])

 const [dataError, setDataError] = useState({
    smtpHost : '',
    smtpPort : '',
    smtpUsername : '',
    smtpPassword : '',
    emailFrom : ''
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        smtpHost : '',
        smtpPort : '',
        smtpUsername : '',
        smtpPassword : '',
        emailFrom : ''
    })

    var errors = {
        smtpHost : '',
        smtpPort : '',
        smtpUsername : '',
        smtpPassword : '',
        emailFrom : ''
    }

    let finalError = false
    if(!validation('Host', data.smtpHost, 'required')?.valid){
        errors.smtpHost = validation('Host', data.smtpHost, 'required')?.error;
        finalError = true
    }
    if(!validation('Port', data.smtpPort, 'required')?.valid){
        errors.smtpHost = validation('Port', data.smtpPort, 'required')?.error;
        finalError = true
    }
    if(!validation('Username', data.smtpUsername, 'required')?.valid){
        errors.smtpHost = validation('Username', data.smtpUsername, 'required')?.error;
        finalError = true
    }
    if(!validation('Password', data.smtpPassword, 'required')?.valid){
        errors.smtpHost = validation('Password', data.smtpPassword, 'required')?.error;
        finalError = true
    }
    if(!validation('Email From', data.emailFrom, 'required')?.valid){
        errors.smtpHost = validation('Email From', data.emailFrom, 'required')?.error;
        finalError = true
    }
 
    setDataError(errors);
    if(!finalError){
        dispatch(updateEmailSetting({id: '65adada9281bea4610ac7e17', updatedData: data, toast, navigate}))
    }
 }

 const changeInput = (name , value) => {
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }


  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Setting`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Smtp Host'}</Label>
                                    <Input className="form-control" type="text"  name="smtpHost" 
                                     placeholder="Enter smtp host" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.smtpHost}/>
                                    {
                                        dataError.smtpHost != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.smtpHost}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Smtp Port'}</Label>
                                    <Input className="form-control" type="number"  name="smtpPort" 
                                     placeholder="Enter smtp port" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.smtpPort}/>
                                    {
                                        dataError.smtpPort != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.smtpPort}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Smtp Username'}</Label>
                                    <Input className="form-control" type="text"  name="smtpUsername" 
                                     placeholder="Enter smtp username" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.smtpUsername}/>
                                    {
                                        dataError.smtpUsername != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.smtpUsername}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Smtp Password'}</Label>
                                    <Input className="form-control" type="text"  name="smtpPassword" 
                                     placeholder="Enter smtp password" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.smtpPassword}/>
                                    {
                                        dataError.smtpPassword != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.smtpPassword}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Email From'}</Label>
                                    <Input className="form-control" type="text"  name="emailFrom" 
                                     placeholder="Enter email from" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.emailFrom}/>
                                    {
                                        dataError.emailFrom != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.emailFrom}
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
