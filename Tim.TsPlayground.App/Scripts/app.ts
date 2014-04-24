///<reference path="Library.d.ts"/>  This keeps Visual Studio happy.

import $ = require('jquery')
import lib = require('Library') //This is all the compiler needs but NOTE this fucker is case-sensitive!


$(document).ready(() =>{
    var el = $('#content')[0];
    var greeter = new lib.Greeter(el);
    greeter.start();
});
