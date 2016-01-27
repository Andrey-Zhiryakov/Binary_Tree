'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(data) {
		if (this.isEmpty()) {							//if tree is clear, add data to root 
			this.root = new Node(data);
			return;
		}
		var currentNode = this.root;	
		while (true) {								// look for node, that data is bigger or smaller than receive data
			if (data < currentNode.data) {					//this 'if' statement search for lowest node element
				if (currentNode.left !== null) {
					currentNode = currentNode.left;
				} else {
					currentNode.left = new Node(data);
					break;
				}
			}
			if (data > currentNode.data) {					//this 'if' statement search for highest node element
				if (currentNode.right !== null) {
					currentNode = currentNode.right;
				} else {
					currentNode.right = new Node(data);
					break;
				}
			}
			if (data === currentNode.data) {
				console.log("Already exist!");
				break;
			}
		}
	}
	contains(data) {
		if (this.isEmpty()) {
			return false;
		}
		var currentNode = this.root;	
		while (true) {								// look for node, that data is bigger or smaller than receive data
			if (data < currentNode.data) {					//this 'if' statement search for lowest node element
				if (currentNode.left !== null) {
					currentNode = currentNode.left;
				} else {
					return false;
				}
			}
			if (data > currentNode.data) {					//this 'if' statement search for highest node element
				if (currentNode.right !== null) {
					currentNode = currentNode.right;
				} else {
					return false;
				}
			}
			if (data === currentNode.data) {
				return true;
			}
		}
	}
	remove(data) {
		if (this.isEmpty() || !this.contains(data)) {
			return;
		} 
		var currentNode = this.root;
		var parentNode = null;
		while (currentNode.data !== data) {							//search for required node	
			parentNode = currentNode;
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		if (currentNode.left === currentNode.right) {
			if (parentNode === null) {
				this.root = null;
				return;
			}
			if (parentNode.left === currentNode) {
				parentNode.left = null;
			} else {
				parentNode.right = null;
			}
		}
		if (currentNode.left !== null || currentNode.right !== null) {
			if (currentNode.left !== null) {
				var childNode = currentNode.left;
			} else {
				childNode = currentNode.right;
			}
			if (parentNode === null) {
				this.root = childNode;
			} else {							//not root element
				if (parentNode.left === currentNode) {
					parentNode.left = childNode;
				} else {
					parentNode.right = childNode;
				}
			}
		} else if (currentNode.left !== null && currentNode.right !== null) {
			var leftmostNode = currentNode.right;
			var leftmostNodeParent = currentNode;
			while (leftmostNode.left !== null) {
				leftmostNodeParent = leftmostNode;
				leftmostNode  = leftmostNode.left;
			}
			currentNode.data = leftmostNode.data;
			leftmostNodeParent.left = null;
		}
	}
	size() {
		if (this.root === null) {
			return 0;
		}
		var count = 0;
		var counter =  function(node) {	
			if (node.left !== null) {
				counter(node.left);
			}
			if (node.right !== null) {
				counter(node.right);
			}
			count++;
		};
		counter(this.root);
		return count;
	}
	isEmpty() {
		return this.root === null;
	}
}