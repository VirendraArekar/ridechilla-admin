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
import { createLive, getLive, updateLive } from '../../redux/features/liveSlice';
import { getUsers } from '../../redux/features/userSlice';
import { formatPostDate } from '../../utility/helper';

export default function add() {
  const location = useLocation();
  const event  = useSelector((state) => ({ ...state.events.event }));
  const users  = useSelector((state) => ({ ...state.users.users }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.liveId){
        dispatch(getLive(location?.state?.liveId))
     }
     dispatch(getUsers())
  },[])

  const [data, setData] = useState({
    user : {
        title : '',
        value : ''
    },
    // customers : '',
    joiningTime : new Date(),
    leaveTime : new Date(),
  })

 useEffect(() => {
    if(event?.data?.joiningTime){
        let updateUse = {label : event?.data?.user?.name ?? '' , value : event?.data?.user?.id ?? ''} ?? ''
        setData((prevState) => ({
            ...prevState,
            user: updateUse,
            joiningTime : new Date(users?.results?.joiningTime) ?? '',
            leaveTime : users?.results?.joiningTime ?  new Date(users?.results?.joiningTime) : '',
         }));
    }
 },[event?.data])

 const [dataError, setDataError] = useState({
    user : '',
    joiningTime : '',
    leaveTime : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        user : '',
        joiningTime : '',
        leaveTime : '',
    })

    var errors = {
        user : '',
        joiningTime : '',
        leaveTime : '',
    }

    let finalError = false

    if(!validation('User', data.user?.value, 'required')?.valid){
        errors.user = validation('User', data.user?.value, 'required')?.error;
        finalError = true
    }
    if(!validation('joiningTime', data.name, 'Joining Time')?.valid){
        errors.name = validation('joiningTime', data.name, 'Joining Time')?.error;
        finalError = true
    }
    
    setDataError(errors);

    if(!finalError){
        let finalData = {
            user : data.user.value,
            joiningTime : formatFinalDate(data.joiningTime)
        }

        if(data.leaveTime){
            finalData.leaveTime = formatFinalDate(data.leaveTime);
        }

        if(location?.state?.liveId){
            dispatch(updateLive({id: location?.state?.liveId, updatedData: finalData, toast, navigate}))
        }
        else{
            dispatch(createLive({data: finalData, navigate, toast }))
        }
    }
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
                <HeaderCard title={`Add Live Consultation`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
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
                                    <Label htmlFor="exampleFormControlInput6">{'Start Time'}</Label>
                                    <br></br>
                                    <DatePicker 
                                    className="w-100 form-control digits" 
                                    name='eventStartTime'  
                                    selected={data.joiningTime} 
                                    onChange={(time) => setTime('joiningTime', time)} 
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"/>
                                    <br></br>
                                    {
                                        dataError.joiningTime != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.joiningTime}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput6">{'End Time'}</Label>
                                    <br></br>
                                    <DatePicker 
                                    className="w-100 form-control digits" 
                                    name='eventEndTime'  
                                    selected={data.leaveTime} 
                                    onChange={(time) => setTime('leaveTime', time)} 
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"/>
                                    <br></br>
                                    {
                                        dataError.leaveTime != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.leaveTime}
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
