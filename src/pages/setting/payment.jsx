import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPaymentSetting, updatePaymentSetting } from '../../redux/features/paymentSettingSlice';
import { validation } from '../../utility/helper';


export default function add() {
  const location = useLocation();
  const paymentSetting  = useSelector((state) => ({ ...state.paymentSettings.paymentSetting }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        dispatch(getPaymentSetting('65adb63eb4188c3b58dd7908'))
  },[])

  const [data, setData] = useState({
    clientKey : '',
    clientSecret : '',
    vendorEmail : '',
  })

 useEffect(() => {
    if(paymentSetting?.data?.clientKey){
        setData((prevState) => ({
            ...prevState,
            clientKey : paymentSetting?.data?.clientKey ?? '',
            clientSecret : paymentSetting?.data?.clientSecret ?? '',
            vendorEmail : paymentSetting?.data?.vendorEmail ?? '',
         }));
    }
 },[paymentSetting?.data])

 const [dataError, setDataError] = useState({
    clientKey : '',
    clientSecret : '',
    vendorEmail : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        clientKey : '',
        clientSecret : '',
        vendorEmail : '',
    })

    var errors = {
        clientKey : '',
        clientSecret : '',
        vendorEmail : '',
    }

    let finalError = false
    if(!validation('Client Key', data.clientKey, 'required')?.valid){
        errors.clientKey = validation('Client Key', data.clientKey, 'required')?.error;
        finalError = true
    }
    if(!validation('Client Secret', data.clientSecret, 'required')?.valid){
        errors.clientSecret = validation('Client Secret', data.clientSecret, 'required')?.error;
        finalError = true
    }
    if(!validation('Vendor Email', data.vendorEmail, 'required')?.valid){
        errors.vendorEmail = validation('Vendor Email', data.vendorEmail, 'required')?.error;
        finalError = true
    }
 
    setDataError(errors);
    if(!finalError){
        dispatch(updatePaymentSetting({id: '65adb63eb4188c3b58dd7908', updatedData: data, toast, navigate}))
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
                <HeaderCard title={`Payment Setting`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Client Key'}</Label>
                                    <Input className="form-control" type="text"  name="clientKey" 
                                     placeholder="Enter client key" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.clientKey}/>
                                    {
                                        dataError.clientKey != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.clientKey}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Client Secret'}</Label>
                                    <Input className="form-control" type="text"  name="clientSecret" 
                                     placeholder="Enter client secret" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.clientSecret}/>
                                    {
                                        dataError.clientSecret != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.clientSecret}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                           
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Vendor Email'}</Label>
                                    <Input className="form-control" type="text"  name="vendorEmail" 
                                     placeholder="Enter vendor email" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.vendorEmail}/>
                                    {
                                        dataError.vendorEmail != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.vendorEmail}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                               
                            </Col>
                        </Row>
                    </CardBody>
                    <FooterCard footerClass="text-end" />
                </Form>
            </Card>
        </Fragment>
  )
}
