// ('use strict');
// (function () {}.toString());

// 24;

(function () {
  console.log('test');
})();

(function (w) {
  console.log('am rulat si am pus ceva pe window');

  w.myName = 'Tokyo';
})(window);

console.log(myName);
