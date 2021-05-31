# textlint-rule-preset-japanese [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-preset-japanese.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-preset-japanese)

[textlint rule preset](https://github.com/textlint/textlint/blob/master/docs/rule-preset.md "preset") for Japanese.

日本語向けのtextlint ruleのpresetです。

## 目的

- 一般的な文書で利用するためのルール集
- 入れても誤検知が少ないルールに限定する
    - 明らかな誤爆がある場合は、Issueを立ててください
- スタイル(スペースの有無など)に関連するルールは含めない

技術的な文章を書くためにより厳しいルールを求める方は次のプリセットを参照してください。

- [textlint-ja/textlint-rule-preset-ja-technical-writing: 技術文書向けのtextlintルールプリセット](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)

## Installation

    npm install textlint-rule-preset-japanese

このpresetは以下のルールを含んでいます。

- https://github.com/textlint-ja/textlint-rule-max-ten
    - 一文で使える"、"の数
- https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
    - 逆接の接続助詞「が」が、同一文中に複数回出現していないかどうか
- https://github.com/takahashim/textlint-rule-no-doubled-conjunction
    - 同じ接続詞で開始されていることを検出
- https://github.com/textlint-ja/textlint-rule-no-double-negative-ja
    - 二重否定の検出
- https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
    - 二重助詞の検出
- https://github.com/azu/textlint-rule-sentence-length
    - 一文の最大の長さ
- https://github.com/azu/textlint-rule-no-dropping-the-ra
    - ら抜き言葉を使用しない
- https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu
    - 文の敬体(ですます調)、常体(である調)の混合をチェック
- https://github.com/azu/textlint-rule-no-nfd
    - ホ゜ケット エンシ゛ン のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
- https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
    - 制御文字の検出
- https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces
    - ゼロ幅スペースの検出
- https://github.com/xl1/textlint-rule-no-kangxi-radicals
    - 康煕部首の検出

## Usage

Via `.textlintrc`

```json5
{
    "rules": {
        "preset-japanese": true
    }
}
```

Options

```json5
{
    "rules": {
        // それぞれのルールのデフォルト値
        "preset-japanese": {
             // https://github.com/textlint-ja/textlint-rule-max-ten
             // 一文で使える"、"の数
             "max-ten": {
                 "max": 3
             },
             // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
             // 逆接の接続助詞「が」が、同一文中に複数回出現していないかどうか
             // e.g.) 今日は早朝から出発したが、定刻には間に合わなかったが、無事会場に到着した。
             "no-doubled-conjunctive-particle-ga": true,
             // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
             // 同じ接続詞が連続して出現していないかどうか
             "no-doubled-conjunction": true,
             // https://github.com/textlint-ja/textlint-rule-no-double-negative-ja
             // 二重否定の検出
             "no-double-negative-ja": true,
             // https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
             // 二重助詞の検出
             // 連続して同じ助詞が出た場合のみを検出
             "no-doubled-joshi": {
                 "min_interval": 1
             },
             // https://github.com/azu/textlint-rule-sentence-length
             // 一文の最大の長さ
             "sentence-length": {
                 "max": 100
             },
             // https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra
             // ら抜き言葉を使用しない
             "no-dropping-the-ra": true,
             // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
             // 文の敬体(ですます調)、常体(である調)のチェック
             "no-mix-dearu-desumasu": true,
             // https://github.com/azu/textlint-rule-no-nfd
             // ホ゜ケット エンシ゛ン
             // のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
             "no-nfd": true,
             // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
             // 制御文字の検出
             "no-invalid-control-character": true,
             // https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces
             // ゼロ幅スペースの検出
             "no-zero-width-spaces": true,
             // https://github.com/xl1/textlint-rule-no-kangxi-radicals
             // 康煕部首の検出
             "no-kangxi-radicals": true
        }
    }
}
```

## Semantic Versioning Policy

次のルールでバージョンが更新されます。

- Patch リリース
    - 各ルールのバグ修正 (警告を減らす方向への修正)
    - ドキュメントの改善
    - 内部的な変更 (リファクタリングやテストの改善など)
    - リリース失敗時の再リリース
- Minor リリース
    - 各ルールのバグ修正 (警告を増やす方向への修正)
    - 新オプションの追加
    - 既存ルールの非推奨化
- Major リリース
    - プリセットへのルールの追加
    - プリセットからルールの削除
    - 既存のオプション値の変更

textlint-rule-preset-japaneseは、6ヶ月ごとにmajorアップデートを行います。

更新内容は[Releases page](https://github.com/textlint-ja/textlint-rule-preset-japanese/releases)を参照してください。

## Community

質問は以下のGitterでお願いします。

[![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

## その他のルール

- [Collection of textlint rule · textlint/textlint Wiki](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
