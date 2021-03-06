(function () {
  var ua = window.navigator.userAgent;
  var os, version, matched;

  if (matched = ua.match(/Windows NT (\d+\.\d+)/)) {
    os = 'Windows';
    switch (matched[1]) {
      case '5.1':
      case '5.2':
        version = 'XP';
        break;
      case '6.0':
        version = 'Vista';
        break;
      case '6.1':
        version = '7';
        break;
      case '6.2':
        version = '8';
        break;
      case '6.3':
        version = '8.1';
        break;
      case '10.0':
        version = '10';
        break;
    }
  }
  else if (matched = ua.match(/Mac OS X (\d+[_.]\d+)/)) {
    os = 'Mac OS';
    version = matched[1].replace(/_/g, '.');
  }
  else if (matched = ua.match(/iPhone OS (\d_\d)/) || ua.match(/iPad; CPU OS (\d_\d)/)) {
    os = 'iOS';
    version = matched[1].replace(/_/g, '.');
  }
  else if (matched = ua.match(/Android (\d\.\d)/)) {
    os = 'Android';
    version = matched[1];
  }

  document.body.setAttribute('data-os', os + ' ' + version);
})();

jQuery( function( $ ) {

//--------------------------
// size variables
//--------------------------
  var spWidthMax = 767;
  var tbWidthMax = 1199;

//--------------------------
// Media Query
//--------------------------

  var mqlSp = window.matchMedia('(max-width: ' + spWidthMax + 'px)');
  var mqlTb = window.matchMedia('(max-width: ' + tbWidthMax + 'px)');

  // MediaQueryListにイベントリスナを登録
  mqlSp.addListener(handleWidthChangeSp);
  mqlTb.addListener(handleWidthChangeTb);

  // 初期状態の評価のため
  // イベントリスナを一度実行しておく
  handleWidthChangeSp(mqlSp);
  handleWidthChangeTb(mqlTb);

  // イベントリスナの定義
  function handleWidthChangeSp(mqlSp){
    if (mqlSp.matches) {
      // スマフォ用
    }
    else {
      // PC用
    }
  }
  // イベントリスナの定義
  function handleWidthChangeTb(mqlTb){
    if (mqlTb.matches) {
      // タブレット用

    } else {
      // PC用

    }
  }
});
