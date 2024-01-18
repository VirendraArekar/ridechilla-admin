import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import SizingCard from './SizingCard';
import StatusIndicatorCard from './StatusIndicatorCard';
import ShapeCard from './ShapeCard';
import InitialsCard from './InitialsCard';
import GroupCard from './GroupCard';
import { Breadcrumbs } from '../../../AbstractElements';
import Ratiocard from './Ratiocard';

const Avatars = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Avatars" parent="Ui Kits" title="Avatars" />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <SizingCard />
            <StatusIndicatorCard />
            <InitialsCard />
            <ShapeCard />
            <Ratiocard/>
            <GroupCard />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Avatars;