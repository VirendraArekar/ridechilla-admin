import React, { Fragment, useContext } from 'react';
import { AlignCenter } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
import CustomizerContext from '../../_helper/Customizer';

const Leftbar = () => {
    const { setToggleIcon, toggleIcon, width } = useContext(CustomizerContext);
    return (
        <Fragment>
            <div className="header-logo-wrapper col-auto p-0">
                <div className="logo-wrapper">
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}>
                        <Image attrImage={{ className: 'img-fluid for-light', src: `${require("../../assets/images/logo/logo.png")}`, alt: '' }} />
                        <Image attrImage={{ className: 'img-fluid for-dark', src: `${require("../../assets/images/logo/logo-dark.png")}`, alt: '' }} />
                    </Link>
                </div>
                <div className={`toggle-sidebar ${(width - 4) > 1199 && 'd-none'}`} onClick={() => setToggleIcon(!toggleIcon)}>
                    <AlignCenter className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
                </div>
            </div>
        </Fragment >
    );
};
export default Leftbar;