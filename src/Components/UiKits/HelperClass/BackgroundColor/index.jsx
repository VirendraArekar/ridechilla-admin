import React from 'react';
import { Col } from 'reactstrap';
import { BackgroundColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const BackgroundColorCard = () => {
  return (
    <Col xl="6" md="6">
      <CommonHeaderClass title={BackgroundColor}>{`.bg-primary {
          background-color: #3e5fce !important;
          color: #fff;
          }
          .bg-secondary {
          background-color: #f73164 !important;
          color: #fff;
          }
          .bg-success {
          background-color: #51bb25 !important;
          color: #fff;
          }
          .bg-danger {
          background-color: #dc3545 !important;
          color: #fff;
          }
          .bg-info {
          background-color: #a927f9 !important;
          color: #fff;
          }
          .bg-light {
          background-color: #f4f4f4 !important;
          color: #fff;
          }
          .bg-dark {
          background-color: #898989 !important;
          color: #fff;
          }
          .bg-warning {
          background-color: #f8d62b !important;
          color: #fff;
          }
        `}
      </CommonHeaderClass>
    </Col>
  );
};

export default BackgroundColorCard;