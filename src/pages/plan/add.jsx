import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import './add'
import DatePicker from "react-datepicker";
import {formatAMPM, formatFinalDate, validation} from '../../utility/helper'
import { Left } from '../../Constant';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { P } from '../../AbstractElements';
import {createPlan, getPlan, getPlans, updatePlan } from '../../redux/features/planSlice';
import { formatPostDate } from '../../utility/helper';
import { SubTitle } from 'chart.js';

export default function add() {
  const location = useLocation();
  const plan  = useSelector((state) => ({ ...state.plans.plan }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.planId){
        dispatch(getPlan(location?.state?.planId))
     }
  },[])

  const [data, setData] = useState({
    plan : '',
    type: null,
    chat: false,
    audioCall: false,
    videoCall: false,
    liveSession: false,
    startDate : new Date(),
    endDate : new Date(),
    description : '',
  })

 useEffect(() => {
    if(plan?.data?.plan){
        setData((prevState) => ({
            ...prevState,
            plan: plan?.data?.plan ?? '',
            description: plan?.data?.description ?? '',
            type : {label : plan.data.type, value: plan.data.type},
            chat: plan?.data?.chat ?? false,
            audioCall: plan?.data?.audioCall ?? false,
            videoCall: plan?.data?.videoCall ?? false,
            liveSession: plan?.data?.liveSession ?? false,
            image: plan?.data?.banner ?? '',
            startDate : new Date(plan?.data?.startDate) ?? '',
            endDate : new Date(plan?.data?.endDate) ?? '',
            description : plan?.data?.description ?? ''
         }));
    }
 },[plan?.data])

 const [dataError, setDataError] = useState({
    plan : '',
    description : '',
    type: '',
    image: null,
    chat : '',
    audioCall:'',
    videoCall: '',
    liveSession: '',
    startDate : '',
    endDate : '',
    description : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        plan : '',
        description : '',
        image: null,
        chat : '',
        type:'',
        audioCall:'',
        videoCall: '',
        liveSession: '',
        startDate : '',
        endDate : '',
        description : '',
    })

    var errors = {
        plan : '',
        type :'',
        image: null,
        description : '',
        chat : '',
        audioCall:'',
        videoCall: '',
        liveSession: '',
        startDate : '',
        endDate : '',
        description : '',
    }

    let finalError = false

    if(!validation('Type', data.type, 'required')?.valid){
      errors.type = validation('Type', data.type, 'required')?.error;
      finalError = true
  }

    if(!validation('Plan', data.plan, 'required')?.valid){
        errors.plan = validation('Plan', data.plan, 'required')?.error;
        finalError = true
    }
    if(!validation('Start Date', data.startDate, 'date')?.valid){
        errors.startDate = validation('Start Date', data.startDate, 'required')?.error;
        finalError = true
    }
    if(!validation('End Date', data.endDate, 'date')?.valid){
        errors.endDate = validation('End Time', data.endDate, 'required')?.error;
        finalError = true
    }

    
    setDataError(errors);

    // if(!finalError){
        let formData = new FormData();
        formData.append('plan', data.plan)
        formData.append('type', data.type.value);
        formData.append('description', data.description);
        formData.append('chat', data.chat);
        formData.append('audioCall', data.audioCall);
        formData.append('videoCall', data.videoCall);
        formData.append('liveSession', data.liveSession);
        if(typeof data.image === 'object'){
          formData.append('image',data.image);
        }
       
        formData.append('startDate', formatFinalDate(data.startDate));
        formData.append('endDate', formatFinalDate(data.endDate));

        // let finalData = {
        //     name : data.name,
        //     title : data.title,
        //     user : data.user.value,
        //     eventDateTime : formatFinalDate(data.eventDateTime),
        //     eventStartTime : formatFinalDate(data.eventStartTime),
        //     eventEndTime : formatFinalDate(data.eventEndTime),
        //     description : data.description,
        // }

        if(location?.state?.planId){
            dispatch(updatePlan({id: location?.state?.planId, updatedData: formData, toast, navigate}))
        }
        else{
            dispatch(createPlan({data: formData, navigate, toast }))
        }
    // }
 }

 const changeInput = (name , value) => {
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }

 const setDate = (date) => {
    setData((prevState) => ({
       ...prevState,
       eventDateTime: date,
    }));
 }


const uploadImage = (e) => {
   setData((prevState) => ({
    ...prevState,
    image : e.target.files[0]
   }))
}

const checkHandler = (e, name) => {
    const {checked} = e.target;
    setData((prevState) => ({
        ...prevState,
        [name] : checked
    }))
}

const getPlans = () => {
  return [
    {label : 'Monthly', value : 'Monthly'},
    {label : 'Quarterly', value: 'Quarterly'},
    {label: 'Half Yearly', value: 'Half Yearly'},
    {label : 'Yearly', value: 'Yearly'}
  ]
}

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add Plan`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Plan'}</Label>
                                    <Input className="form-control" type="text"  name="plan" 
                                     placeholder="Enter plan" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.plan}/>
                                    {
                                        dataError.plan != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.plan}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect7">{'Type'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.user}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="type"
                                        onChange={(selectedOption) => {
                                            setData((prevState) => ({
                                                ...prevState,
                                                type: selectedOption,
                                             }));
                                        }} 
                                        options={ getPlans() ?? []}
                                    />
                                    {
                                        dataError.type != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.type}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                           
                            <Col>
                                <FormGroup className='align-item-center align-content-center'>
                                    <Label htmlFor="exampleFormControlInput2">{'Chat'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.chat} onChange={(e) => checkHandler(e, 'chat')}/>
                                            <span className={'switch-state bg-primary'}></span>
                                        </Label>
                                    </Media>
                                    {
                                        dataError.chat != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.chat}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className='align-item-center align-content-center'>
                                    <Label htmlFor="exampleFormControlInput2">{'Audio Call'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.audioCall} onChange={(e) => checkHandler(e, 'audioCall')}/>
                                            <span className={'switch-state bg-primary'}></span>
                                        </Label>
                                    </Media>
                                    {
                                        dataError.audioCall != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.audioCall}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className='align-item-center align-content-center'>
                                    <Label htmlFor="exampleFormControlInput2">{'Video Call'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.videoCall} onChange={(e) => checkHandler(e, 'videoCall')}/>
                                            <span className={'switch-state bg-primary'}></span>
                                        </Label>
                                    </Media>
                                    {
                                        dataError.videoCall != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.videoCall}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className='align-item-center align-content-center'>
                                    <Label htmlFor="exampleFormControlInput2">{'Live Session'}</Label>
                                    <Media body className={`flex-grow-1 text-start icon-state switch-outline`}>
                                        <Label className="switch">
                                            <Input type="checkbox" checked={data.liveSession} onChange={(e) => checkHandler(e, 'liveSession')}/>
                                            <span className={'switch-state bg-primary'}></span>
                                        </Label>
                                    </Media>
                                    {
                                        dataError.liveSession != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.liveSession}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'Start Date'}</Label>
                                    <br></br>
                                    <DatePicker className="w-100 form-control digits" name='startDate'  selected={data.startDate} onChange={setDate} monthsShown={true} showYearDropdown={true}/> 
                                    <br></br>
                                    {
                                        dataError.startDate != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.startDate}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'End Date'}</Label>
                                    <br></br>
                                    <DatePicker className="w-100 form-control digits" name='endDate'  selected={data.endDate} onChange={setDate} monthsShown={true} showYearDropdown={true}/> 
                                    <br></br>
                                    {
                                        dataError.endDate != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.endDate}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Banner'}</Label>
                                    <Input className="form-control" type="file"  name="banner" 
                                     placeholder="Enter sub title" onChange={uploadImage} accept="image/*"/>
                                    {
                                        dataError.image != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.image}
                                    </span>
                                    }

                                    {
                                        data.image !== '' &&
                                        <img src={typeof data.image  === 'object' ? URL.createObjectURL(data.image) : data.image} style={{width : '100%', height : 120}} className='my-2'/>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="m-0">
                                    <Label>{'Description'}</Label>
                                    <Input type="textarea" className="form-control" rows="3" name="description" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.description}/>
                                    {
                                        dataError.description != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.description}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col></Col>
                        </Row>
                        
                      
                    </CardBody>
                    <FooterCard footerClass="text-end" />
                </Form>
            </Card>
        </Fragment>
  )
}
