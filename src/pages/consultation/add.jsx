import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import './add'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import {formatAMPM, formatFinalDate, validation} from '../../utility/helper'
import { Left } from '../../Constant';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesByState, getCountries, getStatesByCountry } from '../../redux/features/countrySlice';
import Select from 'react-select';
import { P } from '../../AbstractElements';
import { createEvent, getEvent, updateEvent } from '../../redux/features/eventSlice';
import { getUsers } from '../../redux/features/userSlice';
import { formatPostDate } from '../../utility/helper';

export default function add() {
  const location = useLocation();
  const event  = useSelector((state) => ({ ...state.events.event }));
  const users  = useSelector((state) => ({ ...state.users.users }));
  const [updatedUsers, setUpdatedUsers] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.eventId){
        dispatch(getEvent(location?.state?.eventId))
     }
     dispatch(getUsers())
  },[])

  const [data, setData] = useState({
    user : {
        title : '',
        value : ''
    },
    name : '',
    title : '',
    eventDateTime : new Date(),
    eventStartTime : new Date(),
    eventEndTime : new Date(),
    description : '',
  })

 useEffect(() => {
    if(event?.data?.name){
        let updateUse = {label : event?.data?.user?.name ?? '' , value : event?.data?.user?.id ?? ''} ?? ''
        setData((prevState) => ({
            ...prevState,
            name: event?.data?.name ?? '',
            title: event?.data?.title ?? '',
            user: updateUse,
            // eventDateTime : new Date(users?.results?.eventDateTime) ?? '',
            // eventStartTime : new Date(users?.results?.eventStartTime) ?? '',
            // eventEndTime : new Date(users?.results?.eventEndTime) ?? '',
            description : event?.data?.description ?? ''
         }));
    }
 },[event?.data])

 const [dataError, setDataError] = useState({
    user : '',
    name : '',
    title : '',
    eventDateTime : '',
    eventStartTime : '',
    eventEndTime : '',
    description : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        user : '',
        title : '',
        name :'',
        description : '',
        eventDateTime : '',
        eventStartTime : '',
        eventEndTime : ''
    })

    var errors = {
        user : '',  
        title : '',
        name :'',
        description : '',
        eventDateTime : '',
        eventStartTime : '',
        eventEndTime : ''
    }

    let finalError = false

    if(!validation('User', data.user?.value, 'required')?.valid){
        errors.user = validation('User', data.user?.value, 'required')?.error;
        finalError = true
    }
    if(!validation('Name', data.name, 'required')?.valid){
        errors.name = validation('Name', data.name, 'required')?.error;
        finalError = true
    }
    if(!validation('Title', data.title, 'required')?.valid){
        errors.title = validation('Title', data.title, 'required')?.error;
        finalError = true
    }
    if(!validation('Event Date', data.eventDateTime, 'date')?.valid){
        errors.eventDateTime = validation('Event Date', data.eventDateTime, 'required')?.error;
        finalError = true
    }
    if(!validation('Start Time', data.eventStartTime, 'date')?.valid){
        errors.eventStartTime = validation('Start Time', data.eventStartTime, 'required')?.error;
        finalError = true
    }
    if(!validation('End Time', data.eventDateTime, 'date')?.valid){
        errors.eventEndTime = validation('Event TIme', data.eventDateTime, 'required')?.error;
        finalError = true
    }
    if(!validation('Description', data.description, 'required')?.valid){
        errors.description = validation('Description', data.description, 'required')?.error;
        finalError = true
    }
    
    setDataError(errors);

    if(!finalError){
        let finalData = {
            name : data.name,
            title : data.title,
            user : data.user.value,
            eventDateTime : formatFinalDate(data.eventDateTime),
            eventStartTime : formatFinalDate(data.eventStartTime),
            eventEndTime : formatFinalDate(data.eventEndTime),
            description : data.description,
        }

        if(location?.state?.eventId){
            dispatch(updateEvent({id: location?.state?.eventId, updatedData: finalData, toast, navigate}))
        }
        else{
            dispatch(createEvent({data: finalData, navigate, toast }))
        }
    }
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

 const setTime = (name,time) => {
   setData((prevState) => ({
      ...prevState,
      [name]: time,
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

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add Event`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
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
                            {/* <Col>
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
                            </Col> */}
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'Date Of Birth'}</Label>
                                    <br></br>
                                    <DatePicker className="w-100 form-control digits" name='dob'  selected={data.eventDateTime} onChange={setDate} monthsShown={true} showYearDropdown={true}/> 
                                    <br></br>
                                    {
                                        dataError.eventDateTime != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.eventDateTime}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'Event Start Time'}</Label>
                                    <br></br>
                                    <DatePicker 
                                    className="w-100 form-control digits" 
                                    name='eventStartTime'  
                                    selected={data.eventStartTime} 
                                    onChange={(time) => setTime('eventStartTime', time)} 
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"/>
                                    <br></br>
                                    {
                                        dataError.eventStartTime != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.eventStartTime}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'Event End Time'}</Label>
                                    <br></br>
                                    <DatePicker 
                                    className="w-100 form-control digits" 
                                    name='eventEndTime'  
                                    selected={data.eventEndTime} 
                                    onChange={(time) => setTime('eventEndTime', time)} 
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"/>
                                    <br></br>
                                    {
                                        dataError.eventEndTime != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.eventEndTime}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
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
