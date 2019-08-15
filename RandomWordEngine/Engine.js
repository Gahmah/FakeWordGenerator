const {MyTree, Remainder} = require('./MyTree');
exports.Fill = function(input) {
    
    var trees = [];
    for(var i = 0; i < input.length; i++)
        trees.push(GetTree(input.charAt(i), Remainder(i, input)));
    return trees;
}

//create tree
//add root
//add child for each remainder
//add child to each child for each remainder after

function GetTree(character, rest){
    var tree = new MyTree.Tree(character);
    for(var i = 0; i < rest.length; i++)
        tree.addChild(rest.charAt[i], Remainder(i,rest));
    return tree;
}


