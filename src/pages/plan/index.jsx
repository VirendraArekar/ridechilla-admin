import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getPlans, deletePlans } from "../../redux/features/planSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../utility/helper";

const Plan = (props) => {
    const  plans  = useSelector((state) => ({ ...state.plans }));
    const  plan  = useSelector((state) => ({ ...state.plan }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editPlan = (id) => {
        navigate(`${process.env.PUBLIC_URL}/plan/add-edit`, {state : {planId : id}});
    }

    const deletePlan = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deletePlans({ids, toast}))
        getAllPlans()
    }

    const columns = [
        {
          name: 'Plan',
          selector: row => row.plan,
          sortable: true,
        },
        {
            name: 'Type',
            selector: row => <div className="text-center"><span className="badge badge-dark p-2">{row.type}</span></div>,
            sortable: true,
          },
        {
          name: 'Description',
          selector: row => row?.description ? row?.description?.substring(0,12) + '...'  : 'NA',
          sortable: true,
        },
        {
            name: 'Chat',
            selector: row => <div><span className={`badge ${row.chat ? 'badge-success' :'badge-warning'} p-2`}>{row.chat ? 'Yes' : "No"}</span></div>,
            sortable: true,
        },
        {
            name: 'Audio Call',
            selector: row => <div><span className={`badge ${row.audioCall ? 'badge-success' :'badge-warning'} p-2`}>{row.audioCall ? 'Yes' : "No"}</span></div>,
            sortable: true,
        },
        {
          name: 'Video Call',
          selector: row => <div><span className={`badge ${row.videoCall ? 'badge-success' :'badge-warning'} p-2`}>{row.videoCall ? 'Yes' : "No"}</span></div>,
          sortable: true,
        },
        {
          name: 'Live Session',
          selector: row => <div><span className={`badge ${row.liveSession ? 'badge-success' :'badge-warning'} p-2`}>{row.liveSession ? 'Yes' : "No"}</span></div>,
          sortable: true,
        },
        {
          name: 'Start Date',
          selector: row => <div className="text-center">
                            <span className="badge p-2 badge-dark">{formatGetDate(row.startDate) ?? 'NA'}
                            </span>
                        </div>,
          sortable: true,
        },
        {
          name: 'End Date',
          selector: row => <div className="text-center">
                            <span className="badge p-2 badge-dark">{formatGetDate(row.endDate) ?? 'NA'}
                            </span>
                        </div>,
          sortable: true,
        },
        {
            name: 'Action',
            selector: row => <div className="text-center">

              <SmallButton onClick={(id) => editPlan(id)} id={row.id} className="secondary" />
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
       getAllPlans(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllPlans(null,currentRowsPerPage)
    }

    const getAllPlans = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getPlans(str));
    }

    const onDeleteRow = async(offers) => {
        let ids = [];
        for(let i = 0 ; i < offers.length; i++){
            ids.push(offers[i].id)
        }
        dispatch(deletePlans({ids, toast}))
        getAllPlans()
    }

    useEffect(() => {
          getAllPlans()
        },[props])


    const addOfferClick = () => {
        navigate(`${process.env.PUBLIC_URL}/plan/add-edit`);
    }
    return(
        <Fragment>
            {console.log(plans, plan)}
            <Breadcrumbs parent="Offer" title="Plan List" mainTitle="Plan List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Plan" btnOnclick={addOfferClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={plans?.plans?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Plan'} subTitle={'Do you really wants to delete this plan'} onClick={(id) => deletePlan(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Plan;