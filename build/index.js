/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/vitaminx/blob/master/license.txt|MIT License}
*/

/**
* @namespace VitaminX
*/
var VitaminX = VitaminX || {
  VERSION: '1.0.0',
};

module.exports = VitaminX

VitaminX.Utility = function(){

};

VitaminX.Utility.prototype = {

  multiply: function(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
  }

}

VitaminX.Utility.prototype.constructor = VitaminX.Utility;

VitaminX.Matrix = function(array){

  this.matrix = null;

  this.fromArray(array);

};

VitaminX.Matrix.prototype = {

  fromArray: function(m){

    if (!Array.isArray(m)) {
        throw new Error('Input should be of type array');
    }

    this.matrix = m;

  },

  size: function(){
    let s = [];
    for (i=0; i < this.matrix.length; i++) {
        s.push(this.matrix.length);
    }
    return s;
  },

  dimensions: function() {
      return this.size()[0] + "x" + this.size(this.matrix).length;
  },

  display: function() {
    for (var r = 0; r < this.matrix.length; ++r) {
      console.log('|' + this.matrix[r].join(' ') + '|');
    }
  }

}

VitaminX.Matrix.prototype.constructor = VitaminX.Matrix;
