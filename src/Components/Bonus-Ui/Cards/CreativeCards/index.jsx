import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Container, Row } from 'reactstrap';
import CreativeCardsCommon from './themeCards';

const CreativeCards = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Creative Card' parent='Bonus Ui' title='Creative Card' />
            <Container fluid={true} className="basic-cards">
                <Row>
                    <CreativeCardsCommon />
                </Row>
            </Container>
        </Fragment>
    );
};
export default CreativeCards;