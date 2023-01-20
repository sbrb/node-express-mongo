const printDate = function () {
  console.log(new Date().getDate());
}
const printMonth = function () {
  console.log(new Date().toLocaleString('default', { month: 'long' }))
};
const getBatchInfo = function () {
  console.log('the topic for today is Nodejs module system.');
};
module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
