import React, { useState, useEffect } from 'react';
import ConfigDB from '../../Config/ThemeConfig';
import Context from './index';

const AnimationThemeProvider = (props) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    ConfigDB.data.router_animation = localStorage.getItem('animation') || 'fadeIn';
  }, [setAnimation, animation]);

  const routerAnimation = (layout_anim) => {
    ConfigDB.data.router_animation = layout_anim;
    localStorage.setItem('animation', layout_anim);
    setAnimation(layout_anim);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        animation,
        routerAnimation
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AnimationThemeProvider;
