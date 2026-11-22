---
"textlint-rule-preset-japanese": minor
---

依存ルールを最新版に更新しました。

- 依存ルールを最新版に更新しました
  - textlint-rule-max-ten 5.0.1、textlint-rule-no-double-negative-ja 2.0.2、textlint-rule-no-doubled-conjunction 3.0.2、textlint-rule-no-doubled-conjunctive-particle-ga 3.0.1、textlint-rule-no-doubled-joshi 5.1.2、textlint-rule-no-dropping-the-ra 3.0.1、textlint-rule-no-mix-dearu-desumasu 6.0.4、textlint-rule-no-zero-width-spaces 1.0.2、textlint-rule-sentence-length 5.2.1、@textlint/module-interop 16.1.2
- kuromojin 3.1.0 を使うルールに更新したため、形態素解析を使うルールの読み込みと実行が速くなりました
- 間接依存の更新(sentence-splitter 5.1.0 など)により、`sentence-length` と `no-doubled-conjunction` が報告するエラーの列番号が正しい位置になりました
- `no-mix-dearu-desumasu` の `strict: true` 時のメッセージが「〜でなければなりません」に変わりました
