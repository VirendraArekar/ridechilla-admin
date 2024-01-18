import React, { Fragment } from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import H5 from '../Headings/H5Element';
import {Btn} from '../../AbstractElements'

export default function index(props) {
 const {open, setOpen, onClick, type="default", title, subTitle = null, id=null} = props;
  return (
    <Fragment>
        <Modal isOpen={open} toggle={() => setOpen(!open)} size="md" centered={true} children={props.children}>
            <ModalHeader toggle={() => setOpen(!open)}> {title}</ModalHeader>
            <ModalBody>
                {
                    subTitle && 
                    <H5 className="mb-5">{subTitle}</H5>
                }
                <div className='m-5 h-10' style={{height : 25}}></div>
                <Btn attrBtn={{ color: 'danger', type: 'submit', onClick: () => onClick(id)}} >{type !== 'default' ? 'Submit' : 'Ok'}</Btn>
                <Btn attrBtn={{ color: 'dark ms-2', onClick: () => setOpen(!open) }} >{'Cancel'} </Btn>
            </ModalBody>
        </Modal>
    </Fragment>
  )
}
