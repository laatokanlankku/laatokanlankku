import React from 'react';

const contentful = require('contentful');

const App = () => {
  /**
   *
   * Environment variable names must match those in the Netlify settings
   * docs: https://www.netlify.com/docs/continuous-deployment/#environment-variables
   *
   */
  const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const CONTENTFUL_DELIVERY_TOKEN = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN,
  });

  client
    .getEntries({
      locale: 'ru-RU',
    })
    .then(entry => console.log(entry))
    .catch(err => console.log(err));

  return <div></div>;
};

export default App;
