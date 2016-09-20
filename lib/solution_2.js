function snail(array, direction = 'E', acc = []) {
  if (!array.length || !array[0].length) return acc.concat([])

  switch (direction) {
    case 'E':
      return snail(
        array.slice(1),
        'S',
        acc.concat(array[0])
      )
    case 'S':
      return snail(
        array.map(i => i.slice(0, -1)),
        'W',
        acc.concat(array.map(i => i[i.length-1]))
      )
    case 'W':
      return snail(
        array.slice(0, -1),
        'N',
        acc.concat(array[array.length-1].slice().reverse())
      )
    case 'N':
      return snail(
        array.map(i => i.slice(1)),
        'E',
        acc.concat(array.map(i => i[0]).reverse())
      )
  }
}

module.exports = snail
