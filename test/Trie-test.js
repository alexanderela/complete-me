import { expect } from 'chai';
import Trie from '../lib/Trie'
import Node from '../lib/Node'

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should set its default root to empty object', () => {
    expect(trie.root.children).to.deep.eq({});
  });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.eq(0);
    trie.insert('word')
    expect(trie.totalWords).to.eq(1)
  });

it ('should insert word correctly when calling insert', () => {
    trie.insert ('hello');
    trie.insert ('cool')
    trie.insert ('loop')
    // console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'l' ]);
  });


 });






























// const { assert } = require('chai');
// const Trie = require('../lib/Trie.js');
// const Node = require('../lib/Node.js');
// let trie;

    
// beforeEach(() => {
// 	trie = new Trie;
// });

// // Phase 1

//  describe('test', function() {
//    it('should return true', function() {
//      assert.equal(true, true);
//    });

//  describe('count', function() {
//  		it('should keep count of how many words have been inserted', function(){
//  			trie.insert('word1');
//  			trie.insert('word2')
//  			assert.equal(trie.totalWords, 2);
//  		});
//  });

//  describe('insert', function() {
//  		it('should take a string as a parameter', function() {
//  			trie.insert('word');
//  			assert.isNotNull(trie.head);
//  		});
//  });

// // Phase 2

// 	describe('', function() {
// 		it('should', function() {

// 		});
// 	});

// 	describe('', function() {
// 	it('should', function() {

// 		});
// 	});




//  });