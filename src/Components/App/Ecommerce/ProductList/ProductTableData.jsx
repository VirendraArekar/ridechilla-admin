import { productColumns, productData } from '../../../../Data/Ecommerce/ProductList';
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';

const ProductTableData = () => {
    return (
        <Fragment>
            <div className="table-responsive product-table">
                <div id='basic-1_wrapper' className='dataTables_wrapper no-footer'>
                    <DataTable
                        className='display dataTable no-footer'
                        noHeader
                        pagination
                        paginationServer
                        columns={productColumns}
                        data={productData}
                    />
                </div>
            </div>
        </Fragment>
    );
};
export default ProductTableData;