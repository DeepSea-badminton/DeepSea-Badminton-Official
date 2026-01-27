document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("common-header");
  const footer = document.getElementById("common-footer");

  /* ===== 共通ヘッダー（ディープシー内） ===== */
  if (header) {
    header.innerHTML = `
      <header>
        <h1>ディープシー</h1>
        <nav>
          <a href="/deepsea/index.html">トップ</a>
          <a href="/deepsea/schedule.html">練習日程</a>
          <a href="/deepsea/history/index.html">チームのあゆみ</a>
          <a href="/deepsea/contact.html">お問い合わせ</a>
        </nav>
      </header>
    `;
  }

  /* ===== 共通フッター（チーム選択へ戻る） ===== */
  if (footer) {
    footer.innerHTML = `
      <footer class="common-footer">
        <a href="/index.html">← チーム選択に戻る</a>
      </footer>
    `;
  }
});