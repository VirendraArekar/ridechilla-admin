import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { UL,LI } from '../../../../AbstractElements'
import { BuyNow } from '../../../../Constant'

const ColorSelector = () => {
  return (
    <Fragment>
        <div className='color-selector'>
            <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                <LI attrLI={{ className: 'white active rounded-0' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-primary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-secondary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-success' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-warning' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-danger rounded-0'}}></LI>&nbsp;
            </UL>
        </div>
        <Link className='btn btn-secondary' to={`${process.env.PUBLIC_URL}/app/ecommerce/checkout`}>
            <i className="fa fa-shopping-cart me-2"></i>{BuyNow}
        </Link> 
    </Fragment>
  )
}

export default ColorSelector