import ProductContext from '../../../../_helper/Ecommerce/Product';
import { Price, MoveToCarts } from '../../../../Constant';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { useNavigate } from 'react-router';
import { Col, Media, Row } from 'reactstrap';
import React, { Fragment, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';

const WishListData = () => {
    const Navigate = useNavigate();
    const { productItem, symbol } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const MoveToCart = (product, qty) => {
        addToCart(product, qty);
        Navigate(`${process.env.PUBLIC_URL}/app/ecommerce/cart`);
    };
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            <Row>
                {
                    productItem.map((item) => {
                        return (
                            <Col xxl="2" md="4" sm="6" key={item.id} className="box-col-20 xl-20">
                                <div className="product-details-box">
                                    <Media className='d-flex'>
                                        <Image attrImage={{ className: 'align-self-center img-fluid', src: `${dynamicImage(item.img)}`, alt: '#' }} />
                                        <Media body className='flex-grow-1'>
                                            <div className="product-name">
                                                <a href="3"><H6>{item.name}</H6></a>
                                            </div>
                                            <div className="rating">
                                                <Rating initialValue={item.rating} size='17px' style={{ padding: '0' }} />
                                            </div>
                                            <div className="price">{Price}<span>: {item.price}{symbol}</span></div>
                                            <div className="avaiabilty">
                                                <div className={`${item.stock === 'In stock' ? 'text-success' : 'text-danger'}`}>{item.stock}</div>
                                            </div>
                                            <Btn attrBtn={{
                                                color: 'primary', size: 'xs',
                                                onClick: () => MoveToCart(item, 1)
                                            }} >{MoveToCarts}</Btn>
                                        </Media>
                                    </Media>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Fragment>
    );
};
export default WishListData;