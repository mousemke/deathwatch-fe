// @flow
import config from '../../config.json';
import apiTargets from '../constants/apiTargets.constants';

const { API_TOKEN, API_PROTOCOL, API_HOST } = config;

const authString = `?api_token=${API_TOKEN}`;

function apiGet(target: string): Promise<void> {
  // const oldTarget = localStorage.getItem(target);

  // if (oldTarget) {

  //   setTimeout( actualFetch );

  //   return {
  //     then: (cb) => {
  //       return cb(JSON.parse(oldTarget));
  //     }
  //   };
  // }

  return new Promise((resolve, reject) => {
    const apiTarget = apiTargets[target];

    if (apiTarget) {
      const url = `${API_PROTOCOL}://${API_HOST}${apiTarget}${authString}`;

      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(r => r.json())
        .then(res => {
          resolve(res);
        });
    } else {
      const error = `${target}? that doesn't appear to be an api endpoint`;

      console.error(error);
      reject(error);
    }
  });
}

export default apiGet;
