const { Tree, Remainder } = require('./MyTree');
exports.Single = function(input, index){
   return RunForCharAt(input, index);
}
exports.Fill = function (input) {

    var words = [];
    for (var i = 0; i < input.length; i++) {
        words.push(RunForCharAt(input, i));
    }
    return words;
}

function RunForCharAt(input, index){
    var theseWords = [];
    var tree = GetTree(input.charAt(index), Remainder(index, input));
    theseWords.push(tree.getWords());
    return theseWords;
}

function GetTree(character, rest) {
    var tree = new Tree(character);
    for (var i = 0; i < rest.length; i++)
        tree.addChild(rest.charAt(i), Remainder(i, rest));
    return tree;
}

