// LICENSE : MIT
"use strict";
module.exports = {
    "rules": {
        "max-ten": require("textlint-rule-max-ten"),
        "no-doubled-conjunctive-particle-ga": require("textlint-rule-no-doubled-conjunctive-particle-ga"),
        "no-doubled-conjunction": require("textlint-rule-no-doubled-conjunction"),
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-doubled-joshi": require("textlint-rule-no-doubled-joshi"),
        "sentence-length": require("textlint-rule-sentence-length"),
        "spellcheck-tech-word": require("textlint-rule-spellcheck-tech-word"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu"),
        "no-nfd": require("textlint-rule-no-nfd")
    },
    "rulesConfig": {
        // https://github.com/azu/textlint-rule-max-ten
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
        // https://github.com/azu/textlint-rule-spellcheck-tech-word
        // JavaScript周りの単語スペルチェック
        "spellcheck-tech-word": true,
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        // 文の敬体(ですます調)、常体(である調)のチェック
        "no-mix-dearu-desumasu": true,
        // https://github.com/azu/textlint-rule-no-nfd
        // ホ゜ケット エンシ゛ン
        // のような、Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
        "no-nfd": true
    }
};