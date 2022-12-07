/* eslint-disable no-param-reassign,no-console */

import trim from 'lodash/trim';

const concatUrlParts = parts => parts
  .map(p => trim(p.toString(), '/'))
  .join('/');

export const apiFetchGen = (t) => {
  const apiPromise = t.getRestApi();

  return async (method, endpoint, data = {}) => {
    const api = await apiPromise;
    const token = await api.getToken();

    const urlParts = [
      api.apiOrigin,
      '1',
      endpoint,
    ];

    if (data.id) {
      urlParts.push(data.id);

      delete data.id;
    }

    const url = new URL(concatUrlParts(urlParts));

    Object.entries({
      ...data,
      key: api.appKey,
      token,
    }).forEach(([k, v]) => url.searchParams.set(k, v));

    let text;

    return fetch(url, { method })
      .then(r => r.text())
      .then((r) => {
        text = r;

        return JSON.parse(r);
      })
      .catch(err => console.error(err, text));
  };
};

export const appKey = {
  appKey: '1133d2242b5152305510663723c689e2',
  appName: 'Lark Camp Power-up',
};

export default apiFetchGen;
