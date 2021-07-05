import React from 'react';
import DefaultTemplateProps from './types';
import Header from '../../atom/header';
import Footer from '../../atom/footer';

function DefaultTemplate({ children }: DefaultTemplateProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

DefaultTemplate.defaultProps = {
  children: undefined,
};

export default DefaultTemplate;
