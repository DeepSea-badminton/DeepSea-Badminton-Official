// ============================
// チームのあゆみ データ
// ここに追加するだけ
// ============================
const historyData = [
  // 2025年
 { date: "2025-04-13", priority: 1, title: "大会用の名前だけのチームとして発足" }
 ,{ date: "2025-04-13", priority: 3, title: "武蔵村山オープン MD3部🥉" }
 ,{ date: "2025-04-13", priority: 2, title: "1stユニフォーム作成" }
 ,{ date: "2025-04-17", priority: 1, title: "募集サイトでチームメンバー募集開始" }
 ,{ date: "2025-04-22", priority: 1, title: "LINEグループ作成" }
 ,{ date: "2025-05-03", priority: 3, title: "YTKCUP MD2🥈" }
 ,{ date: "2025-08-31", priority: 1, title: "NHK「24時間テレビ」出演" }
 ,{ date: "2025-09-15", priority: 3, title: "小平市民シングルス大会 MS2🥉・MS3🥇🥈" }
 ,{ date: "2025-09-29", priority: 3, title: "北本オープン団体戦 男子Aチーム🥇" }
 ,{ date: "2025-10-05", priority: 3, title: "小平市民混合ダブルス大会にて代表ACL断裂" }
 ,{ date: "2025-11-16", priority: 3, title: "小平市民ダブルス大会 MD3🥇（代表半月板損傷）" }
 ,{ date: "2025-12-16", priority: 3, title: "代表 ACL・半月板 手術" }

  // 2026年
 ,{ date: "2026-01-18", priority: 3, title: "調布市民ダブルス大会 MD3🥈" }
 ,{ date:　"2026-01-28",　priority: 2,　title: "当ホームページ開設" }
 ,{ date:　"2026-01-28",　priority: 3,　title: "小平市民総合体育館で団体利用登録完了" }
 ,{ date:　"2026-02-18",　priority: 3,　title: "小平元気村おがわ東で団体利用登録完了" }
 ,{ date:　"2026-02-21",　priority: 3,　title: "小平市民総合体育館で団体利用登録完了" }
 ,{ date: "2026-03-27", priority: 3, title: "北区高校生ダブルス大会 WD2🥉" }
 ,{ date: "2026-04-15", priority: 1, title: "チーム設立1周年兼練習開催50回記念第1回ディープシー杯（部内戦）開催" }
];

// ============================
// 描画処理
// ============================
function renderHistory() {
  const container = document.getElementById("history-container");
  container.innerHTML = "";

  const grouped = {};

  // 年 → 月 → 日 にまとめる
  historyData.forEach(item => {
    const d = new Date(item.date);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const day = d.getDate();

    grouped[y] ??= {};
    grouped[y][m] ??= {};
    grouped[y][m][day] ??= [];

    grouped[y][m][day].push(item);
  });

  // 年（古い順）
  Object.keys(grouped).sort((a, b) => a - b).forEach(year => {
    const yearBlock = document.createElement("section");

    yearBlock.innerHTML = `
      <h3 class="year-title open">${year}年</h3>
      <div class="year-content open"></div>
    `;

    const yearTitle = yearBlock.querySelector(".year-title");
    const yearContent = yearBlock.querySelector(".year-content");

    // 年の開閉
    yearTitle.addEventListener("click", () => {
      yearTitle.classList.toggle("open");
      yearContent.classList.toggle("open");
    });

    // 月
    Object.keys(grouped[year]).sort((a, b) => a - b).forEach(month => {
      const monthBlock = document.createElement("div");
      monthBlock.className = "month-block";

      monthBlock.innerHTML = `
        <div class="month-title">${month}月</div>
        <ul class="day-list"></ul>
      `;

      const ul = monthBlock.querySelector(".day-list");

      // 日
      Object.keys(grouped[year][month]).sort((a, b) => a - b).forEach(day => {
        grouped[year][month][day].forEach((item, index) => {
          const li = document.createElement("li");
          li.className = "history-item";
          li.dataset.priority = item.priority;

          li.innerHTML = `
            <span class="day">${index === 0 ? day : ""}</span>
            <span class="bar">｜</span>
            <span class="text">${item.title}</span>
          `;

          ul.appendChild(li);
        });
      });

      yearContent.appendChild(monthBlock);
    });

    container.appendChild(yearBlock);
  });
}

// 実行
renderHistory();