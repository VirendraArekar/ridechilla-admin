import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getLives, deleteLives } from "../../redux/features/liveSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../utility/helper";

const Live = (props) => {
    const  lives  = useSelector((state) => ({ ...state.lives }));
    const  live  = useSelector((state) => ({ ...state.live }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editLive = (id) => {
        navigate(`${process.env.PUBLIC_URL}/live-consultation/add-edit`, {state : {eventId : id}});
    }

    const deleteLive = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteLives({ids, toast}))
        getAllLives()
    }

    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
            name: 'Customers',
            selector: row => row.customers?.map((obj) => <span className="badge badge-primary">{obj?.name}</span>),
            sortable: true,
        },
        {
          name: 'Start Time',
          selector: row => row?.joiningTime ? formatAMPM(new Date(row.joiningTime)) : 'NA',
          sortable: true,
        },
        {
          name: 'End Time',
          selector: row => row?.leaveTime ? formatAMPM(new Date(row.leaveTime)) : 'NA',
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

              <SmallButton onClick={(id) => editLive(id)} id={row.id} className="secondary" />
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
       getAllLives(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllLives(null,currentRowsPerPage)
    }

    const getAllLives = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getLives(str));
    }

    const onDeleteRow = async(lives) => {
        let ids = [];
        for(let i = 0 ; i < lives.length; i++){
            ids.push(lives[i].id)
        }
        dispatch(deleteLives({ids, toast}))
        getAllLives()
    }

    useEffect(() => {
          getAllLives()
        },[props])


    const addEventClick = () => {
        navigate(`${process.env.PUBLIC_URL}/live-consultation/add-edit`);
    }
    return(
        <Fragment>
            {console.log(lives, live)}
            <Breadcrumbs parent="Live Consultation" title="Live Consultation List" mainTitle="Live Consultation List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Live Consultation" btnOnclick={addEventClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={lives?.lives?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Lice Consultation'} subTitle={'Do you really wants to delete this live consultation'} onClick={(id) => deleteLive(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Live;