import React, { Fragment, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { SelectSingleImageUpload, MultipleImageUpload } from '../../../Constant';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';

const UploadImage = () => {

    const [image, setimage] = useState({ pictures: [] });

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Image Upload" parent="Bouns Ui" title="Uploads" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={MultipleImageUpload} />
                            <CardBody>
                                <ImageUploading
                                    withIcon={false}
                                    withPreview={true}
                                    label=""
                                    buttonText="Upload Images"
                                    onChange={onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                                    maxFileSize={1048576}
                                    fileSizeError=" file size is too big"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={SelectSingleImageUpload} />
                            <CardBody>
                                <ImageUploading
                                    withIcon={false}
                                    withPreview={true}
                                    label=""
                                    singleImage={true}
                                    buttonText="Upload Images"
                                    onChange={onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                                    maxFileSize={1048576}
                                    fileSizeError=" file size is too big"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default UploadImage;