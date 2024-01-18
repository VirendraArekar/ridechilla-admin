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
import { createNotification, getNotification, updateNotification } from '../../redux/features/notificationSlice';
import { getUsers } from '../../redux/features/userSlice';
import { formatPostDate } from '../../utility/helper';

export default function add() {
  const location = useLocation();
  const notification  = useSelector((state) => ({ ...state.notifications.notification }));
  const users  = useSelector((state) => ({ ...state.users.users }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.noteId){
        dispatch(getNotification(location?.state?.noteId))
     }
     dispatch(getUsers())
  },[])

  const [data, setData] = useState({
    user : {
        title : '',
        value : ''
    },
    notification : '',
    priority : {label : 'Low', value : 1},
    readIt : false,
  })

 useEffect(() => {
    if(notification?.data?.notification){
        let updateUse = {label : notification?.data?.user?.name ?? '' , value : notification?.data?.user?.id ?? ''} ?? ''
        setData((prevState) => ({
            ...prevState,
            user: updateUse,
            notification : notification?.data?.notification ?? '',
            priority : notification?.data?.priority ?? 1,
            readIt : notification?.data?.readId ?? false,
         }));
    }
 },[notification?.data])

 const [dataError, setDataError] = useState({
    user : '',
    notification : '',
    priority : '',
    readIt : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        user : '',
        notification : '',
        priority : '',
        readIt : '',
    })

    var errors = {
        user : '',
        notification : '',
        priority : '',
        readIt : '',
    }

    let finalError = false

    if(!validation('User', data.user.value, 'required')?.valid){
        errors.user = validation('User', data.user.value, 'required')?.error;
        finalError = true
    }
    if(!validation('Notification', data.notification, 'required')?.valid){
        errors.notification = validation('Notification', data.notification, 'required')?.error;
        finalError = true
    }
    
    setDataError(errors);

    if(!finalError){
        let finalData = {
            ...data,
            user : data.user.value,
            priority : data.priority.value
        }

        if(location?.state?.noteId){
            dispatch(updateNotification({id: location?.state?.noteId, updatedData: finalData, toast, navigate}))
        }
        else{
            dispatch(createNotification({data: finalData, navigate, toast }))
        }
    }
 }


 const renderUsers = () => {
    let finalUsers = [];
    for(let i = 0 ; i < users?.results?.length; i++){
       let obj = {label : users.results[i].name, value : users.results[i].id};
       finalUsers.push(obj);
    }
    return finalUsers;
}


const priorityOptions = [
    {
        'label' : 'Low',
        'value' : 1
    },
    {
        'label' : 'Medium',
        'value' : 2
    },
    {
        'label' : 'High',
        'value' : 3
    }
]

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
                <HeaderCard title={`Add Notification`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
                            {console.log('DATA ----------------------', data)}
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
                                        dataError.user != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.user}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            
                            <Col>
                            <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect7">{'Priority'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.priority}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="priority"
                                        onChange={(selectedOption) => {
                                            setData((prevState) => ({
                                                ...prevState,
                                                priority: selectedOption,
                                             }));
                                        }} 
                                        options={priorityOptions ?? []}
                                    />
                                    {
                                        dataError.priority != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.priority}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                               <FormGroup>
                                    <Label htmlFor="exampleFormControlInput23">{'Notification'}</Label>
                                    <Input className="form-control" type="textarea" name="notification" placeholder="Enter notification text" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.notification}/>
                                    {
                                        dataError.notification != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.notification}
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
