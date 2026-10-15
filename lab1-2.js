'use strict';
const values = [
true, false, true, false,
"hello", "word", "JavaScript", "привіт", "книга", "школа",
5, 12, -200, 3.14, 0, 42, 67];
const counts = {};
for (const value of values) {
    const type = typeof value;
    if (counts[type] === undefined) {
        counts[type] = 0;
    }
    counts[type]++;
}
console.log(counts);

