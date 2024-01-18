import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments, deleteUserPayments } from "../../../redux/features/userPaymentSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../../CommonElements/Button/small';
import Modal from '../../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../../utility/helper";

const UserPayment = (props) => {
    const  userPayments  = useSelector((state) => ({ ...state.userPayments }));
    const  userPayment  = useSelector((state) => ({ ...state.userPayment }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editUserPayment = (id) => {
        navigate(`${process.env.PUBLIC_URL}/user/payments/add-edit`, {state : {payId : id}});
    }

    const deleteUserPayment = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteUserPayments({ids, toast}))
        getAllUserPayments()
    }


    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
          name: 'Transaction ID',
          selector: row => <div className="text-center"><span className="badge badge-light p-2 text-dark">{row.transactionId}</span></div>,
          sortable: true,
          headerStyle: (selector, id) => {
            return { width: "150px", textAlign: "left" };
          },
          wrap: true
        },
        {
          name: 'Amount',
          selector: row => <div className="text-center"><span className={`badge badge-primary p-2`}>₹{row.amount}</span></div>,
          sortable: true,
        },
        {
          name: 'Transaction Mode',
          selector: row => <div className="text-center">
            <span className={`badge badge-${row.transactionType === 'Wallet' ? 'warning' : (row.transactionType === 'Credit Card' ? 'secondary' : (row.transactionType === 'Debit Card' ? 'info' : (row.transactionType === 'Upi' ? 'dark' : 'danger')))} p-2`}>{row.transactionType}</span>
          </div>,
          sortable: true,
        },
        {
            name: 'Created At',
            selector: row => <div className="text-center">
                                <span className="badge p-2 badge-dark">{formatGetDate(row.createdAt) ?? 'NA'}
                                </span>
                            </div>,
            sortable: true,
        },
        // {
        //     name: 'Action',
        //     selector: row => <div className="text-center">

        //       <SmallButton onClick={(id) => editTransaction(id)} id={row.id} className="secondary" />
        //       &nbsp;
        //       <SmallButton onClick={(id) => {
        //         setOpen(true)
        //         setId(id)
        //       }} id={row.id} className="danger" />
        //     </div>,
        //     sortable: false,
        // },
    ];

    const onPageChange = (page, totalRows) =>{
       setPage(page)
       getAllUserPayments(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllUserPayments(null,currentRowsPerPage)
    }

    const getAllUserPayments = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getUserPayments(str));
    }

    const onDeleteRow = async(payments) => {
        let ids = [];
        for(let i = 0 ; i < payments.length; i++){
            ids.push(payments[i].id)
        }
        dispatch(deleteUserPayments({ids, toast}))
        getAllUserPayments()
    }

    useEffect(() => {
      getAllUserPayments()
        },[props])


    const addEventClick = () => {
        navigate(`${process.env.PUBLIC_URL}/user/payments/add-edit`);
    }
    return(
        <Fragment>
            <Breadcrumbs parent="User" title="Payment List" mainTitle="Payment List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    {/* <HeaderCard title="Select Multiple or Delete Single Data" btn="Transaction" btnOnclick={addEventClick}/> */}
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={userPayments?.userPayments?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Transaction'} subTitle={'Do you really wants to delete this transaction'} onClick={(id) => deleteUserPayment(id)} id={id}/>
            </Container>
      </Fragment>
    )
}

export default UserPayment;