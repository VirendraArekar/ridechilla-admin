import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { Done, All, Doing, CreateNewProject } from '../../../../Constant';
import { Breadcrumbs } from '../../../../AbstractElements';
import ProjectContext from '../../../../_helper/Project';
import CusClass from '../Project Data/CusClass';

const Project = () => {

  const [activeTab, setActiveTab] = useState('1');
  const { allData } = useContext(ProjectContext);

  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Project List" mainTitle="Project List" />
      <Container fluid={true}>
        <Row className='project-cards'>
          <Col md="12" className="project-list">
            <Card>
              <Row>
                <Col md="6" className='p-0 d-flex'>
                  <Nav tabs className="border-tab" id='top-tab' role='tablist'>
                    <NavItem>
                      <NavLink className={activeTab === '1' ? 'active' : 'text-dark'} onClick={() => setActiveTab('1')}><Target />{All}</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '2' ? 'active' : 'text-dark'} onClick={() => setActiveTab('2')}><Info />{Doing}</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '3' ? 'active' : 'text-dark'} onClick={() => setActiveTab('3')}><CheckCircle />{Done}</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm="6" className='p-0'>
                  <div className="text-end">
                    <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/app/project/new-project`}> 
                      <PlusCircle />{CreateNewProject}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      {allData.map((item) =>
                        <CusClass item={item} key={item.id} />
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      {allData.map(item =>
                      (item.badge === 'Doing' ?
                        <CusClass item={item}key={item.id} />
                        : '')
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      {allData.map(item =>
                      (item.badge === 'Done' ?
                        <CusClass item={item} key={item.id} />
                        : '')
                      )}
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Project;