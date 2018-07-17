const {resolve} = require('path')
const {promisify} = require('util')
const {readdir, lstat} = require('fs')
const {flatten} = require('m.flatten')

const read = promisify(readdir)
const stat = promisify(lstat)

exports.find = (dirname, options, {find, filter, walk} = exports) => {
  return read(dirname)
    .then(filter(options))
    .then(walk(dirname, options))
    .then(flatten)
}

exports.filter = ({filter} = {filter: Boolean}) => {
  return paths => paths.filter(filter)
}

exports.walk = (dirname, options, {find} = exports) => {
  return paths => Promise.all(
    paths.map(filename => {
      const path = resolve(dirname, filename)
      return stat(path).then(info => info.isDirectory() ? find(path, options) : path)
    })
  )
}
