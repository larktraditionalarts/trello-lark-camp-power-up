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
const $934e8ad3e8eb8cf3$var$msPerYear = 31536000000;
const $934e8ad3e8eb8cf3$var$editYear = (amount)=>{
    console.log("editing years...");
    $934e8ad3e8eb8cf3$var$toggleLoad();
    $934e8ad3e8eb8cf3$var$t.cards("all").then((cards)=>Promise.all(cards.map((card)=>{
            const newDueDateMs = Date.parse(card.due) + amount * $934e8ad3e8eb8cf3$var$msPerYear;
            const newDueDate = new Date(newDueDateMs).toISOString();
            return $934e8ad3e8eb8cf3$var$t.set(card.id, "shared", "due", newDueDate);
        }))).finally($934e8ad3e8eb8cf3$var$toggleLoad);
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


//# sourceMappingURL=change-date-dialog.691c9fa5.js.map
