import React, { Fragment } from 'react';
import { Col, FormGroup, Label } from 'reactstrap';
import { UploadProjectFile } from '../../../../Constant';
import Dropzone from 'react-dropzone-uploader';

const UploadProjectFileClass = () => {

    const getUploadParams = ({ meta }) => {
        return {
            url: 'https://httpbin.org/post'
        };
    };
    const handleChangeStatus = ({ meta, file }, status) => { };

    return (
        <Fragment>
            <Col>
                <FormGroup>
                    <Label>{UploadProjectFile}</Label>
                    <Dropzone
                        className='dropzone dz-clickable'
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        maxFiles={1}
                        multiple={false}
                        canCancel={false}
                        inputContent={'Drop files here'}
                        styles={{
                            dropzoneActive: { borderColor: 'green' },
                        }}
                    />
                </FormGroup>
            </Col>
        </Fragment>
    );
};

export default UploadProjectFileClass;