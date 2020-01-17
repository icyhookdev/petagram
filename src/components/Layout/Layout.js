import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Layout = ({ title, children, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petagram 🐶</title>}{' '}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
