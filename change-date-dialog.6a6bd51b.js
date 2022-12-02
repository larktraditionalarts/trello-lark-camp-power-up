const $934e8ad3e8eb8cf3$var$t = TrelloPowerUp.iframe();
const $934e8ad3e8eb8cf3$var$finish = ()=>{
    $934e8ad3e8eb8cf3$var$t.closePopup();
};
const $934e8ad3e8eb8cf3$var$toggleLoad = ()=>{
    [
        "edit-date",
        "loading-message"
    ].forEach((id)=>{
        const el = document.getElementById(id);
        el.className = el.className === "hidden" ? "" : "hidden";
    });
};
const $934e8ad3e8eb8cf3$var$setProgressValue = (value)=>{
    const el = document.getElementById("progress-bar-fill");
    el.style.width = `${value}%`;
};
const $934e8ad3e8eb8cf3$var$msPerYear = 31536000000;
// https://developer.atlassian.com/cloud/trello/guides/rest-api/rate-limits/
// We can probably get away with less delay, but this is playing it safe safe.
const $934e8ad3e8eb8cf3$var$delay = 150;
const $934e8ad3e8eb8cf3$var$matchesYearLabel = /^year:(.*)/;
const $934e8ad3e8eb8cf3$var$editYear = async (amount)=>{
    console.log("editing years...");
    $934e8ad3e8eb8cf3$var$toggleLoad();
    try {
        const cards = await $934e8ad3e8eb8cf3$var$t.cards("all");
        console.log(cards[0]);
        return;
    } catch (e) {
        console.error(e);
    } finally{
        $934e8ad3e8eb8cf3$var$toggleLoad();
    }
};
window.addYear = ()=>$934e8ad3e8eb8cf3$var$editYear(1);
window.removeYear = ()=>$934e8ad3e8eb8cf3$var$editYear(-1);
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


//# sourceMappingURL=change-date-dialog.6a6bd51b.js.map
