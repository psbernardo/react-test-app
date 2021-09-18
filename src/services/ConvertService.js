import moment from 'moment-timezone';

const google_date = require('../../src/google/type/date_pb.js');
const timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

export function objectToProtoDate(oDate) {
  if (!oDate) return;

  const pb = new google_date.Date();
  pb.setMonth(oDate.month);
  pb.setYear(oDate.year);
  pb.setDay(oDate.day);

  return pb;
}

export function objectToProtoTimeStamp(oTimeStamp) {
  if (!oTimeStamp) return;

  const pb = new timestamp_pb.Timestamp();
  pb.setNanos(oTimeStamp.nanos);
  pb.setSeconds(oTimeStamp.seconds);

  return pb;
}

export function objectToProtoTradeTimeStamp(oTimeStamp) {
  if (!oTimeStamp) return;

  return timestamp_pb.Timestamp.fromDate(
    moment.tz(protoDatTimeObjectToDate(oTimeStamp), 'America/New_York').toDate()
  );
}

export function protoTimeSpanObjectToString(oTimeSpan, format) {
  if (!oTimeSpan) return '';

  return moment(protoDatTimeObjectToDate(oTimeSpan)).format(
    format || moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
  );
}

export function stringToProtoDate(sparam) {
  if (!sparam) return;

  const pb = new google_date.Date();
  const [year, month, day] = sparam.split('-');

  pb.setMonth(parseInt(month));
  pb.setYear(parseInt(year));
  pb.setDay(parseInt(day));
  return pb;
}

export function stringToPBObjectDate(sparam) {
  if (!sparam) return;

  const [year, month, day] = sparam.split('-');

  return {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
  };
}

export function stringToProtoTimeSpan(sparam) {
  if (!sparam) return;

  const pb = new timestamp_pb.Timestamp();
  pb.setNanos(0);
  pb.setSeconds(moment(sparam, moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).unix());
  return pb;
}

export function stringToDateTime(sparam) {
  if (!sparam) return;

  return moment(sparam, moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).toDate();
}

export function stringToUTCProtoTimeSpan(sparam) {
  if (!sparam) return;

  const utcs = moment(sparam, moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
    .toDate()
    .toUTCString();
  const pb = new timestamp_pb.Timestamp();
  pb.setNanos(0);
  pb.setSeconds(moment(utcs).unix());

  return pb;
}

export function stringToModalDate(sparam) {
  if (!sparam || sparam === '--') return '';

  const utcs = moment(new Date(sparam))
    .toDate()
    .toUTCString();
  return moment(utcs).format('YYYY-MM-DDThh:mm:ss');
}

export function protoDateObjectToString(o, format) {
  if (!o) return '';

  return moment(protoDateObjectToDate(o)).format(format || 'yyyy/MM/DD');
}

export function protoDateObjectToDate(o) {
  if (!o) return;
  const { year, month, day } = o;

  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

export function protoDatTimeObjectToDate(oTimeStamp) {
  if (!oTimeStamp) return;

  const secs = oTimeStamp.seconds * 1000;
  const nanos = oTimeStamp.nanos / 1000000;

  const dt = new Date(secs + nanos);
  const utcDate = new Date(dt.toLocaleString('en-US', { timeZone: 'UTC' }));

  return utcDate;
}

export function dateStringToDate(o) {
  if (!o) return;
  const { year, month, day } = stringToPBObjectDate(o);

  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

export function dateProtoObjectToString(o) {
  if (!o) return '';

  const { year, month, day } = o;
  const m = padString(month, '0', 2);
  const d = padString(day, '0', 2);

  return `${year}-${m}-${d}`;
}

export function protoTimeStampObjectToString(o) {
  if (!o) return '';

  return moment(protoDatTimeObjectToDate(o)).format(
    moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
  );
}

export function stringToProtoTradeTimeStamp(sparam) {
  if (!sparam) return;

  return timestamp_pb.Timestamp.fromDate(
    moment.tz(sparam, 'America/New_York').toDate()
  );
}

export function objectTradeTimeToString(oTimeSpan) {
  if (!oTimeSpan) return '';

  return moment
    .tz(protoDatTimeObjectToDate(oTimeSpan), 'America/New_York')
    .format('hh:mm:ssa');
}

export function padString(value, padchar, charCount) {
  const pad = padchar.repeat(charCount);
  const formatted = (pad + value).slice(-charCount);

  return formatted;
}

export function dateStringToDateSTD(oDate) {
  if (!oDate) return "";
  let d = new Date(oDate);
  if(!(d instanceof Date && !isNaN(d.valueOf()))){
    return "";
  }
  return {
    year: parseInt(d.getFullYear()),
    month: parseInt(d.getMonth() + 1),
    day: parseInt(d.getDate()),
  };
}
