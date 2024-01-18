import React from 'react';
import { Fragment } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements';
import { ThisisaHeading } from '../../../../Constant';

const HeadingTag = () =>{
    return(
      <Fragment>
        <H1>{`${ThisisaHeading} 1`}</H1>
        <H2>{`${ThisisaHeading} 2`}</H2>
        <H3>{`${ThisisaHeading} 3`}</H3>
        <H4>{`${ThisisaHeading} 4`}</H4>
        <H5>{`${ThisisaHeading} 5`}</H5>
        <H6>{`${ThisisaHeading} 6`}</H6>
      </Fragment>
    );
};

export default HeadingTag;