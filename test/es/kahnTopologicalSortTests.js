'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { kahnTopologicalSort } from '../../es'

const expect = chai.expect

// Test
describe('Kahn Topological Sort Algorithm: KahnTopologicalSort(edges)', () => {
  it(`Should return a valid topological sorting of the input edges' graph's nodes.`, () => {
    expect(kahnTopologicalSort([['A', 'B'], ['A', 'C'], ['B', 'C'], ['F', 'D'], ['D', 'E'], ['C', 'E']])).to.deep.equal(['F', 'D', 'A', 'B', 'C', 'E'])
  })

  it(`Should throw an exeption if the edges' graph is not a directed acyclic graph.`, () => {
    expect(() => kahnTopologicalSort([['A', 'B'], ['B', 'A'], ['A', 'C']])).to.throw()
  })

  it('Should return null if no edges are provided', () => {
    expect(kahnTopologicalSort()).to.equal(null)
  })
})
