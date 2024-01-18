import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import './add'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import {validation} from '../../utility/helper'
import { Left } from '../../Constant';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { getUser , createUser} from '../../redux/features/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { getCitiesByState, getCountries, getStatesByCountry } from '../../redux/features/countrySlice';
import Select from 'react-select';
import { P } from '../../AbstractElements';


export default function add() {
  const location = useLocation();
  const  user  = useSelector((state) => ({ ...state.user }));
  const  {countries , cities, states, message, loading}  = useSelector((state) => ({ ...state.countries }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
     if(location?.state?.userId){
        dispatch(getUser(location?.state?.userId))
     }
     dispatch(getCountries())
  },[location])
  const [data, setData] = useState({
    name : '',
    email : '',
    password : '',
    role : 'user',
    gender : '',
    dob : null,
    dobTime : null,
    country : '',
    state : '',
    city : '',
    about : '',
    address : '',
    location : '',
    latitude : '',
    longitude : '',
    mobile : '',
    experience : '',
    profileImage : null
  })

  const [dataError, setDataError] = useState({
    name : '',
    email : '',
    password : '',
    role : '',
    gender : '',
    dob : '',
    dobTime : '',
    country : '',
    state : '',
    city : '',
    about : '',
    address : '',
    location : '',
    latitude : '',
    longitude : '',
    mobile : '',
    experience : ''
  })


  const setDate = (date) => {
     setData((prevState) => ({
        ...prevState,
        dob: date,
     }));
  }

  const setTime = (time) => {
    setData((prevState) => ({
       ...prevState,
       dobTime: time,
    }));
 }

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        name : '',
        email : '',
        password : '',
        role : '',
        gender : '',
        dob : '',
        dobTime : '',
        country : '',
        state : '',
        city : '',
        about : '',
        address : '',
        location : '',
        latitude : '',
        longitude : '',
        mobile : '',
        experience : ''
    })

    var errors = {
        name : '',
        email : '',
        password : '',
        role : '',
        gender : '',
        dob : '',
        dobTime : '',
        country : '',
        state : '',
        city : '',
        about : '',
        address : '',
        location : '',
        latitude : '',
        longitude : '',
        mobile : '',
        experience : ''
    }

    let finalError = false

    if(!validation('Name', data.name, 'required')?.valid){
        errors.name = validation('Name', data.name, 'required')?.error;
        finalError = true
    }
    if(!validation('Email', data.email, 'email')?.valid){
        errors.email = validation('Email', data.email, 'email')?.error;
        finalError = true
    }
    if(!validation('Password', data.password, 'password')?.valid){
        errors.password = validation('Password', data.password, 'password')?.error;
        finalError = true
    }
    if(!validation('Role', data.role, 'required')?.valid){
        errors.role = validation('Role', data.role, 'required')?.error;
        finalError = true
    }
    if(!validation('Gender', data.gender, 'required')?.valid){
        errors.gender = validation('Gender', data.gender, 'required')?.error;
        finalError = true
    }
    // if(!validation('Mobile', data.mobile, 'mobile')?.valid){
    //     errors.mobile = validation('Mobile', data.mobile, 'mobile')?.error;
    //     finalError = true
    // }
    // if(!validation('Date of Birth', data.dob, 'date')?.valid){
    //     errors.dob = validation('Date of Birth', data.dob, 'date')?.error;
    //     finalError = true
    // }
    // if(!validation('Time of Birth', data.dobTime, 'time')?.valid){
    //     errors.dobTime = validation('Time of Birth', data.dobTime, 'time')?.error;
    //     finalError = true
    // }
    if(!validation('Country', data.country, 'required')?.valid){
        errors.country = validation('Country', data.country, 'required')?.error;
        finalError = true
    }
    if(!validation('State', data.state, 'required')?.valid){
        errors.state = validation('State', data.state, 'required')?.error;
        finalError = true
    }
    // if(!validation('City', data.city, 'required')?.valid){
    //     errors.city = validation('City', data.city, 'required')?.error;
    //     finalError = true
    // }
    if(!validation('Experience', data.experience, 'required')?.valid){
        errors.experience = validation('Experience', data.experience, 'required')?.error;
        finalError = true
    }
    if(!validation('Location', data.location, 'required')?.valid){
        errors.location = validation('Location', data.location, 'required')?.error;
        finalError = true
    }
    if(!validation('Address', data.address, 'address')?.valid){
        errors.address = validation('Address', data.address, 'address')?.error;
        finalError = true
    }
    if(!validation('About Us', data.about, 'address')?.valid){
        errors.about = validation('about Us', data.about, 'address')?.error;
        finalError = true
    }
    setDataError(errors)

    console.log('ERRORS --------------------', errors)
    console.log('DATA ---------------------', data)
    console.log('FINAL ERROR ---------------------', finalError)
    // if(!finalError){
        console.log('Submit ----------------------------')
        // let formData = new FormData();
        // formData.append('name', data.name);
        // formData.append('email', data.email);
        // formData.append('password', data.password);
        // formData.append('dob', data.dob);
        // formData.append('dobTime', data.dobTime);
        // formData.append('country', data.country.value);
        // formData.append('state', data.state.value);
        // formData.append('city', data.city.value);
        // formData.append('mobile', data.mobile);
        // formData.append('experience', data.experience);
        // formData.append('location', data.location);
        // formData.append('address', data.address);
        // formData.append('about', data.about);

        let formData = data;
        formData.city = data.city?.value;
        formData.state = data.state?.value;
        formData.country = data.country?.value;

        console.log('RESPONSE ----------------------', formData)

        dispatch(createUser(formData, navigate, toast))
    // }
 }

 const changeInput = (name , value) => {
    if(name === 'country'){
        dispatch(getStatesByCountry(value))
    }
    else if(name === 'state'){
        dispatch(getCitiesByState(value))
    }
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }

 const handleFileChange = (e) => {
    let name = e.target.name;
    let value = e.target.files[0]
    setData((prevState) => ({
        ...prevState,
        [name]: value,
     }));
 }

//  const newCountries = () => {
//     let results = [];
//     if(countries && countries?.length){
//         for(let i  = 0 ; i < countries.length; i++){
//             results.push({
//                 label : countries[i].name,
//                 value : countries[i].isoCode
//             })
//         }
//     }

//     return results;
//  }

  return (
    <Fragment>
        <div className="margin-card"></div>
            <Card>
                <HeaderCard title={`Add User`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>
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
                                    <Label htmlFor="exampleFormControlInput2">{'Email'}</Label>
                                    <Input className="form-control" placeholder="name@example.com"  name="email" type="email" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.email} />
                                    {
                                        dataError.email != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.email}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput3">{'Password'}</Label>
                                    <Input className="form-control" type="password" placeholder="Enter password" name="password" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.password}/>
                                    {
                                        dataError.password != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.password}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect4">{'Role'}</Label>
                                    <Input type="select" name="role" className="form-control" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.role}>
                                        <option value={''}>{'Select Role'}</option>
                                        <option value={'user'}>{'User'}</option>
                                        <option value={'consultant'}>{'Consultant'}</option>
                                    </Input>
                                    {
                                        dataError.role != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.role}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect5">{'Gender'}</Label>
                                    <Input type="select" name="gender" className="form-control" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.gender}>
                                        <option value={''}>{'Select Gender'}</option>
                                        <option value={'Male'}>{'Male'}</option>
                                        <option value={'Female'}>{'Female'}</option>
                                        <option value={'Transgender'}>{'Transgender'}</option>
                                    </Input>
                                    {
                                        dataError.gender != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.gender}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput13">{'Mobile'}</Label>
                                    <Input className="form-control" type="numeric" placeholder="Enter mobile" name="mobile" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.mobile}/>
                                    {
                                        dataError.mobile != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.mobile}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="exampleFormControlInput6">{'Date Of Birth'}</Label>
                                            <br></br>
                                            <DatePicker className="w-100 form-control digits" name='dob'  selected={data.dob} onChange={setDate} monthsShown={true} showYearDropdown={true}/> 
                                            <br></br>
                                            {
                                                dataError.dob != '' &&
                                                <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                                    {dataError.dob}
                                                </span>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="exampleFormControlInput6">{'Time Of Birth'}</Label>
                                            <br></br>
                                            <DatePicker 
                                            className="w-100 form-control digits" 
                                            name='dob'  
                                            selected={data.dobTime} 
                                            onChange={setTime} 
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"/>
                                            <br></br>
                                            {
                                                dataError.dobTime != '' &&
                                                <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                                    {dataError.dobTime}
                                                </span>
                                            }
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect7">{'Country'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.country}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="country"
                                        onChange={(selectedOption) => {
                                            setData((prevState) => ({
                                                ...prevState,
                                                country: selectedOption,
                                             }));
                                             dispatch(getStatesByCountry(selectedOption.value))
                                        }} 
                                        options={countries && countries?.length ? countries :  [] }
                                    />
                                 
                                    {/* <Input type="select" name="country" className="form-control" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.country}>
                                        <option value={''}>Select country</option>
                                        {
                                            countries?.length &&
                                            countries?.map((obj, index) => <option value={obj.isoCode} key={index}>{obj.name}</option>)
                                        }
                                    </Input> */}
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
                                    <Label htmlFor="exampleFormControlSelect8">{'State'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.state}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="state"
                                        onChange={(selectedOption) => {
                                            setData((prevState) => ({
                                                ...prevState,
                                                state: selectedOption,
                                             }));
                                             dispatch(getCitiesByState(selectedOption.value))
                                        }} 
                                        options={states && states?.length ? states :  [] }
                                    />
                                    {/* <Input type="select" name="state" className="form-control" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.state}>
                                        <option value={''}>Select state</option>
                                        {
                                            states?.length &&
                                            states?.map((obj, index) => <option key={index} value={obj.isoCode}>{obj.name}</option>)
                                        }
                                    </Input> */}
                                    {
                                        dataError.state != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.state}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlSelect9">{'City'}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={data.city}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        name="city"
                                        onChange={(selectedOption) => {
                                            setData((prevState) => ({
                                                ...prevState,
                                                country: selectedOption,
                                             }));
                                             dispatch(getCitiesByState(selectedOption.value))
                                        }} 
                                        options={cities && cities?.length ? cities :  [] }
                                    />
                                    {/* <Input type="select" name="city" className="form-control" onChange={(e) => changeInput(e.target.name, e.target.value)} defaultValue={data.city}>
                                        <option value={''}>Select city</option>
                                        {
                                            cities?.length &&
                                            cities?.map((obj, index) => <option key={index} value={obj.name}>{obj.name}</option>)
                                        }
                                    </Input> */}
                                    {
                                        dataError.city != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.city}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput23">{'Experience'}</Label>
                                    <Input className="form-control" type="numeric" name="experience" placeholder="Enter experience" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.experience}/>
                                    {
                                        dataError.experience != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.experience}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="exampleFormControlInput33">{'Location'}</Label>
                                    <Input className="form-control" type="text" name="location" placeholder="select location"  onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.location}/>
                                    {
                                        dataError.location != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.location}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="m-0">
                                    <Label>{'Address'}</Label>
                                    <Input type="textarea" className="form-control" rows="3" name="address" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.address}/>
                                    {
                                        dataError.address != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.address}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="m-0">
                                    <Label>{'About us'}</Label>
                                    <Input type="textarea" className="form-control" rows="3" name="about" onChange={(e) => changeInput(e.target.name, e.target.value)} value={data.about}/>
                                    {
                                        dataError.about != '' &&
                                        <span className='text-danger pl-3' style={{fontSize : 12 , marginLeft : 10}}>
                                            {dataError.about}
                                        </span>
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleFile">
                                    File
                                    </Label>
                                    <Input
                                    id="exampleFile"
                                    name="file"
                                    type="file"
                                    label={'choose an image file'}
                                    onChange={handleFileChange}
                                    />
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
