import { expect } from 'chai';

import Trie from '../lib/Trie'
import Node from '../lib/Node'
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

let trie;

  beforeEach(() => {
    trie = new Trie();
  });

describe('Insert', () => {
	it('should take in a word as a parameter', () => {
		trie.insert('yolo');		
		expect(trie.totalWords).to.equal(1);
	});

	it('should increment wordcount by 1 each time', () => {
		trie.insert('sassfactory');
		trie.insert('detroit');
		expect(trie.totalWords).to.equal(2);
	});

	it('should insert a word when invoking insert', () => {
		trie.insert('hello');
		trie.insert('cool');
		trie.insert('popeyes');
		// console.log(JSON.stringify(trie.root, null, 4));
		expect(Object.keys(trie.root.children)).to.deep.equal(['h', 'c', 'p']);
	});
});

describe('Suggest', () => {
	it('should return an array of word suggestions based on recent searches', () => {
		trie.insert('hello');
		trie.insert('hellen');
		trie.insert('hendrix');
		trie.insert('henderson');
		trie.insert('hexagon');

		expect(trie.suggest('he')).to.deep.equal(['hello', 'hellen', 'hendrix', 'henderson', 'hexagon']);
		// console.log(trie.suggest('he'))
		// console.log(JSON.stringify(currentNode, null, 4));
		// console.log(Object.keys(trie.root.children));

	});
});

describe('Populate', () => {
	it('should return an array of word suggestions from dictionary database', () => {
		trie.populate(dictionary);
		console.log(trie.count())
		// expect(trie.suggest('wo')).to.deep.equal([ 'world', 'worlded', 'worldful', 'worldish'])
	it('should return an array of word suggestions from dictionary database', () => {
		
		trie.populate(dictionary);
	});
});






















// describe('TRIE', () => {
//   let trie;

//   beforeEach(() => {
//     trie = new Trie();
//   });

//   it('should exist', () => {
//     expect(trie).to.exist;
//   })

//   it('should start with zero elements', () => {
//     expect(trie.totalWords).to.equal(0);
//   });

//   it('should set its default root to empty object', () => {
//     expect(trie.root.children).to.deep.eq({});
//   });

//   it('should increase totalWords each time we instantiate a new word', () => {
//     expect(trie.totalWords).to.eq(0);
//     trie.insert('word')
//     expect(trie.totalWords).to.eq(1)
//   });

// it ('should create a new branch for each unique first letter', () => {
//     trie.insert ('hello');
//     trie.insert ('cool')
//     trie.insert ('loop')
//     // console.log(JSON.stringify(trie, null, 4))
//     expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'l' ]);
//   });


//  });






























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