# textlint-rule-preset-japanese

## 10.0.0

### Major Changes

- dd40ab6: fix(deps): update dependency textlint-rule-no-mix-dearu-desumasu to v6

  文体が統一されていても preferIn 設定に違反する場合は、エラーとなるように変更
  以前は、prefer とは異なる文体に統一されていた時にエラーになっていませんでした。
  https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu/releases/tag/v6.0.0

## 9.0.0

### Major Changes

- 6645c65: [sentence-splitter v5.0.0](https://github.com/textlint-rule/sentence-splitter/releases/tag/v5.0.0)へのアップデートに対応する変更が含まれています。

  > [!WARNING]
  > Node.js 18+が必要になります。

  次のルールをアップデートしています。

  - [textlint-ja/textlint-rule-max-ten: textlint rule that limit maxinum ten(、) count of sentence.](https://github.com/textlint-ja/textlint-rule-max-ten)
    - [Release v5.0.0 · textlint-ja/textlint-rule-max-ten](https://github.com/textlint-ja/textlint-rule-max-ten/releases/tag/v5.0.0)
  - [textlint-ja/textlint-rule-no-doubled-conjunction: textlint plugin to check duplicated same conjunctions.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction)
    - [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunction](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction/releases/tag/v3.0.0)
  - [textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga: textlint rule plugin to check duplicated conjunctive particle `ga` in a sentence.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga)
    - [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga/releases/tag/v3.0.0)
  - [textlint-ja/textlint-rule-no-doubled-joshi: 文中に同じ助詞が複数出てくるのをチェックする textlint ルール](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
    - [Release v5.0.0 · textlint-ja/textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi/releases/tag/v5.0.0)
  - [textlint-rule/textlint-rule-sentence-length: textlint rule that limit maximum length of sentence.](https://github.com/textlint-rule/textlint-rule-sentence-length)
    - [Release v5.0.0 · textlint-rule/textlint-rule-sentence-length](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/tag/v5.0.0)

  **Note**

  [GitHub に追加](https://github.com/orgs/community/discussions/16925)された次の構文で、一部ルールに影響が出ていました。

  > [!NOTE]
  > some content

  この構文が sentence-splitter v3 だと正しく解析できないため、sentence-splitter v5 へアップデートしています。

## 8.0.0

### Major Changes

- bd3fee8: fix(deps): update dependency textlint-rule-sentence-length to v4

  - Node.js 16+が必要となります。
  - `exclusionPatterns`オプションが廃止されたため、 `skipPatterns`オプションを利用してください
  - <https://github.com/textlint-rule/textlint-rule-sentence-length/releases/tag/v4.0.0>

- e16ba82: fix(deps): update dependency textlint-rule-no-nfd to v2

  - textlint v12.2.0+が必要になります
  - エラー位置表示の改善が含まれます
  - https://github.com/textlint-ja/textlint-rule-no-nfd/releases/tag/v2.0.1

## 7.0.0

### Major Changes

- aefefdc: :sparkles: [textlint-rule/textlint-rule-sentence-length v3.0.0](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/v3.0.0)へアップデート

  3.0.0 では、デフォルトでは次のような URL そのものがリンクとなっているケースをカウントしないようになっています。

  > Very long <https://example.com?longlonglong> URL.

- ffaf6f2: :sparkles: [textlint-rule/textlint-rule-no-invalid-control-character v2.0.0](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/releases/v2.0.0)へアップデート

  Image の`alt`内もデフォルトでチェックするようになりました

- ffaf6f2: :new: [textlint-rule-no-kangxi-radicals](https://github.com/xl1/textlint-rule-no-kangxi-radicals)を追加

  [康煕部首](https://ja.wikipedia.org/wiki/%E5%BA%B7%E7%85%95%E9%83%A8%E9%A6%96)（こうきぶしゅ）が含まれる問題を見つける textlint ルール。
  詳細は[PDF に謎の漢字が含まれるとき](https://gist.github.com/xl1/940d653451fd96a06618a6df08d5df84)を参照。

- ffaf6f2: :new: [textlint-rule-no-zero-width-spaces](https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces)を追加

  目視で見つけることができないため[ゼロ幅スペース](https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9)を見つける textlint ルール

### Minor Changes

- ffaf6f2: リリースに[Changesets](https://github.com/atlassian/changesets)を使うように変更
