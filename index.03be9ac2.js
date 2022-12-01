function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

var $0bcc0c868d956c45$exports = {};

(parcelRequire("aKzDW")).register(JSON.parse('{"aykEV":"index.03be9ac2.js","f1szL":"calendar-week-fill.f6a5fd4c.svg","ca24M":"calendar-week.8804ad50.svg"}'));

var $1a30e11e72f9c8d4$exports = {};

$1a30e11e72f9c8d4$exports = new URL((parcelRequire("aKzDW")).resolve("f1szL"), import.meta.url).toString();


var $f4b97d8462087a84$exports = {};

$f4b97d8462087a84$exports = new URL((parcelRequire("aKzDW")).resolve("ca24M"), import.meta.url).toString();


TrelloPowerUp.initialize({
    "card-buttons": function(t, options) {
        return [];
    },
    "board-buttons": function(t, opts) {
        return [
            {
                // we can either provide a button that has a callback function
                icon: {
                    dark: new URL($1a30e11e72f9c8d4$exports),
                    light: new URL($f4b97d8462087a84$exports)
                },
                text: "Callback",
                callback: (t)=>t.popup({
                        title: "Edit due dates",
                        url: "dialog.html"
                    }),
                condition: "signedIn"
            }
        ];
    }
});


//# sourceMappingURL=index.03be9ac2.js.map
