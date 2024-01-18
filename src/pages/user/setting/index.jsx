import { Fragment, useEffect, useState } from "react";
import DataTableComponent from "../../../Components/Tables/DataTable/DataTableComponent";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import {Container, Row, Col, CardBody, Card, Button, Label, Input} from 'reactstrap'
import HeaderCard from "../../../Components/Common/Component/HeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserSettings, deleteUserSettings, updateUserSetting } from "../../../redux/features/userSettingSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SmallButton from '../../../CommonElements/Button/small';
import Modal from '../../../CommonElements/Modal'
import { formatAMPM, formatGetDate } from "../../../utility/helper";

const Setting = (props) => {
    const  userSettings  = useSelector((state) => ({ ...state.userSettings }));
    const  userSetting  = useSelector((state) => ({ ...state.userSetting }));
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)

    const editUserSetting = (id) => {
        navigate(`${process.env.PUBLIC_URL}/user/settings/add-edit`, {state : {noteId : id}});
    }

    const deleteUserSetting = (id) => {
        setOpen(false)
        let ids = [id];
        dispatch(deleteUserSettings({ids, toast}))
        getAllUserSettings()
    }


    const checkHandler = (e, key, id) => {
       let update = {};
       if(key === 'call'){
        update.call = e.target.checked
       }
       else if(key === 'chat'){
        update.chat = e.target.checked
       }
       else{
        update.live = e.target.checked
       }
       dispatch(updateUserSetting({id, updatedData : update, toast, navigate}))
    }


    const columns = [
        {
          name: 'User',
          selector: row => row.user?.name,
          sortable: true,
        },
        {
          name: 'Call',
          selector: row => 
                    <div body className="switch-sm">
                        <Label className="switch">
                            <Input type="checkbox" checked={row.call} onChange={(e) => checkHandler(e,'call', row.id)}/>
                            <span className={'switch-state bg-primary'}></span>
                        </Label>
                    </div>,
          sortable: true,
          headerStyle: (selector, id) => {
            return { width: "150px", textAlign: "left" };
          },
          wrap: true
        },
        {
          name: 'Chat',
          selector: row =>  
                <div body className="switch-sm">
                    <Label className="switch">
                        <Input type="checkbox" checked={row.chat}  onChange={(e) => checkHandler(e,'chat', row.id)}/>
                        <span className={'switch-state bg-primary'}></span>
                    </Label>
                </div>,
          sortable: true,
          headerStyle: (selector, id) => {
            return { width: "150px", textAlign: "left" };
          },
          wrap: true
        },
        {
          name: 'Live',
          selector: row =>  
                <div body className="switch-sm">
                    <Label className="switch">
                        <Input type="checkbox" checked={row.live}  onChange={(e) => checkHandler(e,'live', row.id)}/>
                        <span className={'switch-state bg-primary'}></span>
                    </Label>
                </div>,
          sortable: true,
          headerStyle: (selector, id) => {
            return { width: "150px", textAlign: "left" };
          },
          wrap: true
        },
        {
            name: 'Created At',
            selector: row => <div className="text-center">
                                <span className="badge p-2 badge-dark">{formatGetDate(row.createdAt) ?? 'NA'}
                                </span>
                            </div>,
            sortable: true,
        }
    ];

    const onPageChange = (page, totalRows) =>{
       setPage(page)
       getAllUserSettings(page, null)
    }

    const onPerPageChange = (currentRowsPerPage, currentPage) => {
       setPerPage(currentRowsPerPage)
       getAllUserSettings(null,currentRowsPerPage)
    }

    const getAllUserSettings = (myPage = null , myPerPage = null) => {
        let str =`?page=${myPage ?? page}&limit=${myPerPage ?? perPage}`
        dispatch(getUserSettings(str));
    }

    const onDeleteRow = async(settings) => {
        let ids = [];
        for(let i = 0 ; i < settings.length; i++){
            ids.push(settings[i].id)
        }
        dispatch(deleteUserSettings({ids, toast}))
        getAllUserSettings()
    }

    useEffect(() => {
      getAllUserSettings()
        },[props])


    const addEventClick = () => {
        navigate(`${process.env.PUBLIC_URL}/user/settings/add-edit`);
    }
    return(
        <Fragment>
            {console.log(userSettings, userSetting)}
            <Breadcrumbs parent="User" title="User" mainTitle="Setting" />
            <Container fluid={true}>
                <Row>
                <Col sm="12">
                    <Card>
                    {/* <HeaderCard title="Select Multiple or Delete Single Data" btn="Notification" btnOnclick={addEventClick}/> */}
                    <CardBody className='data-tables'>
                        <DataTableComponent columns={columns} data={userSettings?.userSettings?.results ?? []} onPageChange={onPageChange} onPerPageChange={onPerPageChange} onDeleteRow={onDeleteRow}/>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                <Modal open={open} setOpen={(val) => setOpen(val)} title={'Delete Setting'} subTitle={'Do you really wants to delete this setting'} onClick={(id) => deleteUserSetting(id)} id={id}/>
            </Container>
      </Fragment>
    )
}

export default Setting;