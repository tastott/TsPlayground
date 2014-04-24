///<reference path="Library.d.ts"/>  This keeps Visual Studio happy.
define(["require", "exports", 'jquery', 'Library'], function(require, exports, $, lib) {
    $(document).ready(function () {
        var el = $('#content')[0];
        var greeter = new lib.Greeter(el);
        greeter.start();
    });
});
//# sourceMappingURL=app.js.map
