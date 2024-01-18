import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import PagiNations from './PagiNations';
import PaginationActiveDisabled from './PaginationActiveDisabled';
import PaginationAlignment from './PaginationAlignment';
import PaginationWithIcons from './PaginationWithIcons';
import PaginationSizingClass from './PaginationSizing';
import PaginationColorClass from './PaginationColor';


const Paginations = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Pagination" parent="Bonus Ui" title="Pagination" />
      <Container fluid={true}>
        <Row>
          <PagiNations />
          <PaginationWithIcons />
          <PaginationActiveDisabled />
          <PaginationAlignment />
          <PaginationSizingClass />
          <PaginationColorClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Paginations;