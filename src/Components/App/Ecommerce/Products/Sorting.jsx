import { Featured, HighestPrices, LowestPrices, ShowingProducts } from '../../../../Constant';
import FilterContext from '../../../../_helper/Ecommerce/Filter';
import React, { Fragment, useContext } from 'react';
import { Col } from 'reactstrap';

const Sorting = () => {
    const { filterSortBy } = useContext(FilterContext);
    const filterSortFunc = (event) => {
        filterSortBy(event);
    };
    return (
        <Fragment>
            <Col md="9" sm="10" className="text-end">
                <span className="f-w-600 me-2">{ShowingProducts}</span>
                <div className="select2-drpdwn-product select-options d-inline-block"
                    onChange={(e) => filterSortFunc(e.target.value)}>
                    <select className="form-control btn-square" name="select">
                        <option value="LowestPrices">{LowestPrices}</option>
                        <option value="Featured">{Featured}</option>
                        <option value="HighestPrices">{HighestPrices}</option>
                    </select>
                </div>
            </Col>
        </Fragment >
    );
};
export default Sorting;