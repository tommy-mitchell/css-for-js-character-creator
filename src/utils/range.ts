/**
 * Generate an array of integers from `0` (inclusive) to `n` (exclusive).
 *
 * @example
 * range(4)
 * //=> [0, 1, 2, 3]
 */
export const range = (n: number) => [...Array.from({ length: n }).keys()];
