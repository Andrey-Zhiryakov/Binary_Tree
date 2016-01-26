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
			if (currentNode.left.data === data) {
				parentNode = currentNode;
				currentNode = currentNode.left;
				break;
			} else if (currentNode.right.data === data) {
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

		//delete node without children
		if (currentNode.left === null && currentNode.right === null) {
			//debugger;
			if (currentNode.data < parentNode.data) {
				parentNode.left = null;
			} else {
				parentNode.right = null;
			}
			return;
		}

		//delete node with one left child
		if (currentNode.left !== null && currentNode.right === null) {
			debugger;
			if (currentNode.data < parentNode.data) {
				parentNode.left = currentNode.left;
			} else {
				parentNode.right = currentNode.left;
			}
			return;
		}



	}

	size() {

	}

	isEmpty() {
		return this.root === null ? true : false;
	}
}
