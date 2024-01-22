import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getFcmSetting, updateFcmSetting } from '../../redux/features/fcmSettingSlice';
import { validation } from '../../utility/helper';


export default function add() {
  const location = useLocation();
  const fcmSetting  = useSelector((state) => ({ ...state.fcmSettings.fcmSetting }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        dispatch(getFcmSetting('65adba29db40f93a3c560eb2'))
  },[])

  const [data, setData] = useState({
    clientKey : '',
    serverKey : '',
  })

 useEffect(() => {
    if(fcmSetting?.data?.clientKey){
        setData((prevState) => ({
            ...prevState,
            clientKey : fcmSetting?.data?.clientKey ?? '',
            serverKey : fcmSetting?.data?.serverKey ?? '',
         }));
    }
 },[fcmSetting?.data])

 const [dataError, setDataError] = useState({
    clientKey : '',
    serverKey : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        clientKey : '',
        serverKey : '',
    })

    var errors = {
        clientKey : '',
        serverKey : '',
    }

    let finalError = false
    if(!validation('Client Key', data.clientKey, 'required')?.valid){
        errors.clientKey = validation('Client Key', data.clientKey, 'required')?.error;
        finalError = true
    }
    if(!validation('Secret Key', data.serverKey, 'required')?.valid){
        errors.clientSecret = validation('Secret Key', data.serverKey, 'required')?.error;
        finalError = true
    }
 
    setDataError(errors);
    if(!finalError){
        dispatch(updateFcmSetting({id: '65adba29db40f93a3c560eb2', updatedData: data, toast, navigate}))
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
                <HeaderCard title={`Firebase Push Notification  Setting`} />
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
                                    <Label htmlFor="exampleFormControlInput1">{'Server Key'}</Label>
                                    <Input className="form-control" type="text"  name="serverKey" 
                                     placeholder="Enter client secret" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.serverKey}/>
                                    {
                                        dataError.serverKey != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.serverKey}
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
