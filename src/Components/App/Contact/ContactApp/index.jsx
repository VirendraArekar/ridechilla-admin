import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import LeftContact from "./Left-contact";

const Contact = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Contacts" parent="Apps" title="Contacts" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <LeftContact />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default Contact;
