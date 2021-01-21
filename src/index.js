module.exports = function reverse (n) {
    return String(n).replace('-','').split('').reverse().join('');
}
