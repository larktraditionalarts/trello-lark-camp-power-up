import { appKey } from './util';

const icons = {
  calendarWeek: {
    light: new URL('../images/calendar-week-black.svg', import.meta.url).href,
    dark: new URL('../images/calendar-week-white.svg', import.meta.url).href,
  },
};

const wrapAuth = (t, conf) => t.getRestApi()
  .isAuthorized()
  .then((isAuthorized) => {
    if (isAuthorized) {
      return conf;
    }

    return [{
      text: 'Enable Lark Camp Functionality',
      callback: tt => tt.popup({
        title: 'Authorize to continue',
        url: `./authorize.html?return_url=${window.location.href}`,
      }),
    }];
  });

TrelloPowerUp.initialize({
  // 'card-buttons': (t) => [
  // ],
  'board-buttons': t => wrapAuth(t, [
    {
      // we can either provide a button that has a callback function
      icon: icons.calendarWeek,
      text: 'Setup For Next Camp Year',
      callback: tt => tt.popup({
        title: 'Setup For Next Camp',
        url: 'setup-for-next-year-dialog.html',
      }),
      condition: 'signedIn',
    },
  ]),
}, appKey);
