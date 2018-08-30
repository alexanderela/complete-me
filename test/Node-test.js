import { expect } from 'chai';
import Node from '../lib/Node';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should default end to false', () => {
    expect(node.end).to.equal(false)
  })

  it('should default children to an empty object', () => {
    expect(node.children).to.deep.equal({});
  })

  // it('should have a word property', () => {
  // 	expect(node.word).to.exist;
  // })
})