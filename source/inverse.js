'use strict';

/** inverses array
 *  @param {!any[]}   arr    Array of any type
 *  @param {!number} shift  Number of elements from begin (end if negative) that shoud not be affected
 *  @returns {!any[]}        Result array
 */
const inverse = (old_arr, shift = 0) => {
    let arr = old_arr.slice()
    let l = Math.max(0, shift);
    let r = arr.length - 1 + Math.min(0, shift);
    for (; l < r; l++, r--) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    return arr;
};

/** inverses array
 *  @param {!any[]}   arr    Array of any type
 *  @param {!number} shift  Number of elements from begin (end if negative) that shoud not be affected
 *  @returns {!any[]}        Result array
 */
const inverse2 = (arr, shift = 0) =>
    (function (l, r) {
        return this.slice(0, l)
            .concat(this.slice(l, r).reverse())
            .concat(this.slice(r))
    }).call(arr, Math.max(0, shift), arr.length + Math.min(0, shift));