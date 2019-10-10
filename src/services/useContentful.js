import { useState, useEffect } from 'react';

const contentful = require('contentful');

/**
 *
 * Environment variable names must match those in the Netlify settings
 * docs: https://www.netlify.com/docs/continuous-deployment/#environment-variables
 * https://cdn.contentful.com/spaces/7nqjvrqnk2kx/entries?access_token=zB_AwMVXBTSNsOWQTU8ZptcAgRA8QAiakvts2cWHo70&content_type=welcome
 *
 */
const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const CONTENTFUL_DELIVERY_TOKEN = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN;

const useContentful = () => {
  const [contentfulParameters, setContentfulParameters] = useState({});
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN,
  });

  const getContentful = () => {
    setIsLoading(true);
    setIsError(false);

    client
      .getEntries({
        locale: '*',
      })
      .then(res => {
        setResponse(res);
        console.log(res);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    getContentful();
  }, [contentfulParameters]);

  const request = parameters => {
    setContentfulParameters(parameters);
  };

  return [response, isLoading, isError, request];
};

export default useContentful;
