document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("common-header");
  const footer = document.getElementById("common-footer");

  /*
   * ★ GitHub Pages（プロジェクトページ）用ベースパス
   *   https://ユーザー名.github.io/DeepSea-Badminton-Official/
   */
  const BASE = "/DeepSea-Badminton-Official";

  /* ===== 共通ヘッダー ===== */
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <h1 class="site-title">ディープシー</h1>
        <nav class="site-nav">
          <a href="${BASE}/deepsea/index.html">トップ</a>
          <a href="${BASE}/deepsea/schedule.html">練習日程</a>
          <a href="${BASE}/deepsea/history/index.html">チームのあゆみ</a>
          <a href="${BASE}/deepsea/contact.html">お問い合わせ</a>
        </nav>
      </header>
    `;
  }

  /* ===== 共通フッター（今後用） ===== */
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <a href="${BASE}/index.html">← チーム選択に戻る</a>
      </footer>
    `;
  }
});