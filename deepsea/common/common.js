document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("common-header");
  const footer = document.getElementById("common-footer");

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

  if (footer) {
    footer.innerHTML = `
      <footer>
        <p>&copy; DeepSea Badminton Club</p>
      </footer>
    `;
  }
});