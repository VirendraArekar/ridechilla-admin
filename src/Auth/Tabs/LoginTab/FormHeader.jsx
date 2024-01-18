import React, { Fragment } from 'react'
import { H2, P } from '../../../AbstractElements'
import { EmailPassword } from '../../../Constant'

const FormHeader = (props) => {
  const {heading , subHeading = null} = props
  return (
    <Fragment>
      <H2 attrH2={{ className: "text-center" }}>{heading}</H2>
      {
        subHeading && 
        <P attrPara={{ className: 'text-center' }}>{subHeading}</P>
      } 
      
    </Fragment>
  )
}

export default FormHeader