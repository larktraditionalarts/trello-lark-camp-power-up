const $934e8ad3e8eb8cf3$var$t = TrelloPowerUp.iframe();
const $934e8ad3e8eb8cf3$var$finish = ()=>{
    $934e8ad3e8eb8cf3$var$t.closePopup();
};
const $934e8ad3e8eb8cf3$var$toggleLoad = ()=>{
    [
        "edit-date",
        "loading"
    ].forEach((id)=>{
        const el = document.getElementById(id);
        el.className = el.className === "hidden" ? "" : "hidden";
    });
};
const $934e8ad3e8eb8cf3$var$editYear = (amount)=>{
    $934e8ad3e8eb8cf3$var$toggleLoad();
    $934e8ad3e8eb8cf3$var$t.cards("all").then((cards)=>{
        console.log(JSON.stringify(cards, null, 2));
        // t.set(card.id, 'shared', '', value)
        $934e8ad3e8eb8cf3$var$toggleLoad();
    });
};
window.addYear = ()=>{
    $934e8ad3e8eb8cf3$var$toggleLoad();
    $934e8ad3e8eb8cf3$var$t.cards("all").then((cards)=>{
        console.log(JSON.stringify(cards, null, 2));
        // t.set(card.id, 'shared', '', value)
        $934e8ad3e8eb8cf3$var$toggleLoad();
    });
};
window.removeYear = ()=>{
    alert("remove year");
};
window.unsetCompleted = ()=>{
    alert("unset completed");
    $934e8ad3e8eb8cf3$var$finish();
};
window.closePopup = ()=>{
    $934e8ad3e8eb8cf3$var$finish();
};
$934e8ad3e8eb8cf3$var$t.render(()=>{
    $934e8ad3e8eb8cf3$var$t.sizeTo("#edit-date").done();
});


//# sourceMappingURL=change-date-dialog.ccc2c5e7.js.map
