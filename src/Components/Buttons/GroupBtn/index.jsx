import React, { Fragment } from 'react';
import { Container, Row} from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import GroupButtonClass from './GroupButton';
import RadioBtnClass from './RadioBtn';
import NestingButton from './NestingButton';
import VerticalBtnGroup from './VerticalBtnGroup';

const GroupButton = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Button Group' parent="Buttons" title="Button Group" />
            <Container fluid={true}>
                <Row>
                    <GroupButtonClass />
                    <RadioBtnClass />
                    <NestingButton/>
                    <VerticalBtnGroup/>
                </Row>
            </Container>
        </Fragment>
    );
};
export default GroupButton;