"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
var CustomWebSocketClient = /** @class */ (function () {
    function CustomWebSocketClient(name) {
        this.name = name;
    }
    return CustomWebSocketClient;
}());
var SomeClass = /** @class */ (function (_super) {
    __extends(SomeClass, _super);
    function SomeClass() {
        return _super.call(this, "welcome to my youtube channel") || this;
    }
    SomeClass.prototype.subscribe = function () {
        console.log("i am subscribed");
    };
    SomeClass.prototype.unsubscribe = function () {
        console.log("i am not subscirbed");
    };
    return SomeClass;
}(CustomWebSocketClient));
var d = new SomeClass();
d.subscribe();
d.unsubscribe();
