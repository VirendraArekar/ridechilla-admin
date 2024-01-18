import React, { Fragment} from 'react';
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../AbstractElements';
import ListOfImageDesc from './ImageGallery/ListOfImgDesc';

const ImageWithDesc = () => {    
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Gallery Grid With Description" parent="Gallery" title="Gallery Grid With Description" />
            <Container fluid={true}>
                <Row>
                    <ListOfImageDesc />
                </Row>
            </Container>
        </Fragment>
    );
}
export default ImageWithDesc;