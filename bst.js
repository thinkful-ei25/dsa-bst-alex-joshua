'use strict';

class BST{
  constructor(key=null, value=null, parent=null){
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.key = key;
    this.value=value;
  }

  insert(key, value){
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if(key > this.key){
      if(this.right === null){
        this.right = new BST(key, value, this);
      } 
      else{
        this.right.insert(key, value);
      }
    }
    else{
      if(this.left === null){
        this.left = new BST(key, value, this);
      } 
      else{
        this.left.insert(key, value);
      }
    }
  }

  find(key){
    if(this.key === key){
      return this.value;
    }
    else if(key > this.key && this.right){
      return this.right.find(key);
    }
    else if(key < this.key && this.left){
      return this.left.find(key);
    }
    else{
      throw new Error('Key error');
    }
  }

  remove(key){
    //node with two children
    if(key === this.key){
      if(this.left && this.right){
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //node with one child (left)
      else if(this.left){
        this._replaceWith(this.left);
      }
      //node with one child (right)
      else if(this.right){
        this._replaceWith(this.right);
      }
      //node with no children
      else{
        this._replaceWith(null);
      }
    }
    else if(key > this.key && this.right){
      this.right.remove(key);
    }
    else if(key < this.key && this.left){
      this.left.remove(key);
    }
    else{
      throw new Error('Key Error');
    }

  }

  _findMin(){
    if(!this.left){
      return this;  
    }
    return this.left._findMin();
  }

  _replaceWith(node){
    if(this.parent){
      if(this === this.parent.left){
        this.parent.left = node;
      }
      else if(this === this.parent.right){
        this.parent.right = node;
      }

      if(node){
        node.parent = this.parent;
      }
    }
    else {
      if (node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else{
        this.key= null;
        this.value = null;
        this.left= null;
        this.right = null;
      }
    }
  }

}

module.exports = BST;