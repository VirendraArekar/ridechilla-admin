import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, deleteNotifications } from "../../redux/features/notificationSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../utility/helper";

const Notification = (props) => {
    const  notifications  = useSelector((state) => ({ ...state.notifications }));
    const  notification  = useSelector((state) => ({ ...state.notification }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editNotification = (id) => {
        navigate(`${process.env.PUBLIC_URL}/notification/add-edit`, {state : {noteId : id}});
    }

    const deleteNotification = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteNotifications({ids, toast}))
        getAllNotifications()
    }

    const getPriority = (priority) => {
      return priority === 3 ? 'High' : (priority === 2 ? 'Medium' : 'low')
    }

    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
            name: 'Priority',
            selector: row => <div className="text-center">
              {
                getPriority(row.priority) === 'High' ?
                <span className="badge badge-danger p-2">High</span>
                :
                (
                  getPriority(row.priority) === 'Medium' ?
                  <span className="badge badge-success p-2">Medium</span>
                  :
                  <span className="badge badge-info p-2">Low</span>
                )
              }
            </div>,
            sortable: true,
        },
        {
          name: 'Notification',
          selector: row => row.notification,
          sortable: true,
          headerStyle: (selector, id) => {
            return { width: "150px", textAlign: "left" };
          },
          wrap: true
        },
        {
          name: 'Read',
          selector: row => <div className="text-center"><span className={`badge ${row.readIt ? 'badge-success' : 'badge-secondary'} p-2`}>{row.readIt ? 'Yes' : 'No'}</span></div>,
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
        {
            name: 'Action',
            selector: row => <div className="text-center">

              <SmallButton onClick={(id) => editNotification(id)} id={row.id} className="secondary" />
              &nbsp;
              <SmallButton onClick={(id) => {
                setOpen(true)
                setId(id)
              }} id={row.id} className="danger" />
            </div>,
            sortable: false,
        },
    ];

    const onPageChange = (page, totalRows) =>{
       setPage(page)
       getAllNotifications(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllNotifications(null,currentRowsPerPage)
    }

    const getAllNotifications = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getNotifications(str));
    }

    const onDeleteRow = async(notifications) => {
        let ids = [];
        for(let i = 0 ; i < notifications.length; i++){
            ids.push(notifications[i].id)
        }
        dispatch(deleteNotifications({ids, toast}))
        getAllNotifications()
    }

    useEffect(() => {
      getAllNotifications()
        },[props])


    const addEventClick = () => {
        navigate(`${process.env.PUBLIC_URL}/notification/add-edit`);
    }
    return(
        <Fragment>
            {console.log(notifications, notification)}
            <Breadcrumbs parent="Live Consultation" title="Notification List" mainTitle="Notification List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Notification" btnOnclick={addEventClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={notifications?.notifications?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Notification'} subTitle={'Do you really wants to delete this notification'} onClick={(id) => deleteNotification(id)} id={id}/>
            </Container>
      </Fragment>
    )
}

export default Notification;