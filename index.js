const stringLib = require('@chudiercode/string_library');
const D = require('date-library');
const data = require('./data.json');

const first = stringLib.capitalize(data[0].first_name);
const last = stringLib.capitalize(data[0].last_name);
const phone = data[0].phone;
const purchase = new D(data[0].purchased).format('M, D, Y');
const payment = new D(data[0].lastpayment).when();

function formatPhone() {
  const replace = ('' + phone).replace(/[^\d]/g);
  const match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null;
}

console.log(first + ' ' + last);
console.log(formatPhone(phone));
console.log(purchase);
console.log(payment);
module.exports.formatPhone = formatPhone;
