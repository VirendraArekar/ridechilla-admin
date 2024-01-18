import React from 'react';
import { Float } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const FloatCard = () => {
  return (
    <CommonHeaderClass title={Float}>{`.f-left {
        float: left;
        }
        .f-right {
        float: right;
        }
        .f-none {
        float: none;
        }
      `}
    </CommonHeaderClass>
  );
};

export default FloatCard;