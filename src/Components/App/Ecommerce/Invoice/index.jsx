import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import PrintComponent from './Print';

const InvoiceContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Invoice" mainTitle="Invoice" />
            <PrintComponent />
        </Fragment >
    );
};
export default InvoiceContain;