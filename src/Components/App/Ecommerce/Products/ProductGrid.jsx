import ProductContext from '../../../../_helper/Ecommerce/Product';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import { H4, LI, P, Image, UL } from '../../../../AbstractElements';
import FilterContext from '../../../../_helper/Ecommerce/Filter';
import { getVisibleproducts } from '../../../../Services/Ecommerce.service';
import ProductModal from './ProductModal';
import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Row, Card } from 'reactstrap';

const ProductGrid = () => {
    const Navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { productItem, symbol } = useContext(ProductContext);
    const quantity = 1;
    const [dataid, setDataid] = useState();
    const [openModal, setOpenModal] = useState(false);
    const onClickHandle = (i) => {
        setOpenModal(true);
        setDataid(i.id);
    };
    const AddToCarts = (item, quantity) => {
        addToCart(item, quantity);
        Navigate(`${process.env.PUBLIC_URL}/app/ecommerce/cart`);
    };
    var images = require.context('../../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    const context = useContext(FilterContext);
    const products = getVisibleproducts(productItem, context.filter);
    return (
        <Fragment>
            <div className="product-wrapper-grid">
                <Row className="gridRow">
                    {products && products.map((item) => {
                        return (
                            <div id="gridId" className='col-xl-3 col-lg-4 col-sm-6 xl-3' key={item.id}>
                                <Card >
                                    <div className="product-box">
                                        <div className="product-img">
                                            {(item.status === 'Sale') ?
                                                <span className="ribbon ribbon-danger">
                                                    {item.status}
                                                </span> : ''}
                                            {(item.status === '50%') ?
                                                <span className="ribbon ribbon-success ribbon-right">
                                                    {item.status}
                                                </span> : ''}
                                            {(item.status === 'gift') ?
                                                <span className="ribbon ribbon-secondary ribbon-vertical-left">
                                                    <i className="icon-gift">{item.status}</i>
                                                </span> : ''}
                                            {(item.status === 'love') ?
                                                <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                                                    <i className="icon-heart">{item.status}</i>
                                                </span> : ''}
                                            {(item.status === 'Hot') ?
                                                <span className="ribbon ribbon ribbon-clip ribbon-warning">
                                                    {item.status}
                                                </span> : ''}
                                            <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}`, alt: '' }} />
                                            <div className="product-hover">
                                                <UL attrUL={{ className: 'simple-list flex-row' }}>
                                                    <LI><a onClick={() => AddToCarts(item, quantity)}><i className='icon-shopping-cart me-0' /> </a></LI>
                                                    <LI><a onClick={() => { onClickHandle(item) }} datatoggle='modal'><i className='icon-eye me-0' /></a> </LI>
                                                </UL>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product-page/${item.id}`}>
                                                <H4>{item.name}</H4>
                                            </Link>
                                            <P>{item.note}</P>
                                            <div className="product-price">{symbol} {item.price} <del>{symbol} {item.discountPrice}</del></div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                    {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
                </Row>
            </div>
        </Fragment>
    );
};
export default ProductGrid;