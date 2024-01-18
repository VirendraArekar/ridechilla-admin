import { OrderHistoryColumns, OrderHistoryData } from '../../../../Data/MockTable/OrderHistoryList';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { H3 } from '../../../../AbstractElements';

const OrderTableData = () => {

    return (
        <Fragment>
            <Card>
                <CardHeader className='pb-0 d-flex justify-content-between'>
                    <H3>{'Order history'}</H3>
                </CardHeader>
                <CardBody>
                    <div className="order-history table-responsive">
                        <DataTable
                            data={OrderHistoryData}
                            columns={OrderHistoryColumns}
                            pagination
                            style={{ border: '1px solid' }}
                        />
                    </div>
                </CardBody>
            </Card>
        </Fragment>
    );
};
export default OrderTableData;