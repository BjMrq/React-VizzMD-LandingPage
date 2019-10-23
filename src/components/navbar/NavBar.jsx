import React, { useState, useEffect } from 'react';
import NavBrand from './NavBrand';

const navBar = (props) => {
  const [isVisible, setifVisible] = useState(false);

  const shouldNavBarShow = () => {
    const currentOffset = window.pageYOffset;
    const visible = currentOffset > 1100;
    setifVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', shouldNavBarShow);
    return () => {
      window.removeEventListener('scroll', shouldNavBarShow);
    };
  }, []);

  return (
    <div className={isVisible ? "navbar" : "navbarHidden"}>
      {isVisible ? <NavBrand scrollTo={props.scrollTo} /> : null}
    </div>
  );
};

export default navBar;
