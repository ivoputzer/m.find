const {equal, deepEqual} = require('assert')

test('exports.find', () => {
  const {find} = require('..')

  test('is callable', () => {
    equal(typeof find, 'function')
  })

  test.skip('defaults to `process.cwd` when no `dirname` is provided')
  test.skip('defaults to `Boolean` when no `options.filter` is provided')
})

test('exports.flatten', () => {
  const {flatten} = require('..')

  test('is callable', () => {
    equal(typeof flatten, 'function')
  })

  test('returns closure', () => {
    const fn = flatten()
    equal(typeof fn, 'function')
  })

  test('flattens nested array structures', () => {
    const fn = flatten()
    deepEqual(fn(['a', 'b', ['c'], 'd', ['e']]), ['a', 'b', 'c', 'd', 'e'])
  })

  test('does not flatten deeply nested array structures', () => {
    const fn = flatten()
    deepEqual(fn(['a', [['b']], 'c']), ['a', ['b'], 'c'])
  })
})

test('exports.walk', () => {
  const {walk} = require('..')

  test('is callable', () => {
    equal(typeof walk, 'function')
  })

  test('returns closure', () => {
    const fn = walk()
    equal(typeof fn, 'function')
  })
})

test('exports.filter', () => {
  const {filter} = require('..')

  test('is callable', () => {
    equal(typeof filter, 'function')
  })

  test('returns closure', () => {
    const fn = filter()
    equal(typeof fn, 'function')
  })
})
