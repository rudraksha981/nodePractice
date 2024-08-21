
const a = 10;



const b = function(x, y) {
    return x + y;
}

const p = function(x, y) {
    return x * y;
}

module.exports = a
module.exports = p
module.exports = b


console.log(p(2, 5))
