import React from 'react';
import { Col } from 'reactstrap';
import { BadgeColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const BadgeColorCard = () => {
  return (
    <Col xl="6" md="6">
      <CommonHeaderClass title={BadgeColor}>{`.badge-primary {
          background-color: #3e5fce;
          }
          .badge-secondary {
          background-color: #f73164;
          }
          .badge-success {
          background-color: #51bb25;
          }
          .badge-danger {
          background-color: #dc3545;
          }
          .badge-info {
          background-color: #a927f9;
          }
          .badge-light {
          background-color: #f4f4f4;
          }
          .badge-dark {
          background-color: #898989;
          }
          .badge-warning {
          background-color: #f8d62b;
          }
        `}
      </CommonHeaderClass>
    </Col>

  );
};

export default BadgeColorCard;