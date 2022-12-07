/* eslint-disable camelcase */

import { appKey } from './util';

const t = window.TrelloPowerUp.iframe(appKey);

const auth = () => {
  const { return_url } = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  t.getRestApi()
    .authorize({
      scope: 'read,write',
      return_url,
    })
    .then(() => t.closePopup());
};

t.render(() => {
  document.querySelector('button').addEventListener('click', auth, false);
});
