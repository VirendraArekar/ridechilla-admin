import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone-uploader'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, Col, Form } from 'reactstrap'
import { MultiImageUpload, MultipleImageVideoAudioUpload } from '../../../Constant'
import HeaderCard from '../../Common/Component/HeaderCard'

const Multipledropzone = () => {
    const getUploadParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
        toast.success('Dropzone successfully submitted !');
    };
    return (
    <Fragment>
         <Col xl="6">
                <Card>
                    <HeaderCard title={MultiImageUpload} />
                    <CardBody>
                        <Form>
                            <ToastContainer />
                            <div className="dz-message needsclick">
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onSubmit={handleSubmit}
                                    accept="image/*"
                                />
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12">
                <Card>
                    <HeaderCard title={MultipleImageVideoAudioUpload} />
                    <CardBody>
                        <Form>
                            <div className="dz-message needsclick">
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onSubmit={handleSubmit}
                                    accept="image/*,audio/*,video/*"
                                />
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Multipledropzone