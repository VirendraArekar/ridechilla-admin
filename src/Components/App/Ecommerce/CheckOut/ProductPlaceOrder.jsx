import React, { Fragment, useContext } from 'react';
import { H2, LI, UL, Image } from '../../../../AbstractElements';
import { getallCardTotal,getCartTotal } from '../../../../Services/Ecommerce.service';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import paypal from '../../../../assets/images/checkout/paypal.png';
import { Col, Input, Label, Row } from 'reactstrap';
import { CashOnDelivery, CheckPayments, ContinueShopping, Option1, Option2, PayPal, Product, Shipping, Total } from '../../../../Constant';
import { useNavigate } from 'react-router';

const ProductPlaceOrder = () => {
    const Navigate = useNavigate();
    const { cart } = useContext(CartContext);
    const handleNavigate=()=>{
        Navigate(`${process.env.PUBLIC_URL}/app/ecommerce/product`);
    }
    return (
        <Fragment>
            <Col xl="6" sm="12">
                <div className="checkout-details">
                    <div className="order-box">
                        <div className="title-box">
                            <div className="checkbox-title">
                                <H2>{Product}</H2><span>{Total}</span>
                            </div>
                        </div>
                        <UL attrUL={{ className: 'simple-list qty' }} >
                            {
                                cart && cart.map((item) => {
                                    return (
                                            <LI key={item.id} attrLI={{key:item.id}}>{item.name} x {item.qty}<span>${getCartTotal(item)}</span></LI>
                                    );
                                })
                            }
                        </UL>
                        <UL attrUL={{ className: 'simple-list sub-total' }}>
                            <LI>Subtotal <span className="count">$ {getallCardTotal(cart)}</span></LI>
                            <LI attrLI={{ className: 'shipping-class' }}>{Shipping}
                                <div className="shopping-checkout-option">
                                    <Label className="d-block" htmlFor="chk-ani">
                                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />{Option1}
                                    </Label>
                                    <Label className="d-block" htmlFor="chk-ani1">
                                        <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{Option2}
                                    </Label>
                                </div>
                            </LI>
                        </UL>
                        <UL attrUL={{ className: 'simple-list sub-total total' }}>
                            <LI>{Total}<span className="count">$ {getallCardTotal(cart)}</span></LI>
                        </UL>
                        <div className="animate-chk">
                            <Row>
                                <Col>
                                    <Label className="d-block" htmlFor="edo-ani">
                                        <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" data-original-title="" title="" />{CheckPayments}
                                    </Label>
                                    <Label className="d-block" htmlFor="edo-ani1">
                                        <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" data-original-title="" title="" />{CashOnDelivery}
                                    </Label>
                                    <Label className="d-block" htmlFor="edo-ani2">
                                        <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" data-original-title="" />{PayPal}<Image attrImage={{ className: 'img-paypal img-fluid', src: `${paypal}`, alt: '' }} />
                                    </Label>
                                </Col>
                            </Row>
                        </div>
                        <div className='mt-2 d-flex justify-content-between'>
                            <a className='btn btn-primary text-white me-2 text-capitalize' onClick={(e)=>{e.preventDefault();handleNavigate()}}>{ContinueShopping}</a>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment >
    );
};
export default ProductPlaceOrder;