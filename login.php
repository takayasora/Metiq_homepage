<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  // フォームから送信されたデータを取得
  $username = $_POST['username'];
  $password = $_POST['password'];

  // ユーザー名とパスワードが正しいかチェックする
  if($username === 'metiq' && $password === 'password') {
    // 認証が成功した場合、セッションにログイン状態を保存する
    $_SESSION['logged_in'] = true;
    header('Location: dashboard.php');
    exit();
  } else {
    // 認証が失敗した場合、エラーメッセージを表示する
    $error_message = 'ユーザー名またはパスワードが間違っています';
  }
}
?>