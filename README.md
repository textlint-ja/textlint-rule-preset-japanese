# textlint-rule-preset-japanese [![Build Status](https://travis-ci.org/azu/textlint-rule-preset-japanese.svg?branch=master)](https://travis-ci.org/azu/textlint-rule-preset-japanese)

textlint rule preset for Japanese.

日本語向けのtextlint ruleのpresetです。

## Installation

    npm install textlint-rule-preset-japanese

このpresetは以下のルールを含んでいます。

- https://github.com/azu/textlint-rule-max-ten
    - 一文で使える"、"の数
- https://github.com/azu/textlint-rule-no-double-negative-ja
    - 二重否定の検出
- https://github.com/azu/textlint-rule-no-doubled-joshi
    - 二重助詞の検出
- https://github.com/azu/textlint-rule-sentence-length
    - 一文の最大の長さ
- https://github.com/azu/textlint-rule-no-start-duplicated-conjunction
    - 同じ接続詞で開始してないかを検出
- https://github.com/azu/textlint-rule-spellcheck-tech-word
    - JavaScript周りの単語スペルチェック
- https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
    - 文の敬体(ですます調)、常体(である調)の混合をチェック


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
           // https://github.com/azu/textlint-rule-max-ten
           // 一文で使える"、"の数
           "max-ten": {
               "max": 3
           },
           // https://github.com/azu/textlint-rule-no-double-negative-ja
           // 二重否定の検出
           "no-double-negative-ja": true,
           // https://github.com/azu/textlint-rule-no-doubled-joshi
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
           // https://github.com/azu/textlint-rule-no-start-duplicated-conjunction
           // 同じ接続詞で開始してないかを検出
           // 2文距離が空いていれば同じ接頭辞を使える
           "no-start-duplicated-conjunction": {
               "interval": 2
           },
           // https://github.com/azu/textlint-rule-spellcheck-tech-word
           // JavaScript周りの単語スペルチェック
           "spellcheck-tech-word": true,
           // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
           // 文の敬体(ですます調)、常体(である調)の混合をチェック
           "no-mix-dearu-desumasu": true
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