import React, { Fragment } from 'react';
import { Container, Row } from "reactstrap";
import BasicTableClass from './BasicTableClass';
import InverseTableClass from './InverseTableClass';
import HoverableRowsClass from './HoverableRows';
import StripedRowClass from './StripedRowClass';
import StripeInverseClass from './StripInverseClass';
import CaptionClass from './Caption';
import ResponsiveClass from './ResponsiveClass';
import BreckpointClass from './BreckpointClass';
import TableHeadClass from './TableHeadClass';
import { Breadcrumbs } from '../../../../AbstractElements';
import InversePrimaryClass from './InversTableClass';
import Sizingtable from './Sizingtable';
import CustomHoverClass from './CustomeHover';
import DashedBorderClass from './DashedBorderClass';


const BasicTables = () => {
    return (
        <Fragment>
            <Breadcrumbs title="Bootstrap Basic Tables" mainTitle='Bootstrap Basic Tables' parent='Bootstrap Tables' />
            <Container fluid={true} className="basic_table">
                <Row>
                    <BasicTableClass />
                    <InverseTableClass />
                    <HoverableRowsClass />
                    <InversePrimaryClass />
                    <CaptionClass />
                    <TableHeadClass />
                    <StripedRowClass />
                    <BreckpointClass />
                    <ResponsiveClass />
                    <Sizingtable />
                    <CustomHoverClass/>
                    <DashedBorderClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default BasicTables;