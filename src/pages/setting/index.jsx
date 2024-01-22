import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getSetting, updateSetting } from '../../redux/features/settingSlice';
import { validation } from '../../utility/helper';


export default function add() {
  const location = useLocation();
  const setting  = useSelector((state) => ({ ...state.settings.setting }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        dispatch(getSetting('65ad9915e3a30b4538444fdc'))
  },[])

  const [data, setData] = useState({
    appName : '',
    image : '',
  })

 useEffect(() => {
    if(setting?.data?.appName){
        setData((prevState) => ({
            ...prevState,
            appName: setting?.data?.appName ?? '',
            image: setting.data.appLogo
         }));
    }
 },[setting?.data])

 const [dataError, setDataError] = useState({
    appName : '',
    image: ''
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        appName : '',
        image:''
    })

    var errors = {
        appName : '',
        image: ''
    }
    let finalError = false
    if(!validation('App Name', data.appName, 'required')?.valid){
        errors.appName = validation('App Name', data.appName, 'required')?.error;
        finalError = true
    }
 
    setDataError(errors);
    if(!finalError){
        let formData = new FormData();
        formData.append('appName', data.appName);
        formData.append('image', data.image);

        dispatch(updateSetting({id: '65ad9915e3a30b4538444fdc', updatedData: formData, toast, navigate}))
    }
 }

 const changeInput = (name , value) => {
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }


 const imageUpload = (e) => {
    setData((prevState) => ({
      ...prevState,
      image: e.target.files[0]
    }))
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
                                    <Label htmlFor="exampleFormControlInput1">{'App Name'}</Label>
                                    <Input className="form-control" type="text"  name="appName" 
                                     placeholder="Enter app name" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.appName}/>
                                    {
                                        dataError.appName != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.appName}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup className="m-0">
                                    <Label>{'Description'}</Label>
                                    <Input type="file" className="form-control" name="description" onChange={imageUpload}/>
                                    {
                                        dataError.description != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.description}
                                        </span>
                                    }
                                    <img src={typeof data.image === 'object' ? URL.createObjectURL(data.image) : data.image} className=' my-2' style={{height : 120}} />
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
