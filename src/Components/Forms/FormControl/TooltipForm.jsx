import React, { useState, Fragment } from 'react';
import { Btn } from '../../../AbstractElements';
import { FirstName, LastName, Username, State, City, Zip, SubmitForm, ZipError, StateError, CityError, UsernameError, LastNameError, FirstNameError } from '../../../Constant'
import { useForm } from 'react-hook-form'
import { Col, Form, Label, InputGroup, InputGroupText, Row } from 'reactstrap'

const TooltipForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Form className={`needs-validation tooltip-validation ${validateClass ? 'validateClass' : ''}`} noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>{FirstName}</Label>
            <input className="form-control mb-1" name="firstname" type="text" placeholder="First name" {...register('firstname',{ required: true })} />
            <span className={`${errors.firstname && 'bg-danger p-2 rounded'}`}>{errors.firstname && FirstNameError}</span>
          </Col>
          <Col md="4 mb-3">
            <Label>{LastName}</Label>
            <input className="form-control mb-1" name="lastname" type="text" placeholder="Last name" {...register('lastname',{ required: true })} />
            <span className={`${errors.lastname && 'bg-danger p-2 rounded'}`}>{errors.lastname && LastNameError}</span>
          </Col>
          <Col md="4 mb-3">
            <Label>{Username}</Label>
            <InputGroup>
              <InputGroupText className='mb-1'>{"@"}</InputGroupText>
              <input className="form-control mb-1" name="userName" type="text" placeholder="username" aria-describedby="inputGroupPrepend" {...register('username',{ required: true })} />
            </InputGroup>
              <span className={`${errors.username && 'bg-danger p-2 rounded'}`}>{errors.username && UsernameError}</span>
          </Col>
        </Row>
        <Row className='3'>
          <Col md="6 mb-3">
            <Label>{City}</Label>
            <input className="form-control mb-1" name="city" type="text" placeholder="City" {...register('city',{ required: true })} />
            <span className={`${errors.city && 'bg-danger p-2 rounded'}`}>{errors.city && CityError}</span>
          </Col>
          <Col md="3 mb-3">
            <Label>{State}</Label>
            <input className="form-control mb-1" name="state" type="text" placeholder="State" {...register('state',{ required: true })} />
            <span className={`${errors.state && 'bg-danger p-2 rounded'}`}>{errors.state && StateError}</span>
          </Col>
          <Col md="3 mb-3">
            <Label>{Zip}</Label>
            <input className="form-control mb-1" name="zip" type="text" placeholder="Zip" {...register('zip',{ required: true })} />
            <span className={`${errors.zip && 'bg-danger p-2 rounded'}`}>{errors.zip && ZipError}</span>
          </Col>
        </Row>
        <Btn attrBtn={{ color: "primary", type: "submit", onClick:() => setValidateClass(!validateClass) }}>{SubmitForm}</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;