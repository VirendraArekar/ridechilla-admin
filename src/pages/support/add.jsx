import React, { Fragment, useEffect, useState } from 'react'
import {Card, Form, CardBody, Row, Col, FormGroup, Label, Input, Media} from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSupport, getSupport, updateSupport } from '../../redux/features/supportSlice';
import { validation } from '../../utility/helper';


export default function add() {
  const location = useLocation();
  const support  = useSelector((state) => ({ ...state.supports.support }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(location?.state?.supportId){
        dispatch(getSupport(location?.state?.supportId))
     }
  },[])

  const [data, setData] = useState({
    title : '',
    description : '',
  })

 useEffect(() => {
    if(support?.data?.title){
        setData((prevState) => ({
            ...prevState,
            title: support?.data?.title ?? '',
            description : support?.data?.description ?? ''
         }));
    }
 },[support?.data])

 const [dataError, setDataError] = useState({
    title : '',
    description : '',
 })

 const onSubmit = (e) => {
    e.preventDefault();
    setDataError({
        title : '',
        description : '',
    })

    var errors = {
        title : '',
        description : '',
    }
    let finalError = false
    if(!validation('Title', data.title, 'required')?.valid){
        errors.title = validation('Title', data.title, 'required')?.error;
        finalError = true
    }
    if(!validation('Description', data.description, 'required')?.valid){
        errors.title = validation('Description', data.description, 'required')?.error;
        finalError = true
    }  
    setDataError(errors);
    if(!finalError){
        let finalData = {
            title : data.title,
            description : data.description,
        }

        if(location?.state?.supportId){
            dispatch(updateSupport({id: location?.state?.supportId, updatedData: finalData, toast, navigate}))
        }
        else{
            dispatch(createSupport({data: finalData, navigate, toast }))
        }
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
                <HeaderCard title={`Add Support`} />
                <Form className="form theme-form" onSubmit={onSubmit} autoComplete="off">
                    <CardBody>
                        <Row>

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
