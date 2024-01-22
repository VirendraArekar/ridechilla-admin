import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getSupports, deleteSupports } from "../../redux/features/supportSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'

const Page = (props) => {
    const  supports  = useSelector((state) => ({ ...state.supports }));
    const  support  = useSelector((state) => ({ ...state.support }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editSupport = (id) => {
        navigate(`${process.env.PUBLIC_URL}/support/add-edit`, {state : {supportId : id}});
    }

    const deleteSupport = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteSupports({ids, toast}))
        getAllSupports()
    }

    const columns = [
        {
            name: 'Title',
            selector: row => <div className="text-center"><span className="badge badge-dark p-2">{row.title}</span></div>,
            sortable: true,
          },
        {
          name: 'Description',
          selector: row => row?.description ? row?.description?.substring(0,12) + '...'  : 'NA',
          sortable: true,
        },
        {
            name: 'Action',
            selector: row => <div className="text-center">

              <SmallButton onClick={(id) => editSupport(id)} id={row.id} className="secondary" />
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
       getAllSupports(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllSupports(null,currentRowsPerPage)
    }

    const getAllSupports = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getSupports(str));
    }

    const onDeleteRow = async(supports) => {
        let ids = [];
        for(let i = 0 ; i < supports.length; i++){
            ids.push(supports[i].id)
        }
        dispatch(deleteSupports({ids, toast}))
        getAllSupports()
    }

    useEffect(() => {
          getAllSupports()
        },[props])


    const addSupportClick = () => {
        navigate(`${process.env.PUBLIC_URL}/support/add-edit`);
    }
    return(
        <Fragment>
            {console.log(supports, support)}
            <Breadcrumbs parent="Page" title="Page List" mainTitle="Page List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Page" btnOnclick={addSupportClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={supports?.supports?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Support'} subTitle={'Do you really wants to delete this support'} onClick={(id) => deleteSupport(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Page;