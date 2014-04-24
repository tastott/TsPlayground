/// <reference path="../qunit.d.ts" />
/// <reference path="../Scripts/Library.d.ts"/>
define(["require", "exports", '../Scripts/Library'], function(require, exports, lib) {
    QUnit.module('Library');

    test("Greeter Test", function () {
        var g = new lib.Giblet();

        var result = g.Gibletize(2);

        equal(result, 4);
    });
});
//# sourceMappingURL=Test.js.map
