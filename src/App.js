import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import useContentful from './services/useContentful';
import Dashboard from './components/dashboard/Dashboard';
import setLocale from './redux/actions/setLocale';

// Pages
import Main from './pages/main/Main';
import Member from './pages/member/Member';

const App = props => {
  const { locale } = props;
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  });
  const [contentful, isLoading, isError, request] = useContentful();

  const onEnterHandler = () => window.scrollTo(0, 0);

  const sharedProps = {
    contentful,
    locale,
  };

  return (
    <div>
      {!contentful ? (
        <div>Loading...</div>
      ) : (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Dashboard {...sharedProps}>
                <Route exact path="/" component={() => <Main {...sharedProps} />} />
                {/* <Route
                  path="/member/:id"
                  component={() => <Member {...sharedProps} />}
                  onEnter={() => onEnterHandler()}
                /> */}
              </Dashboard>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    locale: state.localeReducer.locale,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLocale: payload => dispatch(setLocale(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
