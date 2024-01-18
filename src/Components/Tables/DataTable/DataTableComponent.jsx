import React, { Fragment, useCallback, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../AbstractElements';
import { dummytabledata, tableColumns } from '../../../Data/Table/Defaultdata';
import { FaSortDown } from "react-icons/fa";

const DataTableComponent = (props) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelete, setToggleDelete] = useState(false);
    const {data, pagination, columns, onPageChange, onPerPageChange, onDeleteRow} = props;
    
    const handleRowSelected = useCallback(state => {
        console.log(state.selectedRows)
        setSelectedRows(state.selectedRows);
    }, []);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
            setToggleDelete(!toggleDelete);
            onDeleteRow(selectedRows)
        }
    };

    return (
        <Fragment>
            {(selectedRows.length !== 0) &&
                <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                    <H4 attrH4={{ className: 'text-muted m-0' }}>Delete Selected Data..!</H4>
                    <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
                </div>
            }
            {
                (data && data?.length) &&
                <DataTable
                    data={data}
                    columns={columns}
                    striped={true}
                    center={true}
                    pagination
                    paginationServer
                    selectableRows
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleDelete}
                    // progressPending={loading}
                    paginationTotalRows={data?.users?.totalResults}
                    paginationDefaultPage={1}
                    onChangePage={onPageChange}
                    onChangeRowsPerPage={onPerPageChange}
                />
            }
            
        </Fragment>
    )
}
export default DataTableComponent