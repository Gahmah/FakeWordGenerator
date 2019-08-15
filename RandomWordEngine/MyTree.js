exports.Tree = class{
    constructor(root){
        this.root = new Node(root);
    }

    addChild(data, additionalChildren){
        this.root.addChild(data, additionalChildren);
    }
}
    class Node{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }
    
    addChild(data, additionalChildren){
        var newNode = new Node(data);
        newNode.parent = this;
        this.children.push(newNode);
        for(var i = 0; i < additionalChildren.length; i++){
            newNode.addChild(additionalChildren.charAt[i], Remainder[i]);
        }
    }
}
exports.Remainder = function(i, input){
    var before = input.slice(0,i);
    var after = input.slice(i-input.length+1);
    if(i == input.length -1)
    after = "";
    return before + after;
}