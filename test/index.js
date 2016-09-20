const solution = require('../lib/solution_1')

describe('solution', () => {
  function test(orig, dest, { focus = false } = {}) {
    const text = `${JSON.stringify(orig)} => ${JSON.stringify(dest)}`
    const fn = () => {
      expect(solution(orig)).toEqual(dest)
    }
    focus ? it.only(text, fn) : it(text, fn)
  }

  test([[]], [])

  test([[1]], [1])

  test(
    [
      [1, 2],
      [3, 4]
    ],
    [1, 2, 4, 3]
  )

  test(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [1, 2, 3, 6, 9, 8, 7, 4, 5]
  )

  test(
    [
      [ 1,  2,  3,  4],
      [ 5,  6,  7,  8],
      [ 9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  )
})
