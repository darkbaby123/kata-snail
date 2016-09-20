function snail(array) {
  return walkEast(array)
}

function walkEast(array) {
  if (!array[0].length) return []
  return array[0].concat(walkSouth(array.slice(1)))
}

function walkSouth(array) {
  if (!array.length) return []
  const re = array.map(i => i[i.length - 1])
  const rest = array.map(i => i.slice(0, -1))
  return re.concat(walkWest(rest))
}

function walkWest(array) {
  if (!array.length) return []
  const re = array[array.length - 1].slice().reverse()
  const rest = array.slice(0, -1)
  return re.concat(walkNorth(rest))
}

function walkNorth(array) {
  if (!array.length) return []
  const re = array.map(i => i[0]).reverse()
  const rest = array.map(i => i.slice(1))
  return re.concat(walkEast(rest))
}

module.exports = snail
