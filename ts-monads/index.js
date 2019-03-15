"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsmonad_1 = require("tsmonad");
var turns_out_to_be_100 = tsmonad_1.Maybe.just(10)
    .caseOf({
    just: function (n) { return n * n; },
    nothing: function () { return -1; }
});
var turns_out_to_be_nothing = tsmonad_1.Maybe.nothing()
    .caseOf({
    just: function (str) { return str; },
    nothing: function () { return 'nothing'; }
});
//fmap
var result = tsmonad_1.Maybe.just(5)
    .lift(function (numb) { return numb + 5; })
    .caseOf({
    just: function (val) { return val; },
    nothing: function () { return 0; }
});
var val = tsmonad_1.Maybe.just(5);
var myMonad = val.bind(function (val) { return tsmonad_1.Maybe.just(val + 10); });
//console.log(result)
//console.log(turns_out_to_be_100)
//console.log(turns_out_to_be_nothing)
console.log(myMonad);
