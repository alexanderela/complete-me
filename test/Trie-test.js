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
	});
});

describe('Populate', () => {
	it('should populate trie with dictionary dataset', () => {
		expect(trie.totalWords).to.equal(0);
		trie.populate(dictionary);
		expect(trie.totalWords).to.equal(235886);
	});
});