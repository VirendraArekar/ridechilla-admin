import React, { useContext } from 'react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../../AbstractElements'
import ProductContext from '../../../../_helper/Ecommerce/Product'
import LeftformDesc from './LeftformDesc'
import Rightformdesc from './Rightformdesc'

const AddProduct = () => {
    const { addProductDetail } = useContext(ProductContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handlesavechange = (data) => {
        console.log(data, 'data');
        if (data) addProductDetail(data);

        navigate(`${process.env.PUBLIC_URL}/app/ecommerce/product`);
    }
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Add Product" mainTitle="Add Product" />
            <Container fluid={true} className='add-product'>
                <Row>
                    <LeftformDesc handlesavechange={handlesavechange} register={register} handleSubmit={handleSubmit} errors={errors} />
                    <Rightformdesc handlesavechange={handlesavechange} register={register} handleSubmit={handleSubmit} errors={errors} />
                </Row>
            </Container>
        </Fragment>
    )
}

export default AddProduct