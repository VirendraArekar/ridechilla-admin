import React from 'react';
import { Col } from 'reactstrap';
import { VerticalAlign } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const VerticalAlignCard = () => {
  return (
    <Col lg="4" md="6">
      <CommonHeaderClass title={VerticalAlign}>{`.baseline {
          vertical-align: baseline;
          }
          .sub {
          vertical-align: sub;
          }
          .super {
          vertical-align: super;
          }
          .top {
          vertical-align: top;
          }
          .text-top {
          vertical-align: text-top;
          }
          .middle {
          vertical-align: middle;
          }
          .bottom {
          vertical-align: bottom;
          }
          .text-bottom {
          vertical-align: text-bottom;
          }
          .initial {
          vertical-align: initial;
          }
          .inherit {
          vertical-align: inherit;
          }
        `}
      </CommonHeaderClass>
    </Col>
  );
};

export default VerticalAlignCard;