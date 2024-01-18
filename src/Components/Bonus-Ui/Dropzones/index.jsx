import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { toast } from 'react-toastify';
import { SingleFileUpload ,LimitationFileUpload, CustomFileUpload } from '../../../Constant';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import Multipledropzone from './Multipledropzone';

const Dropzones = (props) => {
    const getUploadParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
        toast.success('Dropzone successfully submitted !');
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Dropzone" parent="Bouns Ui" title="Dropzone" />
            <Container fluid={true}>
                <Row>
                    <Col xl="6">
                        <Card>
                            <HeaderCard title={SingleFileUpload} />
                            <CardBody>
                                <Form>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                   <Multipledropzone/>
                    <Col xl="6">
                        <Card>
                            <HeaderCard title={LimitationFileUpload} />
                            <CardBody>
                                <Form>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            onSubmit={handleSubmit}
                                            maxFiles={3}
                                            inputContent="Drop 3 Files"
                                            inputWithFilesContent={files => `${3 - files.length} more`}
                                            submitButtonDisabled={files => files.length < 3}
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6">
                        <Card>
                            <HeaderCard title={CustomFileUpload} />
                            <CardBody>
                                <Form>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onSubmit={handleSubmit}
                                            inputContent="Drop Files (Custom Layout)"
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default Dropzones;