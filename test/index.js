const {equal} = require('assert')

test('exports', () => {
  test('.find', () => {
    const {find} = require('..')

    test('is callable', () => {
      equal(typeof find, 'function')
    })

    test.skip('defaults to `process.cwd` when no `dirname` is provided')
    test.skip('defaults to `Boolean` when no `options.filter` is provided')
  })

  test('.walk', () => {
    const {walk} = require('..')

    test('is callable', () => {
      equal(typeof walk, 'function')
    })

    test('returns closure', () => {
      const fn = walk()
      equal(typeof fn, 'function')
    })
  })

  test('.filter', () => {
    const {filter} = require('..')

    test('is callable', () => {
      equal(typeof filter, 'function')
    })

    test('returns closure', () => {
      const fn = filter()
      equal(typeof fn, 'function')
    })
  })
})
