import { CartTableHeader} from '../../../../Constant';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import ProductContext from '../../../../_helper/Ecommerce/Product';
import { Btn,Image } from '../../../../AbstractElements';
import EmptyCart from './EmptyCart';
import { Table, Row, Input } from 'reactstrap';
import { XCircle } from 'react-feather';
import React, { Fragment, useContext } from 'react';
import CartAction from './CartAction';

const CartData = () => {
    const { symbol } = useContext(ProductContext);
    const { addToCart, cart, decrementQty, removeFromCart } = useContext(CartContext);
    const incrementQty = (product, quantity) => {
        addToCart(product, quantity);
    };
    const decrementQuantity = (id) => {
        decrementQty(id);
    };
    const removefromcart = (item) => {
        removeFromCart(item.id);
    };
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            {cart && cart.length > 0 ? (
                <div>                    
                        <Row>
                            <div className="order-history table-responsive wishlist">
                                <Table className="table-bordered">
                                    <thead>
                                        <tr>
                                            {CartTableHeader.map((items, i) =><th key={i}>{items}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody style={{ borderTop: 'none' }}>
                                        {
                                            cart.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <Image attrImage={{ className: 'img-fluid img-40', src: `${dynamicImage(item.img)}`, alt: '#' }} />
                                                        </td>
                                                        <td><div className="product-name">{item.name}</div></td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <fieldset className='qty-box'>
                                                                <div className="input-group bootstrap-touchspin">
                                                                    <span className="input-group-prepend">
                                                                        <Btn attrBtn={{
                                                                            color: 'primary', className: 'btn btn-primary btn-square bootstrap-touchspin-down',
                                                                            onClick: () => decrementQuantity(item.id)
                                                                        }}><i className="fa fa-minus"></i></Btn>
                                                                    </span>
                                                                    <Input type="text" name="quantity" value={item.qty}
                                                                        readOnly={true} style={{ textAlign: 'center' }}
                                                                        className="form-control input-number" />
                                                                    <span className="input-group-append">
                                                                        <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary btn-square bootstrap-touchspin-up', onClick: () => incrementQty(item, 1) }}> <i className="fa fa-plus"></i></Btn> </span>
                                                                </div>
                                                            </fieldset>
                                                        </td>
                                                        <td><a href='#javascript' onClick={() => removefromcart(item)}><XCircle /></a></td>
                                                        <td>{symbol}{item.price * item.qty}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                        <CartAction cart={cart}/>
                                    </tbody>
                                </Table>
                            </div>
                        </Row>
                </div>
            ) : <EmptyCart />}
        </Fragment>
    );
};
export default CartData;