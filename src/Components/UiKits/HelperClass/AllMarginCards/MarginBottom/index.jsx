import React from 'react';
import { Col } from 'reactstrap';
import { MarginBottom } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const MarginBottomCard = () => {
  return (
    <Col lg="4" md="6">
      <CommonHeaderClass title={MarginBottom}>{`.m-b-0 {
          margin-bottom: 0px !important;
          }
          .m-b-5 {
          margin-bottom: 5px !important;
          }
          .m-b-10 {
          margin-bottom: 10px !important;
          }
          .m-b-15 {
          margin-bottom: 15px !important;
          }
          .m-b-20 {
          margin-bottom: 20px !important;
          }
          .m-b-25 {
          margin-bottom: 25px !important;
          }
          .m-b-30 {
          margin-bottom: 30px !important;
          }
          .m-b-35 {
          margin-bottom: 35px !important;
          }
          .m-b-40 {
          margin-bottom: 40px !important;
          }
          .m-b-45 {
          margin-bottom: 45px !important;
          }
          .m-b-50 {
          margin-bottom: 50px !important;
          }
        `}
      </CommonHeaderClass>
    </Col>

  );
};

export default MarginBottomCard;