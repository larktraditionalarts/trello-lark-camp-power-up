import { apiFetchGen, appKey } from './util';

const t = TrelloPowerUp.iframe(appKey);

// https://developer.atlassian.com/cloud/trello/guides/rest-api/rate-limits/
// We can probably get away with less delay, but this is playing it safe safe.
const delay = 150;
const matchesYearLabel = /^year:(.*)/;
const apiFetch = apiFetchGen(t);

const toggleLoad = () => {
  ['edit-date', 'loading-message'].forEach((id) => {
    document.getElementById('progress-bar-fill').style.width = '0%';

    const el = document.getElementById(id);
    el.className = el.className === 'hidden' ? '' : 'hidden';
  });
};

const setProgressValue = (value) => {
  const el = document.getElementById('progress-bar-fill');
  const percent = Math.floor(1000 - (value * 1000)) / 10;
  el.style.width = `${percent}%`;
};

const getBoardAndCards = async () => {
  let board = {};
  let cards = [];

  board = await t.board('all');
  cards = await t.cards('all');

  return [board, cards];
};

// eslint-disable-next-line
const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateCards = (cards, cb, ...args) => {
  const cardCount = cards.length;

  const recEdit = async () => {
    const card = cards.pop();

    if (!card) {
      return;
    }

    try {
      await cb(card, ...args);

      console.log('updated card', card.id);
    } catch (e) {
      console.error(`failed to PUT cards ${card.id}`, e);
    }

    setProgressValue(cards.length / cardCount);
    wait(delay);

    await recEdit();
  };

  return recEdit();
};

const unsetAssigned = async () => {
  toggleLoad();

  const [, cards] = await getBoardAndCards();

  await updateCards(cards, async (card) => {
    try {
      await apiFetch('PUT', 'cards', {
        id: card.id,
      });

      console.log('unset assigned for card', card.id);
    } catch (e) {
      console.error(`failed to PUT cards ${card.id}`, e);
    }
  });
};

const editYear = async (year) => {
  toggleLoad();

  const [board, unfilteredCards] = await getBoardAndCards();
  const { labels } = board;

  const cards = unfilteredCards
    .filter(c => c.labels.find(l => l.name === 'repeat:yearly'));

  // check if the label exist

  const yearLabel = `year:${year}`;
  let yearLabelObject = (labels || []).find(l => l.name === yearLabel);

  if (!yearLabelObject) {
    try {
      yearLabelObject = await apiFetch('POST', 'labels', {
        name: yearLabel,
        color: 'black',
        idBoard: board.id,
      });

      console.log('label created', yearLabelObject);
    } catch (e) {
      console.error('error creating new label', e);

      return;
    }
  } else {
    console.log('label exists', yearLabelObject);
  }

  const cutoff = new Date(`${year}-08-01`);

  // recursively update cards, waiting by delay amount
  await updateCards(cards, async (card) => {
    const dueDate = new Date(card.due);
    dueDate.setFullYear(year);

    // if the due date is after Aug 1, set to the previous year
    if (dueDate > cutoff) {
      dueDate.setFullYear(year - 1);
    }

    const idLabels = [
      ...card.labels
        .filter(l => !matchesYearLabel.test(l))
        .map(l => l.id),
      yearLabelObject.id,
    ];

    try {
      await apiFetch('PUT', 'cards', {
        id: card.id,
        idLabels,
        due: dueDate.toISOString(),
      });

      console.log('updated card', card.id);
    } catch (e) {
      console.error(`failed to PUT cards ${card.id}`, e);
    }
  });

  toggleLoad();
};

window.unsetAssigned = () => unsetAssigned();

window.setYear = () => {
  const el = document.getElementById('year');

  editYear(parseInt(el.value, 10));
};

window.closePopup = () => t.closePopup();

t.render(() => {
  t.sizeTo('body').done();

  const el = document.getElementById('year');
  el.value = (new Date()).getFullYear() + 1;
});
