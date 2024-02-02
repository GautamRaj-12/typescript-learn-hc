"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
