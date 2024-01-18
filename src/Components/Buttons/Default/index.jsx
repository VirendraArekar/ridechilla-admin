import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Bttons from '../Comoncomponent/Bttons';

const DefaultButton = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Default Style' parent="Buttons" title="Default Style" />
            <Container fluid={true}>
                <Bttons/>
            </Container>            
        </Fragment>
    );
};
export default DefaultButton;