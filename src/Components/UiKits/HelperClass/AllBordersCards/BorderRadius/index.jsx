import React from 'react';
import { Col } from 'reactstrap';
import { BorderRadius } from '../../../../../Constant';
import FontStyleCard from '../../AllFontsCards/FontStyle';
import FontWeightCard from '../../AllFontsCards/FontWeight';
import CommonHeaderClass from '../../Common/CommonHeaderClass';
import FloatCard from '../../Float';
import OverflowCard from '../../Overflow';

const BorderRadiusCard = () => {
  return (
    <Col xl="6" md="6">
      <CommonHeaderClass title={BorderRadius}>{`.b-r-0 {
            border-radius: 0px !important;
            }
            .b-r-1 {
            border-radius: 1px !important;
            }
            .b-r-2 {
            border-radius: 2px !important;
            }
            .b-r-3 {
            border-radius: 3px !important;
            }
            .b-r-4 {
            border-radius: 4px !important;
            }
            .b-r-5 {
            border-radius: 5px !important;
            }
            .b-r-6 {
            border-radius: 6px !important;
            }
            .b-r-7 {
            border-radius: 7px !important;
            }
            .b-r-8 {
            border-radius: 8px !important;
            }
            .b-r-9 {
            border-radius: 9px !important;
            }
            .b-r-10 {
            border-radius: 10px !important;
            }
      `}</CommonHeaderClass>
      <FontWeightCard/>
      <FontStyleCard/>
      <FloatCard/>
      <OverflowCard/>
    </Col>

  );
};

export default BorderRadiusCard;