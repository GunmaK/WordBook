# 爆弾解除ゲーム
未完成(7/05現在)
  
[リアルタイム進捗状況](yomayoi.com/minigame.com)
  
# やること
* BGM(効果音)
  * ゲームクリア時
* cssデザイン
    * スタート画面
    * 暗記表
    * リザルト画面
    * 遊び方画面
  
# 問題点
* 文字の大きさをvwに指定しているのでsafariだと崩れる->知らん~~macbookにもchrome入れられるやろ~~
* タイマーの効果音にラグがある -> onloadでmediaファイル内の効果音の読み込みができてないらしい-> ~~気にせん気にせん~~
  
# 構造
    bombGame
    ┣ css
      ┣ bombstyle.css
      ┗ load.css
    ┣ font
    ┣ images
    ┣ media
    ┣ script
    ┣ bomb.html
    ┗ minigame.html
