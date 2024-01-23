class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add = (data) => {
    const newNode = new Node(data);
    const root = this.root;

    if (root === null) {
      this.root = newNode;
      return;
    } else {
      const searchTree = (root) => {
        if (newNode.data < root.data) {
          if (root.left === null) {
            root.left = newNode;
            return;
          } else if (root.left !== null) {
            return searchTree(root.left);
          }
        } else if (newNode.data > root.data) {
          if (root.right === null) {
            root.right = newNode;
            return;
          } else if (root.right !== null) {
            return searchTree(root.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(root);
    }
  };

  min = () => {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }

    return current;
  };

  max = () => {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  };

  find = (data) => {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  };

  isPresent = (data) => {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  };

  remove = (data) => {
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }

        // node has no left child
        if (node.left == null) {
          return node.right;
        }

        // node has no right child
        if (node.right == null) {
          return node.left;
        }

        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  clear = () => {
    this.root = null;
  };
}

export default BinarySearchTree;

const bst = new BinarySearchTree();
bst.add(17);
bst.add(3);
bst.add(28);
bst.add(1);

export { bst };
