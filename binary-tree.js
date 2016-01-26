'use strict';

class BinaryTree {

	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root === null) {							//if tree is clear, add data to root 
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

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {
		return this.root === null ? true : false;
	}
}
