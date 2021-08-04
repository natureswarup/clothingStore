import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, IsGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted': ''} ${IsGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
