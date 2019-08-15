exports.Tree = class{
    constructor(root){
        this.root = new Node(root);
    }

    addChild(data, additionalData){
        this.root.addChild(data, additionalData);
    }
}
    class Node{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }
    
    addChild(data, additionalData){
        var newNode = new Node(data);
        newNode.parent = this;
        this.children.push(newNode);
    }
}
exports.Remainder = function(i, input){
    var before = input.slice(0,i);
    var after = input.slice(i-input.length+1);
    if(i == input.length -1)
    after = "";
    return before + after;
}