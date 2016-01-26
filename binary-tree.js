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
			//console.log(currentNode.data);					//debug string

			if (data < currentNode.data) {					//this 'if' statement search for lowest node element
				if (currentNode.left !== null) {
					currentNode = currentNode.left;
				} else {
					currentNode.left = new Node(data);
					//this.count++;
					break;
				}
			}

			if (data > currentNode.data) {					//this 'if' statement search for highest node element
				if (currentNode.right !== null) {
					currentNode = currentNode.right;
				} else {
					currentNode.right = new Node(data);
					//this.count++;
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
			//console.log(currentNode.data);					//debug string

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

		while (true) {							//search for required node	

			//at first we are sift the root
			if (data === this.root.data) {
				break;
			}

			if (currentNode.left.data === data) {					//is the left node needed?
				parentNode = currentNode;
				currentNode = currentNode.left;
				break;
			} else if (currentNode.right.data === data) {				//is the right node needed?
				parentNode = currentNode;
				currentNode = currentNode.right;
				break;
			} else {
				if (data < currentNode.data) {					//this 'if' statement search for lowest node element
					if (currentNode.left !== null) {
						currentNode = currentNode.left;
					} 
				}

				if (data > currentNode.data) {					//this 'if' statement search for highest node element
					if (currentNode.right !== null) {
						currentNode = currentNode.right;
					} 
				}
			}
		}

		// root node
		if (parentNode === null) {
			//debugger;
			if (this.root.left === null && this.root.right === null) {
				//debugger;
				this.root = null;
				//this.count--;
				return;
			}
			// if root element has at least one child
			if (this.root.left !== null || this.root.right !== null) {
				//debugger;
				if (this.root.left !== null) {

				}
			}
		}

		//delete node without children
		if (currentNode.left === null && currentNode.right === null) {
			//debugger;
			if (currentNode.data < parentNode.data) {
				parentNode.left = null;
			} else {
				parentNode.right = null;
			}
			//this.count--;
			return;
		}

		//delete node with one left child
		if (currentNode.left !== null && currentNode.right === null) {
			//debugger;
			if (currentNode.data < parentNode.data) {
				parentNode.left = currentNode.left;
			} else {
				parentNode.right = currentNode.left;
			}
			//this.count--;
			return;
		}

		//delete node with one right child
		if (currentNode.left === null && currentNode.right !== null) {
			//debugger;
			if (currentNode.data < parentNode.data) {
				parentNode.left = currentNode.right;
			} else {
				parentNode.right = currentNode.right;
			}
			//this.count--;
			return;
		}

	}

	size() {
		debugger;
		var move = function(node) {
			var count = 0;
			if (node.left !== null) {
				count += move(node.left);
			}
			if (node.right !== null) {
				count += move(node.right);
			}
			return count; 
		};

		return move(this.root);
	}

	isEmpty() {
		return this.root === null ? true : false;
	}
}
