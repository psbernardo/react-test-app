export default function download(fileProtoResponse) {
  const [mimeType, fileBytes, fileName] = fileProtoResponse.array;

  var blob = new Blob([fileBytes], { type: mimeType });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  return fileName;
}
