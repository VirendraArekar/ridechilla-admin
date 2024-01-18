import React from 'react';
import { Image } from '../../AbstractElements';

const SidebarIcon = () => {

  return (
    <div className="logo-icon-wrapper">
        <a href="index.html">
          <Image attrImage={{ className: "img-fluid for-light" , src: `${require("../../assets/images/logo/logo-icon.png")}`, alt: "" }} />
          <Image attrImage={{ className: "img-fluid for-dark", src: `${require("../../assets/images/logo/logo-icon-dark.png")}`, alt: "" }} />
        </a>
    </div>  
  );
};
export default SidebarIcon;