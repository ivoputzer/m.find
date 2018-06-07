const {resolve} = require('path')
const {promisify} = require('util')
const {readdir, lstat} = require('fs')

const read = promisify(readdir)
const stat = promisify(lstat)

Object.assign(exports, {find, flatten, filter, walk})

function find (dirname, options) {
  return read(dirname)
    .then(filter(options))
    .then(walk(dirname, options))
    .then(flatten(options))
}

function flatten (options, {prototype: {concat}} = Array) {
  return paths => concat.apply([], paths)
}

function filter ({filter} = {filter: Boolean}) {
  return paths => paths.filter(filter)
}

function walk (dirname, options) {
  return paths => Promise.all(
    paths.map(filename => {
      const path = resolve(dirname, filename)
      return stat(path).then(info => info.isDirectory() ? exports.find(path, options) : path)
    })
  )
}
