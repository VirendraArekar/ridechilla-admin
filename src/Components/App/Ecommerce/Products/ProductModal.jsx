import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Btn, H4, H6, Image, LI, P, UL } from '../../../../AbstractElements';
import { ProductDetails, Quantity, AddToCart, ViewDetails, ProductSizeArray } from '../../../../Constant';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import ProductContext from '../../../../_helper/Ecommerce/Product';
import { Modal, Col, InputGroup, InputGroupText, Input, Row, ModalHeader } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const ProductModal = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(props.value);
    // eslint-disable-next-line
    const [stock, setStock] = useState('');
    const { addToCart } = useContext(CartContext);
    const { productItem, symbol } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);
    const [singleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        productItem.forEach((product, i) => {
            if (product.id === props.dataid) {
                setSingleProduct(product);
            }
        });
    }, [productItem, props.dataid]);
    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    };
    const plusQty = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        } else {
            setStock('Out of Stock !');
        }
    };
    const minusQty = () => {
        if (quantity > 1) {
            setStock('InStock');
            setQuantity(quantity - 1);
        }
    };
    const onCloseModal = () => {
        setOpen(false);
        props.setOpenModal(false);
    };
    const AddToCarts = (item, quantity) => {
        addToCart(item, quantity);
        navigate(`${process.env.PUBLIC_URL}/app/ecommerce/cart`);
    };
    const handleNavigate =() => {
        navigate(`${process.env.PUBLIC_URL}/app/ecommerce/`);
    };

    return (
        <Fragment>
                <Modal className="product-box" size='lg' centered={true} isOpen={open}>
                        <ModalHeader style={{backgroundColor:'#EFF3F9'}}>
                            <Row className='product-box'>
                                <Col lg="6" className='product-img'>
                                    <Image attrImage={{ className: 'img-fluid', src: singleProduct.img ? require('../../../../assets/images/' + singleProduct.img) : '', alt: ''}} />
                                </Col>
                                <Col lg="6" className="product-details text-start">
                                    <a onClick={(e)=>{e.preventDefault();handleNavigate()}}><H4>{singleProduct.category}</H4></a>                        
                                    <div className="product-price">
                                        {symbol}{singleProduct.price}
                                        <del>{symbol}{singleProduct.discountPrice}</del>
                                    </div>
                                    <div className="product-view">
                                        <H6 attrH6={{ className: 'f-w-600' }}>{ProductDetails}</H6>
                                        <P attrPara={{ className: 'mb-0' }}>{singleProduct.discription}</P>
                                    </div>
                                    <div className="product-size">
                                        <UL attrUL={{ className: 'simple-list' }}>{ProductSizeArray.map((items, i) => <LI key={i}>
                                            <Btn attrBtn={{ color: 'outline-light', type: 'button', databsoriginaltitle: '', title: '' }}>{items}</Btn></LI>)}
                                        </UL>
                                    </div>
                                    <div className="product-qnty">
                                        <H6 attrH6={{ className: 'f-w-600' }}>{Quantity}</H6>
                                        <fieldset className='m-0'>
                                            <InputGroup className='bootstrap-touchspin'>
                                                <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down btn-square', onClick: minusQty }}><i className="fa fa-minus"></i></Btn>
                                                <InputGroupText className="bootstrap-touchspin-prefix" style={{ display: 'none' }}></InputGroupText>
                                                <Input className="touchspin text-center" type="text" name="quantity" value={quantity}
                                                    onChange={(e) => changeQty(e)} />
                                                <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-up btn-square', onClick: plusQty }}><i className="fa fa-plus"></i></Btn>
                                            </InputGroup><br />
                                        </fieldset>
                                        <div className="addcart-btn">
                                            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct, quantity)}>{AddToCart}</Link>
                                            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product-page/${singleProduct.id}`}className="btn btn-primary text-white">{ViewDetails}</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: onCloseModal, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
                            </Row>
                        </ModalHeader>
                </Modal>
        </Fragment>
    );
};
export default ProductModal;