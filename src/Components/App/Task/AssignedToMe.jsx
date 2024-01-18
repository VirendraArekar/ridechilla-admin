import React, { Fragment, useContext, useEffect } from 'react';
import { Link, MoreHorizontal, Printer, Trash2 } from 'react-feather';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { NoTasksFound, Print } from '../../../Constant';
import SweetAlert from 'sweetalert2';
import { H3,H4, P } from '../../../AbstractElements';
import TaskContext from '../../../_helper/Task';

const AssignedToMeClass = ({ title }) => {
    const { newTask, RemoveTask } = useContext(TaskContext);
    useEffect(() => {
    }, [newTask]);

    const deleteTask = (taskId) => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                RemoveTask(taskId);
                SweetAlert.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            } else {
                SweetAlert.fire(
                    'Your imaginary file is safe!'
                );
            }
        });
    };

    return (
        <Fragment>
            <Card className="mb-0">
                <CardHeader className="d-flex">
                    <H3 attrH3={{ className: 'mb-0'}} >{title}</H3>
                    <a href="#javascript" className='f-w-600'><Printer className="me-2" />{Print}</a>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="taskadd">
                        <div className="table-responsive">
                            <Table>
                                <tbody>
                                    {newTask && newTask.length ?
                                        newTask.map((taskdata,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <H4 attrH4={{ className: 'task_title_0' }} >{taskdata.title}</H4>
                                                        <P attrPara={{ className: 'project_name_0' }} >{taskdata.collection}</P>
                                                    </td>
                                                    <td>
                                                        <P attrPara={{ className: 'task_desc_0' }} >{taskdata.desc}</P>
                                                    </td>
                                                    <td>
                                                        <a className="me-2" href="#javascript"><Link /></a>
                                                        <a href="#javascript"><MoreHorizontal /></a>
                                                    </td>
                                                    <td><a href="#javascript" onClick={() => deleteTask(taskdata.id)}><Trash2 /></a></td>
                                                </tr>
                                            );
                                        })
                                        : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Fragment>
    );
};
export default AssignedToMeClass;