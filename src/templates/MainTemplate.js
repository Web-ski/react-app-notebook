import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';
import { theme } from 'theme/mainTheme';

const MainTemplate = (props) => {
  const [pageType, setPageType] = useState('notes');
  console.log(pageType);

  const { children } = props;
  useEffect(() => {
    const pageTypes = ['notes', 'twitters', 'articles'];
    const {
      location: { pathname },
    } = props;
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    setPageType(currentPage);
  }, [props]);

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default withRouter(MainTemplate);
