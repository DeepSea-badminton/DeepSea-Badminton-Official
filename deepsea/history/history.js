// ===== チームのあゆみデータ =====
const historyData = [
  // 2025年
  { date: "2025-04-13", priority: 1, title: "大会用の名前だけのチームとして発足" },
  { date: "2025-04-13", priority: 3, title: "武蔵村山オープン MD3部🥉" },
  { date: "2025-04-13", priority: 2, title: "1stユニフォーム作成" },
  { date: "2025-04-17", priority: 1, title: "募集サイトでチームメンバー募集開始" },
  { date: "2025-04-22", priority: 1, title: "LINEグループ作成" },
  { date: "2025-05-03", priority: 3, title: "YTKCUP MD2🥈" },
  { date: "2025-09-15", priority: 3, title: "小平市民シングルス大会 MS2🥉・MS3🥇🥈" },
  { date: "2025-09-29", priority: 3, title: "北本オープン団体戦 男子Aチーム🥇" },
  { date: "2025-10-05", priority: 3, title: "小平市民混合ダブルス大会にて代表ACL断裂" },
  { date: "2025-11-16", priority: 3, title: "小平市民ダブルス大会 MD3🥇（代表半月板損傷）" },
  { date: "2025-12-16", priority: 3, title: "代表 ACL・半月板 手術" },

  // 2026年
  { date: "2026-01-18", priority: 3, title: "調布市民ダブルス大会 MD3🥈" }
];

// ===== 表示処理 =====
function renderHistory() {
  const container = document.getElementById("history-container");
  container.innerHTML = "";

  // 年 → 月 → 配列
  const grouped = {};

  historyData.forEach(item => {
    const d = new Date(item.date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;

    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][month]) grouped[year][month] = [];

    grouped[year][month].push(item);
  });

  // 年：古い順
  const years = Object.keys(grouped).sort((a, b) => a - b);

  years.forEach(year => {
    const yearSection = document.createElement("section");

    const yearTitle = document.createElement("h3");
    yearTitle.textContent = `${year}年`;
    yearSection.appendChild(yearTitle);

    // 月：1 → 12
    const months = Object.keys(grouped[year]).sort((a, b) => a - b);

    months.forEach(month => {
      const monthTitle = document.createElement("h4");
      monthTitle.textContent = `${month}月`;
      yearSection.appendChild(monthTitle);

      const ul = document.createElement("ul");

      const events = grouped[year][month].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      events.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "history-item";
        li.dataset.priority = item.priority;

        const day = new Date(item.date).getDate();

        // 前の行と同じ日か？
        let showDay = true;
        if (index > 0) {
          const prevDay = new Date(events[index - 1].date).getDate();
          if (prevDay === day) showDay = false;
        }

        // ★ 文字で揃えない。要素で分ける
        li.innerHTML = `
          <span class="day">${showDay ? day : ""}</span>
          <span class="bar">｜</span>
          <span class="text">${item.title}</span>
        `;

        ul.appendChild(li);
      });

      yearSection.appendChild(ul);
    });

    container.appendChild(yearSection);
  });
}

// 実行
renderHistory();