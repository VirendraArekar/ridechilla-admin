import React, { Fragment, useContext } from 'react';
import { Image } from '../../AbstractElements';
import {AlignLeft } from 'react-feather';
import CustomizerContext from '../../_helper/Customizer';
import { Link } from 'react-router-dom';

const SidebarLogo = () => {
  const { mixLayout, toggleSidebar,toggleIcon } = useContext(CustomizerContext);

  return (
    <Fragment>
      <div className="logo-wrapper">
        {mixLayout?
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}>
            <Image attrImage={{ className: "img-fluid for-light", src: `${require("../../assets/images/logo/logo.png")}`, alt: "" }} />
          </Link>
          :
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}>
            <Image attrImage={{ className: "img-fluid for-dark", src: `${require("../../assets/images/logo/logo-dark.png")}`, alt: "" }} />
          </Link>
        }
        <div className="back-btn" onClick={() => toggleSidebar(!toggleIcon)}><i className="fa fa-angle-left"></i></div>
        <div className="toggle-sidebar" onClick={() => toggleSidebar(!toggleIcon)}>
          <AlignLeft className={`status_toggle middle`} id="sidebar-toggle" />
        </div>
      </div> 
    </Fragment >   
  );
};

export default SidebarLogo;