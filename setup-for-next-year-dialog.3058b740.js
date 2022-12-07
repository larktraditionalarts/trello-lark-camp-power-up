var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref8b0"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref8b0"] = parcelRequire;
}
/* eslint-disable arrow-parens */ 
var $722MK = parcelRequire("722MK");
const $41f34c9627a9af7c$var$t = TrelloPowerUp.iframe((0, $722MK.appKey));
// https://developer.atlassian.com/cloud/trello/guides/rest-api/rate-limits/
// We can probably get away with less delay, but this is playing it safe safe.
const $41f34c9627a9af7c$var$delay = 150;
const $41f34c9627a9af7c$var$matchesYearLabel = /^year:(.*)/;
const $41f34c9627a9af7c$var$apiFetch = (0, $722MK.apiFetchGen)($41f34c9627a9af7c$var$t);
const $41f34c9627a9af7c$var$toggleLoad = ()=>{
    [
        "edit-date",
        "loading-message"
    ].forEach((id)=>{
        document.getElementById("progress-bar-fill").style.width = "0%";
        const el = document.getElementById(id);
        el.className = el.className === "hidden" ? "" : "hidden";
    });
};
const $41f34c9627a9af7c$var$setProgressValue = (value)=>{
    const el = document.getElementById("progress-bar-fill");
    const percent = Math.floor(1000 - value * 1000) / 10;
    el.style.width = `${percent}%`;
};
const $41f34c9627a9af7c$var$getBoardAndCards = async ()=>{
    let board = {};
    let cards = [];
    board = await $41f34c9627a9af7c$var$t.board("all");
    cards = await $41f34c9627a9af7c$var$t.cards("all");
    return [
        board,
        cards
    ];
};
// eslint-disable-next-line
const $41f34c9627a9af7c$var$wait = async (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const $41f34c9627a9af7c$var$updateCards = (cards, cb, ...args)=>{
    const cardCount = cards.length;
    const recEdit = async ()=>{
        const card = cards.pop();
        if (!card) return;
        try {
            await cb(card, ...args);
            console.log("updated card", card.id);
        } catch (e) {
            console.error(`failed to PUT cards ${card.id}`, e);
        }
        $41f34c9627a9af7c$var$setProgressValue(cards.length / cardCount);
        $41f34c9627a9af7c$var$wait($41f34c9627a9af7c$var$delay);
        await recEdit();
    };
    return recEdit();
};
const $41f34c9627a9af7c$var$unsetAssigned = async ()=>{
    $41f34c9627a9af7c$var$toggleLoad();
    const [board, cards] = await $41f34c9627a9af7c$var$getBoardAndCards();
    await $41f34c9627a9af7c$var$updateCards(cards, async (card)=>{
        try {
            await $41f34c9627a9af7c$var$apiFetch("PUT", "cards", {
                id: card.id
            });
            console.log("unset assigned for card", card.id);
        } catch (e) {
            console.error(`failed to PUT cards ${card.id}`, e);
        }
    });
};
const $41f34c9627a9af7c$var$editYear = async (year)=>{
    $41f34c9627a9af7c$var$toggleLoad();
    const [board, unfilteredCards] = await $41f34c9627a9af7c$var$getBoardAndCards();
    const { labels: labels  } = board;
    const cards = unfilteredCards.filter((c)=>c.labels.find((l)=>l.name === "repeat:yearly"));
    // check if the label exist
    const yearLabel = `year:${year}`;
    let yearLabelObject = (labels || []).find((l)=>l.name === yearLabel);
    if (!yearLabelObject) try {
        yearLabelObject = await $41f34c9627a9af7c$var$apiFetch("POST", "labels", {
            name: yearLabel,
            color: "black",
            idBoard: board.id
        });
        console.log("label created", yearLabelObject);
    } catch (e) {
        console.error("error creating new label", e);
        return;
    }
    else console.log("label exists", yearLabelObject);
    const cutoff = new Date(`${year}-08-01`);
    // recursively update cards, waiting by delay amount
    await $41f34c9627a9af7c$var$updateCards(cards, async (card)=>{
        const dueDate = new Date(card.due);
        dueDate.setFullYear(year);
        // if the due date is after Aug 1, set to the previous year
        if (dueDate > cutoff) dueDate.setFullYear(year - 1);
        const idLabels = [
            ...card.labels.filter((l)=>!$41f34c9627a9af7c$var$matchesYearLabel.test(l)).map((l)=>l.id),
            yearLabelObject.id
        ];
        try {
            await $41f34c9627a9af7c$var$apiFetch("PUT", "cards", {
                id: card.id,
                idLabels: idLabels,
                due: dueDate.toISOString()
            });
            console.log("updated card", card.id);
        } catch (e) {
            console.error(`failed to PUT cards ${card.id}`, e);
        }
    });
    $41f34c9627a9af7c$var$toggleLoad();
};
window.unsetAssigned = ()=>$41f34c9627a9af7c$var$unsetAssigned();
window.setYear = ()=>{
    const el = document.getElementById("year");
    $41f34c9627a9af7c$var$editYear(parseInt(el.value, 10));
};
window.closePopup = ()=>$41f34c9627a9af7c$var$t.closePopup();
$41f34c9627a9af7c$var$t.render(()=>{
    $41f34c9627a9af7c$var$t.sizeTo("body").done();
    const el = document.getElementById("year");
    el.value = new Date().getFullYear() + 1;
});


//# sourceMappingURL=setup-for-next-year-dialog.3058b740.js.map
