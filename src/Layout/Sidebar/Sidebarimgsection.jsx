import React from 'react'
import { Image, H4 } from '../../AbstractElements'
import { Checknow, Sidebarmenutext } from '../../Constant';

const Sidebarimgsection = () => {
  return (
    <div className="sidebar-img-section">
      <div className="sidebar-img-content">
        <Image attrImage={{ className: "img-fluid", src: `${require("../../assets/images/dashboard/upgrade/2.png")}`, alt: "" }} />
        <H4>{Sidebarmenutext}</H4>
        {/* <a className="btn btn-primary" href="https://themeforest.net/user/pixelstrap/portfolio" target="_blank" rel="noopener noreferrer">{Checknow}</a> */}
      </div>
    </div>
  )
}
export default Sidebarimgsection