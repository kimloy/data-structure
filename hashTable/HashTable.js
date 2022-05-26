"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        var _this = this;
        this.generateHashCode = function (key) {
            var stringSum = 0;
            for (var i = 0; i < key.length; i++) {
                stringSum += key.charCodeAt(i);
            }
            return stringSum % _this.size;
        };
        this.table = [size];
        this.size = size;
        for (var i = 0; i < size; i++) {
            this.table[i] = new LinkedList_1.LinkedList();
        }
    }
    HashTable.prototype.insert = function (key, value) {
        var hashCode = this.generateHashCode(key);
        var tableIndex = hashCode % this.size;
        this.table[tableIndex].append(key, value);
    };
    HashTable.prototype.get = function (key) {
        var hashCode = this.generateHashCode(key);
        var tableIndex = hashCode % this.size;
        var indexNode = this.table[tableIndex];
        var reqNode = indexNode.findNode(key, indexNode);
    };
    return HashTable;
}());
var ht = new HashTable(20);
ht.insert("Paul", "1234");
ht.insert("Paul", "5678");
console.log(ht);
