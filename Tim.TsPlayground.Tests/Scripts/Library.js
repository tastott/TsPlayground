define(["require", "exports"], function(require, exports) {
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                return _this.span.innerHTML = new Date().toUTCString();
            }, 500);
        };

        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;

    var Giblet = (function () {
        function Giblet() {
        }
        Giblet.prototype.Gibletize = function (value) {
            return value * 2;
        };
        return Giblet;
    })();
    exports.Giblet = Giblet;
});
//# sourceMappingURL=Library.js.map
