exports.Tree = class {
    constructor(root) {
        this.root = new Node(root);
    }

    addChild(data, additionalChildren) {
        this.root.addChild(data, additionalChildren);
    }
    getWords() {
        var words = [];
        this.root.buildData("", words);
        return words
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }

    buildData(initialValue, words) {
        var nextValue = initialValue + this.data;
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].buildData(nextValue, words);
        }
        if (this.children.length == 0)
            words.push(nextValue);
    }

    addChild(data, additionalChildren) {
        var newNode = new Node(data);
        newNode.parent = this;
        this.children.push(newNode);
        for (var i = 0; i < additionalChildren.length; i++)
            newNode.addChild(additionalChildren.charAt(i), module.exports.Remainder(i, additionalChildren));
    }
}
exports.Remainder = function (i, input) {
    var before = input.slice(0, i);
    var after = input.slice(i - input.length + 1);
    if (i == input.length - 1)
        after = "";
    return before + after;
}