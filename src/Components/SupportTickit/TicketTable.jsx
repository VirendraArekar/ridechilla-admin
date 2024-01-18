import React, { Fragment, useCallback, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../AbstractElements';
import { supportColumns, supportData } from '../../Data/SupportTicket';

const TicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelet, setToggleDelet] = useState(false);
  const [data, setData] = useState(supportData);

  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
      setToggleDelet(!toggleDelet);
      setData(data.filter((item) => selectedRows.filter((elem) => elem.id === item.id).length > 0 ? false : true));
      setSelectedRows('');
    }
  };
  return (
    <Fragment>
      <div className="table-responsive support-table">
        {(selectedRows.length !== 0) &&
          <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
            <H4 attrH4={{ className: 'text-muted m-0' }}>Delet Selected Data..!</H4>
            <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
          </div>
        }
        <DataTable
          columns={supportColumns}
          data={data}
          striped={true}
          center={true}
          pagination
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleDelet}
        />
      </div>
    </Fragment>
  );
};
export default TicketTable;