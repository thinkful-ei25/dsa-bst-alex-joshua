'use strict';
const BST = require('./bst');

/*
input:
     3
  /    \
1       4
  \        \
   2        6
          / \
          5  9
             /
            7
*/
function main() {
  const tree = new BST();
  const tree2 = new BST();
  let tree2Arr = [9, 5, 13, 3, 7, 11, 15];
  for (let i = 0; i < tree2Arr.length; i++) {
    tree2.insert(tree2Arr[i], null);
  }
  const treeArr = [
    {
      key: 3,
      value: 3
    },
    {
      key: 1,
      value: 1
    },
    {
      key: 4,
      value: 4
    },
    {
      key: 6,
      value: 6
    },
    {
      key: 9,
      value: 9
    },
    {
      key: 2,
      value: 2
    },
    {
      key: 5,
      value: 5
    },
    {
      key: 7,
      value: 7
    },
  ];
  for (let i = 0; i < treeArr.length; i++) {
    tree.insert(treeArr[i].key, treeArr[i].value);
  }
  console.log(isBalanced(tree));
  console.log(isBalanced(tree2));

}

main();


function isBalanced(tree){
  if(tree === null){
    return true;
  }
  let lh = findHeight(tree.left);
  let rh = findHeight(tree.right);
  
  return ((Math.abs(lh-rh) <= 1) && (isBalanced(tree.left)) && (isBalanced(tree.right)));
}

function findHeight(node) {
  if (!node) {
    return false;
  }

  var leftHeight = findHeight(node.left);
  var rightHeight = findHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}