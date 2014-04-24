/// <reference path="../qunit.d.ts" />
/// <reference path="../Scripts/Library.d.ts"/>

import lib = require('../Scripts/Library');
QUnit.module('Library');

test("Greeter Test", () => {
    var g = new lib.Giblet();

    var result = g.Gibletize(2);

    equal(result, 4);
    
});

