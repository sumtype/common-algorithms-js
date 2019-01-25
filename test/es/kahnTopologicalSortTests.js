'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { kahnTopologicalSort } from '../../es'

const expect = chai.expect

// Test
describe('Kahn Topological Sort Algorithm: KahnTopologicalSort(dependenciesArray)', () => {
  it('Should return an array of elements been sorted based on their dependencies', done => {
    const input = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
      ['F', 'D'],
      ['D', 'E'],
      ['C', 'E']
    ]
    const output = ['F', 'D', 'A', 'B', 'C', 'E']
    const result = kahnTopologicalSort(input)
    expect(output.toString()).to.eql(result.toString())
    done()
  })

  it('Shuld throw exeption in dependencies contains cycle', () => {
    const input = [['A', 'B'], ['B', 'A'], ['A', 'C']]
    expect(() => { kahnTopologicalSort(input) }).to.throw(Error)
  })

  it('Should return null if the input array is not provided.', () => {
    expect(kahnTopologicalSort()).to.eql(null)
  })
})
