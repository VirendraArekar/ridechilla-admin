import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvents } from "../../redux/features/eventSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../utility/helper";

const Event = (props) => {
    const  events  = useSelector((state) => ({ ...state.events }));
    const  event  = useSelector((state) => ({ ...state.event }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editEvent = (id) => {
        navigate(`${process.env.PUBLIC_URL}/event/add-edit`, {state : {eventId : id}});
    }

    const deleteEvent = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteEvents({ids, toast}))
        getAllEvents()
    }

    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
          name: 'Description',
          selector: row => row.description.substring(0,12) + '...',
          sortable: true,
        },
        {
          name: 'Event Date',
          selector: row => <div className="text-center">
                            <span className="badge p-2 badge-dark">{formatGetDate(row.eventDateTime) ?? 'NA'}
                            </span>
                        </div>,
          sortable: true,
        },
        {
          name: 'Start Time',
          selector: row => formatAMPM(new Date(row.eventStartTime)),
          sortable: true,
        },
        {
          name: 'End Time',
          selector: row => formatAMPM(new Date(row.eventEndTime)),
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

              <SmallButton onClick={(id) => editEvent(id)} id={row.id} className="secondary" />
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
       getAllEvents(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllEvents(null,currentRowsPerPage)
    }

    const getAllEvents = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getEvents(str));
    }

    const onDeleteRow = async(events) => {
        let ids = [];
        for(let i = 0 ; i < events.length; i++){
            ids.push(events[i].id)
        }
        dispatch(deleteEvents({ids, toast}))
        getAllEvents()
    }

    useEffect(() => {
          getAllEvents()
        },[props])


    const addEventClick = () => {
        navigate(`${process.env.PUBLIC_URL}/event/add-edit`);
    }
    return(
        <Fragment>
            {console.log(events, event)}
            <Breadcrumbs parent="Event" title="Event List" mainTitle="Event List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Event" btnOnclick={addEventClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={events?.events?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Event'} subTitle={'Do you really wants to delete this event'} onClick={(id) => deleteEvent(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Event;