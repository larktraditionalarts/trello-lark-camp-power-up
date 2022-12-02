const $934e8ad3e8eb8cf3$var$t = TrelloPowerUp.iframe();
const $934e8ad3e8eb8cf3$var$finish = ()=>{
    $934e8ad3e8eb8cf3$var$t.closePopup();
};
window.addYear = ()=>{
    $934e8ad3e8eb8cf3$var$t.cards("all").then((cards)=>{
        console.log(JSON.stringify(cards, null, 2));
    });
    $934e8ad3e8eb8cf3$var$finish();
};
window.removeYear = ()=>{
    alert("remove year");
    $934e8ad3e8eb8cf3$var$finish();
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


//# sourceMappingURL=change-date-dialog.1b29d6f4.js.map
