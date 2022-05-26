"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var INode = /** @class */ (function () {
    function INode(key, value) {
        if (key === undefined || value === undefined) {
            this.key = null;
            this.value = null;
        }
        else {
            (this.key = key), (this.value = value);
        }
    }
    return INode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.remove = function (key) {
            if (_this.head == key) {
                if (_this.head == _this.tail) {
                    _this.head = null;
                    _this.tail = null;
                    --_this.length;
                }
                else {
                    var secondNode = _this.head.next;
                    var thirdNode = secondNode.next;
                    _this.head.key = secondNode.key;
                    _this.head.value = secondNode.value;
                    _this.head.next = thirdNode;
                    secondNode.next = null;
                    --_this.length;
                }
            }
            var prevNode = _this.head;
            var currNode = _this.head.next;
            while (currNode) {
                if (currNode.key == key) {
                    if (currNode == _this.tail) {
                        _this.tail = prevNode;
                    }
                    prevNode.next = currNode.next;
                    currNode.next = null;
                    --_this.length;
                    return;
                }
                return undefined;
            }
        };
        this.findNode = function (key, node) {
            var currNode = node;
            while (currNode) {
                if (currNode.key === key) {
                    return currNode;
                }
                currNode = currNode.next;
            }
            return undefined;
        };
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function (key, value) {
        var node = new INode(key, value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        ++this.length;
        return node;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
