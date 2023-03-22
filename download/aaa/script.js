function downloadFile() {
  // ファイルのURL
  var url = 'download.zip';
  
  // 一時的なリンクを作成し、クリックしてダウンロードする
  var link = document.createElement('a');
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}