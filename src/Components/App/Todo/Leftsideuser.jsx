import React, { Fragment, useContext, useState } from 'react'
import { Card, CardBody, Media } from 'reactstrap'
import { H6, P, Image, UL, LI, Btn } from '../../../AbstractElements'
import { AllTask, Completed, InProcess, MarkJecno, MARKJENCOEMAIL, Pending, ToDoList } from '../../../Constant'
import Img from '../../../assets/images/user/user.png';
import { Activity, Cast, CheckCircle, FilePlus, Trash } from 'react-feather';
import TodoContext from '../../../_helper/Todo';


const Leftsideuser = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  const { allTodos, setShowTodos } = useContext(TodoContext);
  return (
    <Fragment>
      <div className="md-sidebar email-sidebar email-wrap bookmark-wrap">
        <a className="btn btn-primary md-sidebar-toggle" href="#" onClick={OnHandelClick}>ToDo Filter</a>
        <div className={`md-sidebar-aside email-left-aside ${IsOpen ? 'open' : ''}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <Media className='d-flex'>
                  <div className="d-flex-size-email">
                    <Image attrImage={{ className: 'me-3 img-40 rounded-circle', src: `${Img}`, alt: '' }} />
                  </div>
                  <Media className='flex-grow-1'>
                    <H6 attrH6={{ className: 'f-w-600' }} >{MarkJecno}</H6>
                    <P>{MARKJENCOEMAIL}</P>
                  </Media>
                </Media>
                <UL attrUL={{ className: 'main-menu simple-list nav' }}>
                  <LI attrLI={{ className: 'nav-item' }} >
                    <Btn attrBtn={{ color: 'primary', className: 'btn-block btn-mail' }} >
                      <CheckCircle className='me-2' />{ToDoList}
                    </Btn>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#" onClick={() => { setShowTodos(allTodos) }}>
                      <span className='iconbg badge-light-primary'><FilePlus /></span>
                      <span className="title ms-2">{AllTask}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#" onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "Done")) }}>
                      <span className='iconbg badge-light-success'><CheckCircle /></span>
                      <span className="title ms-2">{Completed}</span>
                      <span className='badge badge-success'>{allTodos.filter((data) => data.badge === "Done").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#" onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "Pending")) }}>
                      <span className='iconbg badge-light-danger'><Cast /></span>
                      <span className="title ms-2">{Pending}</span>
                      <span className='badge badge-danger'>{allTodos.filter((data) => data.badge === "Pending").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#" onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "In Progress")) }}>
                      <span className='iconbg badge-light-info'><Activity /></span>
                      <span className="title ms-2"> {InProcess}</span>
                      <span className='badge badge-primary'>{allTodos.filter((data) => data.badge === "In Progress").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href="#">
                      <span className='iconbg badge-light-danger'><Trash /></span>
                      <span className="title ms-2">Trash</span>
                    </a>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Fragment>
  )
}

export default Leftsideuser