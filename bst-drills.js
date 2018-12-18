'use strict';
const BST = require('./bst');
function findHeight(node){
  if(!node){
    return 0;
  }

  var leftHeight = findHeight(node.left);
  console.log(leftHeight + ' isthe left');
  var rightHeight = findHeight(node.right);
  console.log(rightHeight + ' is the right');
  return Math.max(leftHeight, rightHeight) + 1;
}

function main(){
  const tree = new BST();
  const treeArr = [
    {key: 3,
      value: 3},
    {key: 1,
      value: 1},
    {key: 4,
      value: 4}, 
    {key: 6,
      value: 6},
    {key: 9,
      value: 9},
    {key: 2,
      value: 2},
    {key: 5,
      value: 5},
    {key: 7,
      value: 7},];
  for(let i = 0; i < treeArr.length; i++){
    tree.insert(treeArr[i].key, treeArr[i].value);
  }
  console.log(findHeight(tree));
}

main();


/*
          3
        1   4
         2    6
             5   9
                7             
*/