'use strict';

/** inverses array
 *  @param {any[]} xs   Array of any type
 *  @param {!number} n  Number of elements from begin (end if negative) that shoud not be affected
 *  @returns {any[]}    Result array
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

/** inverses array
 *  @param {any[]} xs   Array of any type
 *  @param {!number} n  Number of elements from begin (end if negative) that shoud not be affected
 *  @returns {any[]}    Result array
 */
const inverse2 = (xs, n = 0) =>
    (function (l, r) {
        return this.slice(0, l)
            .concat(this.slice(l, r).reverse())
            .concat(this.slice(r))
    }).call(xs, Math.max(0, n), xs.length + Math.min(0, n));