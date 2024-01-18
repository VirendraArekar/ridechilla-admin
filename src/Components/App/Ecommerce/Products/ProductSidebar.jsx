import { H4, Image } from '../../../../AbstractElements';
import FilterContext from '../../../../_helper/Ecommerce/Filter';
import Category from '../Filters/Category';
import PrizeRange from '../Filters/PrizeRange';
import banner from '../../../../assets/images/ecommerce/banner.jpg';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment, useContext, useState } from 'react';
import { Filters } from '../../../../Constant';

const ProductSidebar = () => {

    const { filterSearchBy, Filtersidebartoggle, filterSidebar } = useContext(FilterContext);
    const [searchKeyword, setSearchKeyword] = useState('');
    
    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
        filterSearchBy(searchKeyword);
    };
    return (
        <Fragment>
            <Row>
                <Col md="12">
                    <div className='pro-filter-sec'>
                        <div className={`product-sidebar ${filterSidebar ? '' : 'open'}`}>
                            <div className="filter-section">
                                <Card>
                                    <CardHeader>
                                        <H4 attrH4={{ className: 'mb-0 f-w-600' }}>{Filters}
                                            <span className="pull-right">
                                                <i className="fa fa-chevron-down toggle-data"
                                                    onClick={Filtersidebartoggle}>
                                                </i>
                                            </span>
                                        </H4>
                                    </CardHeader>
                                    <div className="left-filter">
                                        <CardBody className="filter-cards-view animate-chk custom-scrollbar">
                                            <Category />
                                            <PrizeRange />
                                            <div className="product-filter text-center mt-2">
                                                <Image attrImage={{ className: 'img-fluid banner-product m-auto', src: `${banner}`, alt: '' }} />
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className='product-search'>
                            <Form>
                                <FormGroup className="form-group m-0" >
                                    <Input className="form-control" type="text" placeholder="Search.."
                                        defaultValue={searchKeyword}
                                        onChange={(e) => handleSearchKeyword(e.target.value)} />
                                    <i className="fa fa-search"></i>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
export default ProductSidebar;