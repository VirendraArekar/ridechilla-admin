import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getServices, deleteServices } from "../../redux/features/serviceSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatGetDate } from "../../utility/helper";

const Service = (props) => {
    const  services  = useSelector((state) => ({ ...state.services }));
    const  service  = useSelector((state) => ({ ...state.service }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editService = (id) => {
        navigate(`${process.env.PUBLIC_URL}/service/add-edit`, {state : {serviceId : id}});
    }

    const deleteService = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteServices({ids, toast}))
        getAllServices()
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <div className="text-center"><span className={`badge p-2 ${row.status ? 'badge-success' : 'badge-warning'}`}>{row.status ? 'Active' : 'Inactive'}</span></div>,
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

              <SmallButton onClick={(id) => editService(id)} id={row.id} className="secondary" />
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
       getAllServices(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllServices(null,currentRowsPerPage)
    }

    const getAllServices = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getServices(str));
    }

    const onDeleteRow = async(services) => {
        let ids = [];
        for(let i = 0 ; i < services.length; i++){
            ids.push(services[i].id)
        }
        dispatch(deleteServices({ids, toast}))
        getAllServices()
    }

    useEffect(() => {
          getAllServices()
        },[props])


    const addServiceClick = () => {
        navigate(`${process.env.PUBLIC_URL}/service/add-edit`);
    }
    return(
        <Fragment>
            {console.log(services, service)}
            <Breadcrumbs parent="Service" title="Service List" mainTitle="Service List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Service" btnOnclick={addServiceClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={services?.services?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Service'} subTitle={'Do you really wants to delete this service'} onClick={(id) => deleteService(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Service;