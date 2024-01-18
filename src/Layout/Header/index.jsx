import React, { Fragment } from 'react';
import Leftbar from './LeftBar';
import Rightbar from './RightBar';
import Searchbar from './Search';
import { Row } from 'reactstrap';

const Header = () => {
    return (
        <Fragment>
                <Row className="header-wrapper m-0">                   
                    <Leftbar />
                    <Searchbar />
                    <Rightbar />
                </Row>
        </Fragment >
    );
};
export default Header;