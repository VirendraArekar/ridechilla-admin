import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next'
import { LI, UL } from '../../AbstractElements';
import { Back } from '../../Constant';
import { MENUITEMS } from './Menu';
import SidebarMenulist from './SidebarMenulist';
import './index.css';

const SidebarMenuItems = ({ wrapper, margin }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <UL attrUL={{ className: 'sidebar-links simple-list', id: 'simple-bar' }}>
        <div className="simplebar-wrapper" style={{ margin: '0px'}}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset">
              <div className='simplebar-content-wrapper custom-scrollbar' style={{ height: '100%', overflow: 'hidden scroll' }}>
                <div className='simplebar-content p-0 wrapper-height' style={wrapper.split(' ').includes('horizontal-wrapper') ? { marginLeft: margin + 'px' } : { margin: '0px' }}>
                  <LI attrLI={{ className: 'back-btn' }}>
                    <div className="mobile-back text-end"><span>{Back}</span><i className="fa fa-angle-right ps-2"></i></div>
                  </LI>
                  <SidebarMenulist MENUITEMS={MENUITEMS} t={t}  />
                </div>
              </div>
            </div>
          </div>
          <div className="simplebar-placeholder" style={{ width: 'auto', height: '54px' }}></div>
        </div>
        <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
          <div className="simplebar-scrollbar" style={{ width: 0, display: 'none' }}></div>
        </div>
        <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
          <div className="simplebar-scrollbar" style={{ height: 77, transform: 'translate3d(0, 304, 0)', display: 'block' }}></div>
        </div>
      </UL >
    </Fragment >
  );
};
export default SidebarMenuItems;
