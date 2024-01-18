import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../AbstractElements';
import ListOfImage from './ListOfImages';

const ImageGallery = () => {   
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Gallery" parent="Gallery" title="Gallery" />
            <Container fluid={true}>
                <Row>
                    <ListOfImage />                   
                </Row>
            </Container>
        </Fragment>
    );
}


export default ImageGallery;