import React, { Fragment, useContext, useEffect, useLayoutEffect, useState } from 'react';
import Loader from './Loader';
import Taptop from './TapTop';
import Header from './Header';
import SideBarLayout from './Sidebar';
import Footer from './Footer';
import ThemeCustomize from './ThemeCustomizer';
import { Outlet, useLocation } from 'react-router-dom';
import CustomizerContext from '../_helper/Customizer';
import ProductContext from '../_helper/Ecommerce/Product';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ConfigDB from '../Config/ThemeConfig';
import AnimationThemeContext from '../_helper/AnimationTheme';

const Layout = ({ children, classNames, ...rest }) => {
  const { sidebar_types, toggleIcon, setToggleIcon, defaultClass, clickEvent, setDefaultClass, setwidth } = useContext(CustomizerContext);
  const { setIsVertical } = useContext(ProductContext);
  const sidebar_types1 = localStorage.getItem('sidebar_types') || sidebar_types;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme = localStorage.getItem('animation') || animation || ConfigDB.data.router_animation;
  const [window_Width, setWindow_Width] = useState(0)

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1215) {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
    if (window.innerWidth < 1401) {
      setToggleIcon(true);
      setDefaultClass(true);
    } else {
      setDefaultClass(false);
      setToggleIcon(false);
    }
  });

  useLayoutEffect(() => {
    function updateSize() {
      setWindow_Width(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [clickEvent]);

  useEffect(() => {
    setwidth(window_Width);
    if (window_Width - 4 < 1400) {
      setToggleIcon(true);
    } else {
      setToggleIcon(false);
    }
  }, [window_Width])

  const closeOverlay = () => {
    setToggleIcon(!toggleIcon);
  }
  return (
    <Fragment>
      <Loader />
      <Taptop />
      <div className={`page-wrapper ${!defaultClass ? sidebar_types1 : 'compact-wrapper'}`} id="pageWrapper">
        <div className={`page-header ${toggleIcon ? 'close_icon' : ''}`}>
          <Header />
        </div>
        <div className="page-body-wrapper">
          <div className={`sidebar-wrapper ${toggleIcon ? 'close_icon' : ''}`}>
            <SideBarLayout />
          </div>
          <div className="page-body pt-1">
            <TransitionGroup {...rest}>
              <CSSTransition
                key={location.key}
                timeout={100}
                classNames={animationTheme}
                unmountOnExit
              >
                <Outlet />
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </div>
      <div className={`bg-overlay ${((window_Width) < 991) && (toggleIcon === false) ? 'active' : ''}`} onClick={() => { closeOverlay() }} ></div>
      <ThemeCustomize />
    </Fragment >
  );
};
export default Layout;