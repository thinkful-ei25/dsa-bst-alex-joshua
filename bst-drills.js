'use strict';
const BST = require('./bst');

function findHeight(node) {
  if (!node) {
    return 0;
  }

  var leftHeight = findHeight(node.left);
  console.log(leftHeight + ' isthe left');
  var rightHeight = findHeight(node.right);
  console.log(rightHeight + ' is the right');
  return Math.max(leftHeight, rightHeight) + 1;
}

/* 
input: BST
output: boolean (true/false)

true
      9
    /   \
  5       13
 / \     /  \
3   7   11   15

true
     3
  /    \
1       4
  \     / \
  2    5  9
          /
          7


false (values mis-sorted)
          9
        /   \
      11      7
    /          \
  5             13
/                 \
3                  15

left nodes are less than current node
right nodes are more than current node

check the left nodes are always less than current
  if left.key > current.key
  return false 

check right nodes are always less than current 
  if right.key < current.key
  return false

if right and left keys okay, 
  check height of max and min
  if max.height - min.height > abs(1)
  return false

else return true
*/

function checkBST(bst) {
  if (bst.right === null || bst.left === null) {
    return;
  }
  if (bst.right < bst.key) {
    return false;
  } else if (bst.left > bst.key) {
    return false;
  } else {
    checkBST(bst.left);
    checkBST(bst.right);
  }
  return true;
}

/* 
input: 
      9
    /   \
  5       13
 / \     /  \
3   7   11   15

output: 11

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

output: 5

find the maximum value of the tree
  if there is a max.left,
    determine greater values between max, max.parent, max.left
    return 3rd greatest value
  if max is childless,
    determin greater values between max, max.parent, max.parent.left
    return 3rd greatest value
*/

function thirdLargestNode(bst) {
  let max = bst._findMax();

  if (max.left) {
    return Math.min(max.key, max.left.key, max.parent.key);
  }
  return Math.min(max.key, max.parent.key, max.parent.left.key);
}


function main() {
  const tree = new BST();
  const badTreeVal = new BST();
  const tree2 = new BST();

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
  for (let i = 0; i < treeArr.length; i++) {
    badTreeVal.insert(treeArr[i].key, treeArr[i].value);
  }

  let tree2Arr = [9, 5, 13, 3, 7, 11, 15];
  for (let i = 0; i < tree2Arr.length; i++) {
    tree2.insert(tree2Arr[i], null);
  }

  badTreeVal.left = 4;
  badTreeVal.right = 1;

  console.log(findHeight(tree));

  console.log(checkBST(tree));
  console.log(checkBST(badTreeVal));

  console.log(thirdLargestNode(tree));
  console.log(thirdLargestNode(tree2));
}

main();


/*
          3
        1   4
         2    6
             5   9
                7
*/