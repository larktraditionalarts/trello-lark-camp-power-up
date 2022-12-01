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
parcelRequire.register("cE6Rp", function(module, exports) {
const $934e8ad3e8eb8cf3$var$t = TrelloPowerUp.iframe();
window["change-date-dialog"].addEventListener("submit", function(event) {
    // Stop the browser trying to submit the form itself.
    event.preventDefault();
    return $934e8ad3e8eb8cf3$var$t.set("card", "shared", "estimate", window.estimateSize.value).then(function() {
        $934e8ad3e8eb8cf3$var$t.closePopup();
    });
});
$934e8ad3e8eb8cf3$var$t.render(function() {
    $934e8ad3e8eb8cf3$var$t.sizeTo("#edit-date").done();
});

});


//# sourceMappingURL=change-date-dialog.bad6e361.js.map
