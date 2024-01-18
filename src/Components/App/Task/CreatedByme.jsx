import React, { useContext } from 'react';
import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CardBody, Table } from 'reactstrap';
import { NoTasksFound } from '../../../Constant';
import TaskContext from '../../../_helper/Task';
import SweetAlert from 'sweetalert2';
import { H4, P } from '../../../AbstractElements';

const CreatedByme = React.forwardRef((props,ref) => {
    const { allTask, RemoveTask } = useContext(TaskContext);

    const deleteTask = (userId) => {
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
                RemoveTask(userId);
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
        <div ref={ref}>
            <CardBody className="p-0">
                <div className="taskadd">
                    <div className="table-responsive">
                        <Table>
                            <tbody>
                                {allTask && allTask.length ?
                                    allTask.map((tasklist,index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <H4 attrH4={{ className: 'task_title_0' }} >{tasklist.title}</H4>
                                                    <P attrPara={{ className: 'project_name_0' }} >{tasklist.collection}</P>
                                                </td>
                                                <td>
                                                    <P attrPara={{ className: 'task_desc_0' }} >{tasklist.desc}</P>
                                                </td>
                                                <td>
                                                    <a className="me-2" href="#javascript"><Link /></a>
                                                    <a href="#javascript"><MoreHorizontal /></a>
                                                </td>
                                                <td><a href="#javascript" onClick={() => deleteTask(tasklist.id)}><Trash2 /></a></td>
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
        </div>
    );
});

export default CreatedByme;