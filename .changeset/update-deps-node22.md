---
"textlint-rule-preset-japanese": major
---

依存ルールを最新版に更新し、Node.js 22.12.0 以上が必要になりました。

- Node.js 22.12.0 以上が必要になりました(`engines` を追加)。textlint v16 と同じ要件です
- 依存ルールを最新版に更新しました
  - textlint-rule-no-doubled-conjunction 3.0.1、textlint-rule-no-doubled-joshi 5.1.1、textlint-rule-no-mix-dearu-desumasu 6.0.4、textlint-rule-no-zero-width-spaces 1.0.2、textlint-rule-sentence-length 5.2.1、@textlint/module-interop 16.1.1
- 間接依存の更新(sentence-splitter 5.1.0 など)により、`sentence-length` と `no-doubled-conjunction` が報告するエラーの列番号が正しい位置になりました
- `no-mix-dearu-desumasu` の `strict: true` 時のメッセージが「〜でなければなりません」に変わりました
