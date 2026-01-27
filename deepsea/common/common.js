document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("common-header");
  const footer = document.getElementById("common-footer");

  /* ===== 共通ヘッダー ===== */
  if (header) {
    header.innerHTML = `
      <header>
        <h1>ディープシー</h1>
        <nav>
          <a href="../index.html">トップ</a>
          <a href="schedule.html">練習日程</a>
          <a href="history/index.html">チームのあゆみ</a>
          <a href="contact.html">お問い合わせ</a>
        </nav>
      </header>
    `;
  }

  /* ===== 共通フッター（トップのみ想定） ===== */
  if (footer) {
    footer.innerHTML = `
      <footer>
        <p>&copy; DeepSea Badminton Club</p>
      </footer>
    `;
  }
});