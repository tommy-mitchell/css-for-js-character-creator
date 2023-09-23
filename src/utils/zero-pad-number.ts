/**
 * Pad a number with `0`s.
 *
 * @example
 * zeroPadNumber(5)
 * //=> "05"
 *
 * zeroPadNumber(20, 4)
 * //=> "0020"
 */
export const zeroPadNumber = (n: number, spaces = 2) => String(n).padStart(spaces, "0");
