'use strict';

const inverse = (xs, n = 0) => {
    let l = Math.max(0, n);
    let r = xs.length - 1 + Math.min(0, n);
    let m = (l + r) / 2 - l;
    for (let i = 0; i < m; i++) {
        let t = xs[l + i];
        xs[l + i] = xs[r - i];
        xs[r - i] = t;
    }
    return xs;
};