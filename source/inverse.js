'use strict';

/** inverses array
 *  @param {any[]} xs - Array of any type
 *  @param {!number} n - Number of elements from begin (end if negative) that shoud not be affected
 */
const inverse = (xs, n = 0) => {
    let l = Math.max(0, n);
    let r = xs.length - 1 + Math.min(0, n);
    for (; l < r; l++, r--) {
        let t = xs[l];
        xs[l] = xs[r];
        xs[r] = t;
    }
    return xs;
};