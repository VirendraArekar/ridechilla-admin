import React from 'react';
import { Col } from 'reactstrap';
import { BorderWidth } from '../../../../../Constant';
import ButtonOutlineCard from '../../AllButtonsCards/ButtonOutline';
import CommonHeaderClass from '../../Common/CommonHeaderClass';
import PositionCard from '../../Position';

const BorderWidthCard = () => {
  return (
    <Col xl="6" md="6">
      <CommonHeaderClass title={BorderWidth}>{`border-1 {
          border-width: 1px !important;
          }
          .border-2 {
          border-width: 2px !important;
          }
          .border-3 {
          border-width: 3px !important;
          }
          .border-4 {
          border-width: 4px !important;
          }
          .border-5 {
          border-width: 5px !important;
          }
          .border-6 {
          border-width: 6px !important;
          }
          .border-7 {
          border-width: 7px !important;
          }
          .border-8 {
          border-width: 8px !important;
          }
          .border-9 {
          border-width: 9px !important;
          }
          .border-10 {
          border-width: 10px !important;
          }
      `}</CommonHeaderClass>
      <PositionCard/>
      <ButtonOutlineCard/>
    </Col>

  );
};

export default BorderWidthCard;