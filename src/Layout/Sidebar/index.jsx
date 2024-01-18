import React, { Fragment, useEffect, useState } from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarLogo from './SidebarLogo';
import SidebarIcon from './SidebarIcon';

const SideBarLayout = () => {
  const id = window.location.pathname.split('/').pop();
  const layout = id;
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth - 500);
  };
  const handleScroll = () => {
    if (window.scrollY > 400) {
      document.querySelector('.sidebar-main').className = 'sidebar-main hovered';
    } else {
      if (document.getElementById('sidebar-main'))
        document.querySelector('.sidebar-main').className = 'sidebar-main';
    }
  };
  useEffect(() => {
    document.querySelector('.left-arrow').classList.add('d-none');
    window.addEventListener('resize', handleResize);
    handleResize();
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [layout])
  return (
    <Fragment>
      <SidebarLogo />
      <SidebarIcon />
      <SidebarMenu width={width} />
    </Fragment>
  );
};
export default SideBarLayout;