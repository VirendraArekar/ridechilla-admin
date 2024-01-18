import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getRoles, deleteRoles } from "../../redux/features/roleSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'
import { formatGetDate } from "../../utility/helper";

const Role = (props) => {
    const  roles  = useSelector((state) => ({ ...state.roles }));
    const  role  = useSelector((state) => ({ ...state.role }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editRole = (id) => {
        navigate(`${process.env.PUBLIC_URL}/role/add-edit`, {state : {roleId : id}});
    }

    const deleteRole = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteRoles({ids, toast}))
        getAllRoles()
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Value',
            selector: row => row.value,
            sortable: true,
        },
        {
            name: 'Active',
            selector: row => <div className="text-center"><span className={`badge p-2 ${row.active ? 'badge-success' : 'badge-warning'}`}>{row.active ? 'Active' : 'Inactive'}</span></div>,
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

              <SmallButton onClick={(id) => editRole(id)} id={row.id} className="secondary" />
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
       getAllRoles(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllRoles(null,currentRowsPerPage)
    }

    const getAllRoles = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getRoles(str));
    }

    const onDeleteRow = async(roles) => {
        let ids = [];
        for(let i = 0 ; i < roles.length; i++){
            ids.push(roles[i].id)
        }
        dispatch(deleteRoles({ids, toast}))
        getAllRoles()
    }

    useEffect(() => {
          getAllRoles()
    },[props])


    const addRoleClick = () => {
        navigate(`${process.env.PUBLIC_URL}/role/add-edit`);
    }
    return(
        <Fragment>
            {console.log(roles, role)}
            <Breadcrumbs parent="Role" title="Role List" mainTitle="Role List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="Role" btnOnclick={addRoleClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={roles?.roles?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Role'} subTitle={'Do you really wants to delete this role'} onClick={(id) => deleteRole(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

export default Role;