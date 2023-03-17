Function.prototype.defer = function(ms) {
    let contextF = this;
    return function () {
        setTimeout(() => contextF.apply(this, arguments), ms);
    }
};

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2);