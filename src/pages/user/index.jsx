import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button} from 'reactstrap'
import HeaderCard from "../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUsers } from "../../redux/features/userSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../CommonElements/Button/small';
import Modal from '../../CommonElements/Modal'

const User = (props) => {
    const  users  = useSelector((state) => ({ ...state.users }));
    const  user  = useSelector((state) => ({ ...state.user }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editUser = (id) => {
        navigate(`${process.env.PUBLIC_URL}/user/add-edit`, {state : {userId : id}});
    }

    const deleteUser = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteUsers({ids, toast}))
        getAllUsers()
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile ?? 'NA',
            sortable: true,
        },
        {
            name: 'Dob',
            selector: row => row.dob ?? 'NA',
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address ?? "NA" + (row.country ?? '') + ' ' + (row.state ?? '') + ' ' + (row.city ?? ''),
            sortable: true,
        },
        {
            name: 'Experience',
            selector: row => row.experience ?? "NA",
            sortable: true,
        },
        {
            name: 'About',
            selector: row => row.about ?? 'NA',
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt ?? 'NA',
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <div className="text-center">

              <SmallButton onClick={(id) => editUser(id)} id={row.id} className="secondary" />
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
       getAllUsers(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllUsers(null,currentRowsPerPage)
    }

    const getAllUsers = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getUsers(str));
    }

    const onDeleteRow = async(users) => {
        
        let ids = [];
        for(let i = 0 ; i < users.length; i++){
            ids.push(users[i].id)
        }
        dispatch(deleteUsers({ids, toast}))
        getAllUsers()
    }

    useEffect(() => {
           getAllUsers()
        },[props])


    const addUserClick = () => {
        navigate(`${process.env.PUBLIC_URL}/user/add-edit`);
    }
    return(
        <Fragment>
            {console.log(users)}
            <Breadcrumbs parent="User" title="User List" mainTitle="User List" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    <HeaderCard title="Select Multiple or Delete Single Data" btn="User" btnOnclick={addUserClick}/>
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={users?.users?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete User'} subTitle={'Do you really wants to delete this user'} onClick={(id) => deleteUser(id)} id={id}/>
            </Container>
        </Fragment>
    )
}

// const mapStateToProps = state => {
// 	return {
// 		users: state.users
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	{ GetUsers }
// )(User);
export default User;