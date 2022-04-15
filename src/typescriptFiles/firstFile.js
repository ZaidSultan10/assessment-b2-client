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
var websocket_1 = require("websocket");
var message = 'Hello World';
console.log(message);
var parsedString;
var socket = new websocket_1.w3cwebsocket('ws://localhost:5000');
socket.onopen = function () {
    console.log('WebSocket Client Connected');
};
socket.onmessage = function (message) {
    var parsedBeat = JSON.parse(message.data);
    console.log('my parsedBeat >>> ', parsedBeat);
    parsedString = parsedBeat.type;
    console.log('my messgaeg >>> ', parsedString);
};
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
        socket.send(JSON.stringify({ type: "Subscribe" }));
        console.log("i am subscribed");
    };
    SomeClass.prototype.unsubscribe = function () {
        socket.send(JSON.stringify({ type: "Unsubscribe" }));
        console.log("i am not subscirbed");
    };
    return SomeClass;
}(CustomWebSocketClient));
var d = new SomeClass();
if (parsedString !== '') {
    setTimeout(function () {
        d.unsubscribe();
    }, 2000);
}
// d.subscribe();
// d.unsubscribe();
