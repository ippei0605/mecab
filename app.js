'use strict';

// モジュールを読込む。
const
  MeCab = new require('mecab-async'),
  mecab = new MeCab();

const text = 'いつもニコニコあなたの隣に這い寄る混沌ニャルラトホテプです！';

mecab.parse(text, (e, v) => {
  if (e) {
    console.log('error:', e);
  } else {
    console.log(v);
  }
});