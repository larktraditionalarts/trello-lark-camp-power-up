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
/* eslint-disable camelcase */ 
var $722MK = parcelRequire("722MK");
const $ca07812f76fb42aa$var$t = window.TrelloPowerUp.iframe((0, $722MK.appKey));
const $ca07812f76fb42aa$var$auth = ()=>{
    const { return_url: return_url  } = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop)=>searchParams.get(prop)
    });
    $ca07812f76fb42aa$var$t.getRestApi().authorize({
        scope: "read,write",
        return_url: return_url
    }).then(()=>$ca07812f76fb42aa$var$t.closePopup());
};
$ca07812f76fb42aa$var$t.render(()=>{
    document.querySelector("button").addEventListener("click", $ca07812f76fb42aa$var$auth, false);
});


//# sourceMappingURL=authorize.3104eda4.js.map
