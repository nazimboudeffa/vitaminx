const vitaminx = require('../build')

var m1 = new vitaminx.Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
var m2 = new vitaminx.Matrix([[2, 2, 2],[2, 2, 2],[2, 2, 2]]);

console.log(m1.dimensions());

m1.display();

//m = Object.call(vitaminx.Utility.multiply(m1, m2));

util = new vitaminx.Utility();
m =  new vitaminx.Matrix(util.multiply(m1.matrix, m2.matrix));

m.display();
