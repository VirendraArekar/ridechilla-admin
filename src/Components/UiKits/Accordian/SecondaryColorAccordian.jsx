import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H3} from '../../../AbstractElements';
import { Add, bgstar, CollapsibleGroupItem, ColorAccordion, ColorPara, Colorparatext } from '../../../Constant';

const SecondaryColorAccordian = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [1, 2, 3];
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{ColorAccordion}</H3>
            <span>{Add} <code>{bgstar}</code> {Colorparatext}</span>
          </CardHeader>
          <CardBody>
            <div className="default-according" id="accordion1">              
              {data.map((accordian, i) =>
                <Card key={i}>
                  <CardHeader className="bg-secondary">
                    <H3 attrH3={{ className: 'mb-0' }} >
                      <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link ps-0 text-white', color: 'default', onClick: () => toggle(accordian) }} >
                        {CollapsibleGroupItem}<span className="digits">{accordian}</span>
                      </Btn>
                    </H3>
                  </CardHeader>
                  <Collapse isOpen={isOpen === accordian}>
                    <CardBody>
                      {ColorPara}
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

export default SecondaryColorAccordian;