import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TicketList from './TicketList';
import TicketTable from './TicketTable';
import HeaderCard from '../Common/Component/HeaderCard';
import { Apps, SupportTicket, TicketListhead, TicketListspan } from '../../Constant';
import { Breadcrumbs } from '../../AbstractElements';

const SupportTickitContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} title={SupportTicket} />
      <Container fluid={true} className="support-ticket data-tables">
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={TicketListhead} span1={TicketListspan}/>
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SupportTickitContain;
