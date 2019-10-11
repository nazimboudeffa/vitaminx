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
