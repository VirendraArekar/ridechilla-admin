import React, { Fragment, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Form, FormGroup, Row } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Add, Cancel, ClientName, EndingDate, Priority, ProjectRate, ProjectSize, ProjectTitle, ProjectType, StartingDate,  } from '../../../../Constant';
import ProjectContext from '../../../../_helper/Project';
import EnterSomeDetailsClass from './EnterSomeDetails';
import UploadProjectFileClass from './UploadProjectFile';
import Maintitle from './Maintitle';
import MainType from './MainType';
import MainPriority from './MainPriority';
import MainDate from './MainDate';

const MainList = () => {
   const Navigate = useNavigate();
  const {addNewProject} = useContext(ProjectContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const AddProject = (data) => {
    if (data !== '') {
      addNewProject(data);
      Navigate(`${process.env.PUBLIC_URL}/app/project/project-list`);
    } else {
      console.log(errors,'errors');
      errors.showMessages();
    }
  };   
  return (
    <Fragment>
        <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
            <Row>
                <Maintitle register={register} errors={errors} ProjectTitle={ProjectTitle} />
            </Row>
            <Row>
                <Maintitle register={register} errors={errors}  ClientName={ClientName}/>
            </Row>
            <Row>
                <Col sm='4'>
                    <MainType register={register} errors={errors} ProjectRate={ProjectRate} />
                </Col>
                <Col sm='4'>
                    <MainType register={register} ProjectType={ProjectType}  />
                </Col>
                <MainPriority register={register} Priority={Priority} />
            </Row>
            <Row>
                <MainPriority register={register} ProjectSize={ProjectSize}/>
                <Col sm='4'>
                    <MainDate register={register} StartingDate={StartingDate} />
                </Col>
                <Col sm='4'>
                    <MainDate register={register} EndingDate={EndingDate} />
                </Col>
            </Row>
            <Row>
                <EnterSomeDetailsClass register={register} errors={errors} />
            </Row>
            <Row>
                <UploadProjectFileClass register={register} errors={errors} />
            </Row>
            <Row>
                <Col>
                    <FormGroup className="text-end">
                    <Btn attrBtn={{ type:'submit', color: 'success', className: 'me-3' }} >{Add}</Btn>
                    <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                        <Btn attrBtn={{ color: 'danger' }} >{Cancel}</Btn>
                    </Link>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    </Fragment>
  )
}

export default MainList