import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import useContentful from './services/useContentful';
import Dashboard from './components/Dashboard/Dashboard';

// Pages
import Main from './pages/main/Main';

const App = () => {
  const theme = createMuiTheme();
  const [contentful, isLoading, isError, request] = useContentful();

  return (
    <div>
      {!contentful ? (
        <div>Loading...</div>
      ) : (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Dashboard contentful={contentful}>
                <Route exact path="/" component={() => <Main contentful={contentful} />} />
              </Dashboard>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
