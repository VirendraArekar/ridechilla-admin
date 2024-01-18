import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H3 } from '../../../AbstractElements';
import { AllCloseAccordion, BasicAccordionpara, BasicAccordiontext, card, CollapsibleGroupItem, Usingthe } from '../../../Constant';

const AllClose = () => {
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [1, 2, 3, 4, 5];
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{AllCloseAccordion}</H3>
            <span>{Usingthe} <a href="#javascript">{card}</a> {BasicAccordiontext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion">              
              {data.map((accordian, i) =>
                <Card key={i}>
                  <CardHeader>
                    <H3 attrH3={{ className: 'mb-0' }} >
                      <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link ps-0', color: 'default', onClick: () => toggle(accordian) }} >
                        {CollapsibleGroupItem}<span className="digits">{accordian}</span>
                      </Btn>
                    </H3>
                  </CardHeader>
                  <Collapse isOpen={isOpen === accordian}>
                    <CardBody>
                      {BasicAccordionpara}
                    </CardBody>
                  </Collapse>
                </Card>
              )}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default AllClose;