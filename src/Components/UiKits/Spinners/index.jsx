import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { Breadcrumbs, H4,H3,Spinner } from '../../../AbstractElements';
import { LoaderStyle } from '../../../Constant';
import { Data } from '../../../Data/Ui-kit/Data';

const Spinners = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Spinners" parent="Ui Kits" title="Spinners" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H3>{LoaderStyle}</H3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <H4 attrH4={{ className: 'sub-title mb-0 text-center' }} >{'Loader 1'}</H4>
                    <div className="loader-box">
                      <Spinner attrSpinner={{ className: 'loader-1' }} />
                    </div>
                  </Col>
                  {Data.map((spinner) =>
                    <Col md="3" key={spinner.id}>
                      <H4 attrH4={{ className: 'sub-title mb-0 text-center' }} >{spinner.heading}</H4>
                      <div className="loader-box">
                        <Spinner attrSpinner={{ className: spinner.spinnerClass }} />
                      </div>
                  </Col>
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Spinners;