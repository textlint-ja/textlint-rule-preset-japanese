# textlint-rule-preset-japanese

## 7.0.0
### Major Changes

- aefefdc: :sparkles: [textlint-rule/textlint-rule-sentence-length v3.0.0](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/v3.0.0)へアップデート
  
  3.0.0では、デフォルトでは次のようなURLそのものがリンクとなっているケースをカウントしないようになっています。
  
  > Very long <https://example.com?longlonglong> URL.
- ffaf6f2: :sparkles: [textlint-rule/textlint-rule-no-invalid-control-character v2.0.0](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/releases/v2.0.0)へアップデート
  
  Imageの`alt`内もデフォルトでチェックするようになりました
- ffaf6f2: :new: [textlint-rule-no-kangxi-radicals](https://github.com/xl1/textlint-rule-no-kangxi-radicals)を追加
  
  [康煕部首](https://ja.wikipedia.org/wiki/%E5%BA%B7%E7%85%95%E9%83%A8%E9%A6%96)（こうきぶしゅ）が含まれる問題を見つけるtextlintルール。
  詳細は[PDF に謎の漢字が含まれるとき](https://gist.github.com/xl1/940d653451fd96a06618a6df08d5df84)を参照。
- ffaf6f2: :new: [textlint-rule-no-zero-width-spaces](https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces)を追加
  
  目視で見つけることができないため[ゼロ幅スペース](https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9)を見つけるtextlintルール

### Minor Changes

- ffaf6f2: リリースに[Changesets](https://github.com/atlassian/changesets)を使うように変更
