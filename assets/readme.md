# Bs-Harp-Sass for Habakiri + WordPress

Harp + browser-sync + Bootstrap-Sass

## Install（インストール）

### 1. Node.js and npm（Node.jsをインストール）

[Node.js](http://nodejs.org/)

### 2. Harp（Harpをインストール）

[Harp](http://harpjs.com/) - the static web server with built-in preprocessing

```
$ sudo npm install -g harp
```

### 3. Install some node-module（node-moduleをインストール）

1. wp-content/themes/内にclone
2. フォルダ名を変更
3. 必要な場合は .git を削除
4. style.css と　assets/scss/style.scss を変更（タイトルなど）
5. assets/harp.json の sitetitle / uri を変更
6. assetsディレクトリにて

```
$ cd assets
$ npm install
```

## Usage（使い方）

`/wp-content/themes/soudan-net/assets`ディレクトリに移動後、おこなってください。

### Scss build

build元ファイル一覧内に、各scssのファイルの保存先が書いてあるので、それを見て更新してください。

`/wp-content/themes/soudan-net/assets/public/assets/css/style.scss`

```
$ gulp buildscss
```

### Start using LiveReload（LiveReloadの使い方）

Start harp server（harp server を起動）

```
$ harp server
```

and open a new tab（新しいタブを開く）

command + t


Start proxy of harp server using browsersync Livereload on that tab（そのタブでbrowsersync Livereloadを使って harp server のプロキシを開始）

```
$ gulp server
```

#### Finish LiveReload and harp server（LiveReloadとハープサーバーを終了する）

On the corresponding tab（該当タブで）

control + c

### Compile source（コンパイル方法）

Compile source non-minify-html in /dist（コンパイルされたHTMLは  /distディレクトリ内に保存され　non-minify-html になる）

If you don't need to convert relative path to the dist directory, you change config.relativePath to false in gulpfile.js.（相対パスを`dist`ディレクトリに変換する必要がない場合は、gulpfile.jsでconfig.relativePathをfalseに変更）

```
$ gulp dist
```
