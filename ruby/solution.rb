# Steps
# 1. Get the first line of the 2-d array
# 2. For the rest of the 2-d array, rotate left 90 degree and "snail" again
def snail(array)
  array.empty? ? [] : array[0] + snail(array[1..-1].transpose.reverse)
end
