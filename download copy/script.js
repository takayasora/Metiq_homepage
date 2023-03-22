function downloadFile() {
  // ファイルのURL
  var url = 'https://metiq.co/download/download.zip';
  
  // 一時的なリンクを作成し、クリックしてダウンロードする
  var link = document.createElement('a');
  link.href = url;
  link.download = 'download.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}