const t = TrelloPowerUp.iframe();
window["change-date-dialog"].addEventListener("submit", function(event) {
    // Stop the browser trying to submit the form itself.
    event.preventDefault();
    return t.set("card", "shared", "estimate", window.estimateSize.value).then(function() {
        t.closePopup();
    });
});
t.render(function() {
    t.sizeTo("#edit-date").done();
});

//# sourceMappingURL=change-date-dialog.b6667c8c.js.map
