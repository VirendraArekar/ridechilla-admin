import React, { Fragment, useContext } from 'react';
import { P } from '../../../../AbstractElements';
import { Brand, Availability, AddToCart, InStock, Pixelstrap, ABC, Seller, Fabric, Cotton, AddToWishList, FancyShirtPrice, ProductPageDetails, Productdlt } from '../../../../Constant';
import ProductContext from '../../../../_helper/Ecommerce/Product';
import SocialIcons from './SocialIcons';
import StarRatings from './StarRating';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import ColorSelector from './ColorSelector';
import CartContext from '../../../../_helper/Ecommerce/Cart';

const ProductDetails = () => {
    const id = useParams();
    const { productItem, symbol } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const singleItem = productItem;
    const AddProduct = (id) => {
        singleItem.map((item) => {
            if (item.id === id) {
                addToCart(item, 1);
                return true;
            }
            return false;
        })
    }
    return (
        <Fragment>
            <Col xl="5" className="box-col-12 proorder-xl-3 xl-100">
                <Card>
                    <CardBody>
                        <div className="pro-group pt-0 border-0">
                            <StarRatings />
                            <div className="product-price">{FancyShirtPrice}<del>{symbol}{Productdlt}</del></div>
                            <ColorSelector />
                        </div>
                        <div className="pro-group"><P>{ProductPageDetails}</P></div>
                        <div className="pro-group">
                            <Row>
                                <Col md='6'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><b>{Availability} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b></td>
                                                <td className="txt-success">{InStock}</td>
                                            </tr>
                                            <tr>
                                                <td> <b>{Brand}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</b></td>
                                                <td>{Pixelstrap}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                                <Col md='6'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td> <b>{Seller} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                                <td>{ABC}</td>
                                            </tr>
                                            <tr>
                                                <td> <b>{Fabric} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                                <td>{Cotton}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </div><SocialIcons />
                        <div className="pro-group pb-0">
                            <div className="pro-shop">
                                <Link className='btn btn-primary' to={`${process.env.PUBLIC_URL}/app/ecommerce/cart`} onClick={() => { AddProduct(id.id) }} > <i className="fa fa-shopping-basket me-2"></i>{AddToCart}</Link>&nbsp;&nbsp;&nbsp;
                                <Link className='btn btn-danger' to={`${process.env.PUBLIC_URL}/app/ecommerce/wishlist`}> <i className="fa fa-heart me-2"></i>{AddToWishList} </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default ProductDetails;