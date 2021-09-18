import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const readExcelData = (file) => {
  let promise = new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      let bufferArray = e.target.result;
      if (bufferArray) {
        let wb = XLSX.read(bufferArray, {
          type: 'buffer',
          cellDates: true,
          cellText: false,
          sheetStubs: true,
        });
        let wsname = wb.SheetNames[0];
        let ws = wb.Sheets[wsname];
        let data = XLSX.utils.sheet_to_json(ws, {
          defval: '',
          raw: false,
          dateNF: 'yyyy-mm-dd h:mm:ss AM/PM',
        });
        resolve(data);
      }
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
  return promise;
};

export const downloadExcelData = (filename, columns, values) => {
  const col = columns.filter(function(d) {
    return d.display === 'true' && d.name !== '' ? d : '';
  });

  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  let json = [];

  if (values.length > 0) {
    //with data: like other tables excel download with data
    json = values.reduce((result, val) => {
      const temp = {};
      val.data.forEach((v, idx) => {
        if (idx > 22) {
          return;
        }
        temp[col[idx].name] = v ? v : '';
      });
      result.push(temp);
      return result;
    }, []);
  } else {
    //without data: sheet template
    json = col.reduce((result, val) => {
      const temp = {};
      col.forEach((v, idx) => {
        temp[col[idx].label] = null;
      });
      result.push(temp);

      return result;
    }, []);
  }

  const fileName = filename;
  const ws = XLSX.utils.json_to_sheet(json);
  const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, fileName + fileExtension);
  //cancel default  CSV download from table
  return false;
};
