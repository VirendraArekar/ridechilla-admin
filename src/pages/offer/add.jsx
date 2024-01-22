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
import { createEvent, createOffer, getOffer, updateOffer } from '../../redux/features/offerSlice';
import { getUsers } from '../../redux/features/userSlice';
import { formatPostDate } from '../../utility/helper';
import { SubTitle } from 'chart.js';

export default function add() {
  const location = useLocation();
  const offer  = useSelector((state) => ({ ...state.offers.offer }));
  const users  = useSelector((state) => ({ ...state.users.users }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.offerId){
        console.log('IN OFFER ID', location?.state?.offerId)
        dispatch(getOffer(location?.state?.offerId))
     }
     dispatch(getUsers())
  },[])

  const [data, setData] = useState({
    user : {
        title : '',
        value : ''
    },
    title : '',
    SubTitle: '',
    chat: false,
    audioCall: false,
    videoCall: false,
    liveSession: false,
    startDate : new Date(),
    endDate : new Date(),
    description : '',
  })

 useEffect(() => {
    if(offer?.data?.title){
        console.log('OFFER DATA ----------', offer.data)
        let updateUse = {label : offer?.data?.user?.name ?? '' , value : offer?.data?.user?.id ?? ''} ?? ''
        setData((prevState) => ({
            ...prevState,
            title: offer?.data?.title ?? '',
            subTitle: offer?.data?.subTitle ?? '',
            description: offer?.data?.description ?? '',
            chat: offer?.data?.chat ?? false,
            audioCall: offer?.data?.audioCall ?? false,
            videoCall: offer?.data?.videoCall ?? false,
            liveSession: offer?.data?.liveSession ?? false,
            image: offer?.data?.offerImage ?? '',
            user: updateUse,
            startDate : new Date(offer?.data?.startDate) ?? '',
            endDate : new Date(offer?.data?.endDate) ?? '',
            description : offer?.data?.description ?? ''
         }));
    }
 },[offer?.data])

 const [dataError, setDataError] = useState({
    user : '',
    title : '',
    subTitle : '',
    description : '',
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
        user : '',
        title : '',
        subTitle : '',
        description : '',
        image: null,
        chat : '',
        audioCall:'',
        videoCall: '',
        liveSession: '',
        startDate : '',
        endDate : '',
        description : '',
    })

    var errors = {
        user : '',
        title : '',
        subTitle : '',
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

    if(!validation('User', data.user?.value, 'required')?.valid){
        errors.user = validation('User', data.user?.value, 'required')?.error;
        finalError = true
    }
    if(!validation('Title', data.title, 'required')?.valid){
        errors.title = validation('Title', data.title, 'required')?.error;
        finalError = true
    }
    if(!validation('Sub Title', data.subTitle, 'required')?.valid){
        errors.title = validation('Sub Title', data.subTitle, 'required')?.error;
        finalError = true
    }
    if(!validation('Start Date', data.startDate, 'date')?.valid){
        errors.eventDateTime = validation('Start Date', data.startDate, 'required')?.error;
        finalError = true
    }
    if(!validation('End Date', data.endDate, 'date')?.valid){
        errors.eventStartTime = validation('End Time', data.endDate, 'required')?.error;
        finalError = true
    }

    
    setDataError(errors);

    // if(!finalError){
        let formData = new FormData();
        formData.append('user',data.user?.value);
        formData.append('title', data.title);
        formData.append('subTitle', data.subTitle);
        formData.append('description', data.description);
        formData.append('chat', data.chat);
        formData.append('audioCall', data.audioCall);
        formData.append('videoCall', data.videoCall);
        formData.append('liveSession', data.liveSession);
        formData.append('image',data.image);
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

        if(location?.state?.offerId){
            dispatch(updateOffer({id: location?.state?.offerId, updatedData: formData, toast, navigate}))
        }
        else{
            dispatch(createOffer({data: formData, navigate, toast }))
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


 const renderUsers = () => {
    let finalUsers = [];
    for(let i = 0 ; i < users?.results?.length; i++){
       let obj = {label : users.results[i].name, value : users.results[i].id};
       finalUsers.push(obj);
    }
    return finalUsers;
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

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add Event`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            {console.log('OFFER ---------------------', offer)}
                            {console.log('DATA --------------------', data)}
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect7">{'User'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.user}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="user"
                                        onChange={(selectedOption) => {
                                            console.log('ON CHANGE-------', selectedOption)
                                            setData((prevState) => ({
                                                ...prevState,
                                                user: selectedOption,
                                             }));
                                        }} 
                                        options={renderUsers() ?? []}
                                    />
                                    {
                                        dataError.country != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.country}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Title'}</Label>
                                    <Input className="form-control" type="text"  name="title" 
                                     placeholder="Enter title" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.title}/>
                                    {
                                        dataError.title != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.title}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'SubTitle'}</Label>
                                    <Input className="form-control" type="text"  name="subTitle" 
                                     placeholder="Enter sub title" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.subTitle}/>
                                    {
                                        dataError.subTitle != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.subTitle}
                                    </span>
                                    }
                                    
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
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
                        </Row>
                        <Row>
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
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput1">{'Banner'}</Label>
                                    <Input className="form-control" type="file"  name="banner" 
                                     placeholder="Enter sub title" onChange={uploadImage} />
                                    {
                                        dataError.image != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                        {dataError.image}
                                    </span>
                                    }

                                    {
                                        data.image !== '' &&
                                        <img src={data.image} style={{width : '100%', height : 120}} className='my-2'/>
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
                           
                        </Row>
                        
                      
                    </CardBody>
                    <FooterCard footerClass="text-end" />
                </Form>
            </Card>
        </Fragment>
  )
}
