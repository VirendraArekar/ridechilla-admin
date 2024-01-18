import AllTabs from './AllTabs';
import ImageTabs from './ImageTabs';
import SearchTabs from './SearchTabs';
import VideoTabs from './VideoTabs';
import { CardBody, CardHeader, FormGroup, Form, Label, Row, Col, Card, Container, InputGroup, TabContent, TabPane } from 'reactstrap';
import React, { Fragment, useCallback, useState } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import { Email } from '../../../Constant';

const SearchResultContain = () => {
    const [activeTab, setActiveTab] = useState('1');
    const callback = useCallback((tab) => {
        setActiveTab(tab);
    }, []);
    return (
      <Fragment>
            <Breadcrumbs mainTitle="Search Website" parent="Search Pages" title="Search Website" />
        <Container fluid={true} className="search-page">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0">
                  <Form className="search-form">
                    <FormGroup className="form--group m-0">
                      <Label className="sr-only">{Email}</Label>
                    </FormGroup>
                    <FormGroup className="form-group m-0">
                      <InputGroup>
                        <span className="input-group-text"><i className="icon-search"></i></span>
                        <input className="form-control-plaintext" type="search" placeholder="Search.." />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </CardHeader>
                <CardBody>
                  <SearchTabs callbackActive={callback} />
                  <TabContent activeTab={activeTab} className="tab-content">
                    <TabPane tabId="1">
                      <AllTabs />
                    </TabPane>
                    <TabPane tabId="2">
                      <ImageTabs />
                    </TabPane>
                    <TabPane tabId="3">
                      <VideoTabs />
                    </TabPane>
                    <TabPane tabId="4">
                    </TabPane>
                    <TabPane tabId="5">
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
export default SearchResultContain;