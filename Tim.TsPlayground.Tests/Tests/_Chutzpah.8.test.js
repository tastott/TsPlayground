/// <reference path="../qunit.d.ts" />
/// <reference path="../Scripts/Library.d.ts"/>
define(["require", "exports", '../Scripts/Library'], function(require, exports, Greeter) {
    QUnit.module('Library');

    test("Greeter Test", function () {
        var element = new HTMLElement();
        var g = new Greeter(element);

        g.start();

        ok(element.innerHTML);
    });
});
