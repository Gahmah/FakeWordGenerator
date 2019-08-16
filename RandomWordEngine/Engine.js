const { Tree, Remainder } = require('./MyTree');
exports.Fill = function (input) {

    var words = [];
    for (var i = 0; i < input.length; i++) {
        var tree = GetTree(input.charAt(i), Remainder(i, input));
        words.push(tree.getWords());
    }
    return words;
}

function GetTree(character, rest) {
    var tree = new Tree(character);
    for (var i = 0; i < rest.length; i++)
        tree.addChild(rest.charAt(i), Remainder(i, rest));
    return tree;
}


