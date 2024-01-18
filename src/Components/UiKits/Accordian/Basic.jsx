import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H3 } from '../../../AbstractElements';
import { BasicAccordion, BasicAccordionpara, BasicAccordiontext, card, CollapsibleGroupItem, Usingthe } from '../../../Constant';

const BasicAccordions = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{BasicAccordion}</H3>
            <span>{Usingthe} <a href="#javascript">{card}</a> {BasicAccordiontext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <CardHeader>
                  <H3 attrH3={{ className: 'mb-0' }} >
                    <Btn attrBtn={{ as: Card.Header, className: 'ps-0 btn btn-link', color: 'default', onClick: () => toggle(1) }} >
                      {CollapsibleGroupItem}<span className="digits">1</span>
                    </Btn>
                  </H3>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader>
                  <H3 attrH3={{ className: 'mb-0' }} >
                    <Btn attrBtn={{ as: Card.Header, className: 'ps-0 btn btn-link', color: 'default', onClick: () => toggle(2) }} >
                      {CollapsibleGroupItem}<span className="digits">2</span>
                    </Btn>
                  </H3>
                </CardHeader>
                <Collapse isOpen={isOpen === 2}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader>
                  <H3 attrH3={{ className: 'mb-0' }} >
                    <Btn attrBtn={{ as: Card.Header, className: 'ps-0 btn btn-link', color: 'default', onClick: () => toggle(3) }} >
                      {CollapsibleGroupItem}<span className="digits">3</span>
                    </Btn>
                  </H3>
                </CardHeader>
                <Collapse isOpen={isOpen === 3}>
                  <CardBody>
                    {BasicAccordionpara}
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default BasicAccordions;