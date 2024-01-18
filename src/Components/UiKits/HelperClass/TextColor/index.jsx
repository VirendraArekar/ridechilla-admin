import React from 'react';
import { Col } from 'reactstrap';
import { TextColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const TextColorCard = () => {
  return (
    <Col xl="6" md="6">
      <CommonHeaderClass title={TextColor}>{`.font-primary {
          color: #3e5fce !important;
          }
          .font-secondary {
          color: #f73164 !important;
          }
          .font-success {
          color: #51bb25 !important;
          }
          .font-danger {
          color: #dc3545 !important;
          }
          .font-info {
          color: #a927f9 !important;
          }
          .font-light {
          color: #f4f4f4 !important;
          }
          .font-dark {
          color: #898989 !important;
          }
          .font-warning {
          color: #f8d62b !important;
          }
        `}
      </CommonHeaderClass>
    </Col>

  );
};

export default TextColorCard;