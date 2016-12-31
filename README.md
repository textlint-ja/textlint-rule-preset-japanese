# textlint-rule-preset-japanese [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-preset-japanese.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-preset-japanese)

[textlint rule preset](https://github.com/textlint/textlint/blob/master/docs/create-preset.md "preset") for Japanese.

日本語向けのtextlint ruleのpresetです。

## 目的

- 技術文書で利用するためのルール集
- 入れても誤爆が少ないルールに限定する
    - 明らかな誤爆がある場合は、Issueを立ててください
- スタイル(スペースの有無など)に関連するルールは含めない

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
- https://github.com/azu/textlint-rule-spellcheck-tech-word
    - JavaScript周りの単語スペルチェック
- https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu
    - 文の敬体(ですます調)、常体(である調)の混合をチェック
- https://github.com/azu/textlint-rule-no-nfd
    - ホ゜ケット エンシ゛ン のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック


## Usage

Via `.textlintrc`

```js
{
    "rules" : {
        "preset-japanese": true
    }
}
```

Options

```js
{
    "rules" : {
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
            // https://github.com/azu/textlint-rule-spellcheck-tech-word
            // JavaScript周りの単語スペルチェック
            "spellcheck-tech-word": true,
            // https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu
            // 文の敬体(ですます調)、常体(である調)のチェック
            "no-mix-dearu-desumasu": true,
            // https://github.com/azu/textlint-rule-no-nfd
            // ホ゜ケット エンシ゛ン
            // のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
            "no-nfd": true
       }
    }
}
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
