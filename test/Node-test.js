const { assert, expect } = require('chai');
const Trie = require('../lib/Trie.js');
const Node = require('../lib/Node.js');
let node;

beforeEach(() => {
	node = new Node;
});

// Phase 1

describe('Node reference', function() {
	it('should have a property that references other nodes', function() {
		assert.equal(node.next, null);
	});
});


describe('Data representation', function() {

	it('should have a property that represents data', function() {
			const node = new Node('hello')
			expect(node.data).to.be.a('string');
	});
});
