function formatPbDate(d) {
  if (!d) {
    return '';
  }
  if (!(d.hasOwnProperty('month')) || !(d.hasOwnProperty('day')) || !(d.hasOwnProperty('year'))){
    return '';
  }
  return (
    `${d.month.toString().padStart(2, '0')}/` +
    `${d.day.toString().padStart(2, '0')}/` +
    `${d.year.toString().padStart(2, '0')}`
  );
}

function formatPbDateDash(d) {
  if (!d) {
    return '';
  }
  if (!(d.hasOwnProperty('month')) || !(d.hasOwnProperty('day')) || !(d.hasOwnProperty('year'))){
    return '';
  }
  return (
    `${d.year.toString().padStart(2, '0')}-` +
    `${d.month.toString().padStart(2, '0')}-` +
    `${d.day.toString().padStart(2, '0')}`
  );
}

export function dateProtoObjectToString(o) {
  if (!o) return "";

  const { year, month, day } = o;
  const m = padString(month, '0', 2);
  const d = padString(day, '0', 2);

  return `${year}-${m}-${d}`;
}


// d is assumed a decimal string
function formatDollar(d) {
  if (!d) {
    return '';
  }
  if (parseFloat(d) === 0) {
    return '$0.00';
  }
  const sign = parseFloat(d) < 0 ? '-$' : '$';
  let [digit, decimal] = d.replace(/^-/, '').split('.');
  const minDecimal = parseFloat(digit) < 1 ? 4 : 2;
  if (!decimal) {
    decimal = '';
  }
  if (decimal.length < minDecimal) {
    decimal += '0'.repeat(minDecimal - decimal.length);
  }
  return `${sign}${formatQty(digit)}.${decimal}`;
}

function formatCurrency(
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? '-$' : '$';

  let i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  ).toString();

  let j = i.length > 3 ? i.length % 3 : 0;

  const finalAmount =
    negativeSign +
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : '');

  return `${finalAmount}`;
}

function formatPercentage(value) {
  return value + '%';
}

function formatQty(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','); //old - /\B(?=(\d{3})+(?!\d))/g, ',': this cause 6 decimal place format as thousand
                              
}

function formatStatus(value) {
  return value.slice(0,1).toUpperCase() + value.slice(1, value.length)
}

 function padString(value, padchar, charCount) {
  const pad = padchar.repeat(charCount);
  const formatted = (pad + value).slice(-charCount);

  return formatted;
}



export {
  formatPbDate,
  formatPbDateDash,
  formatDollar,
  formatCurrency,
  formatPercentage,
  formatQty,
  formatStatus,
};
