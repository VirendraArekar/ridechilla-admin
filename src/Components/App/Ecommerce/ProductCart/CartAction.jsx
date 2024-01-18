import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { Apply, CheckOut, ContinueShopping, TotalPrice } from '../../../../Constant'
import { getallCardTotal } from '../../../../Services/Ecommerce.service'

const CartAction = ({cart}) => {
  return (
    <Fragment>
        <tr>
            <td colSpan="4">
                <div className="input-group">
                    <Input className="form-control" type="text" placeholder="Enter coupan code" /><a className="btn btn-primary text-white" href="#javascript">{Apply}</a>
                </div>
            </td>
            <td className="total-amount"><H4 attrH4={{ className: 'm-0 text-end' }}><span className="f-w-600">{TotalPrice} :</span></H4>
            </td>
            <td><span>${getallCardTotal(cart)}</span></td>
        </tr>
        <tr>
            <td className="text-end" colSpan="5"><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link></td>
            <td><Link className="btn btn-success cart-btn-transform" to={`${process.env.PUBLIC_URL}/app/ecommerce/checkout`}>{CheckOut}</Link></td>
        </tr>
    </Fragment>
  )
}

export default CartAction