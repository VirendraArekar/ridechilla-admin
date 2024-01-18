import React, { Fragment, useContext } from 'react';
import { H3, LI, UL } from '../../../../AbstractElements';
import { Grid, List } from 'react-feather';
import { CardHeader } from 'reactstrap';
import BookmarkContext from '../../../../_helper/Bookmark';

const GridClass = ({ title }) => {
    const { setgridView } = useContext(BookmarkContext);    

    const Gridbookmark = () => {
        setgridView(true);
    };
    const Listbookmark = () => {
        setgridView(false);
    };
    return (
        <Fragment>
            <CardHeader className="d-flex">
                <H3 attrH3={{ className: 'mb-0 f-w-600' }} >{title}</H3>
                <UL attrUL={{ className: 'simple-list flex-row' }}>
                    <LI><a className="grid-bookmark-view" href="#javascript" > <Grid onClick={Gridbookmark} /></a></LI>
                    <LI> <a className="list-layout-view" href="#javascript" > <List onClick={Listbookmark} /></a>  </LI>
                </UL>
            </CardHeader>
        </Fragment>
    );
};

export default GridClass;