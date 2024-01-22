import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOffers, deleteOffers } from "../../redux/features/offerSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../utility/helper";

const Offer = (props) => {
    const  offers  = useSelector((state) => ({ ...state.offers }));
    const  offer  = useSelector((state) => ({ ...state.offer }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editOffer = (id) => {
        navigate(`${process.env.PUBLIC_URL}/offer/add-edit`, {state : {offerId : id}});
    }

    const deleteOffer = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteOffers({ids, toast}))
        getAllOffers()
    }

    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
          name: 'Title',
          selector: row => row.title,
          sortable: true,
        },
        {
          name: 'Sub Title',
          selector: row => row.subTitle,
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

              <SmallButton onClick={(id) => editOffer(id)} id={row.id} className="secondary" />
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
       getAllOffers(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllOffers(null,currentRowsPerPage)
    }

    const getAllOffers = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getOffers(str));
    }

    const onDeleteRow = async(offers) => {
        let ids = [];
        for(let i = 0 ; i < offers.length; i++){
            ids.push(offers[i].id)
        }
        dispatch(deleteOffers({ids, toast}))
        getAllOffers()
    }

    useEffect(() => {
          getAllOffers()
        },[props])


    const addOfferClick = () => {
        navigate(`${process.env.PUBLIC_URL}/offer/add-edit`);
    }
    return(
        <Fragment>
            {console.log(offers, offer)}
            <Breadcrumbs parent="Offer" title="Offer List" mainTitle="Offer List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Offer" btnOnclick={addOfferClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={offers?.offers?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Offer'} subTitle={'Do you really wants to delete this offer'} onClick={(id) => deleteOffer(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Offer;