const trim = function () {
  let text = '    Shayan Biswas    ';
  text = text.trim();
  console.log(text);
};
const changetoLowerCase = function () {
  let text = 'SHAYAN BISWAS';
  text = text.toLowerCase();
  console.log(text);
};
const changeToUpperCase = function () {
  let text = 'shayan biswas';
  text = text.toUpperCase();
  console.log(text);
};
module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
