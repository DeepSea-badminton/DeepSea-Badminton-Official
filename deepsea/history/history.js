// ===== チームのあゆみデータ =====
const historyData = [
  // 2025年
  { date: "2025-04-13", priority: 3, title: "大会用の名前だけのチームとして発足" },
  { date: "2025-04-13", priority: 2, title: "武蔵村山オープン MD3部🥉" },
  { date: "2025-04-13", priority: 2, title: "1stユニフォーム作成" },
  { date: "2025-04-17", priority: 1, title: "募集サイトでチームメンバー募集開始" },
  { date: "2025-04-22", priority: 1, title: "LINEグループ作成" },
  { date: "2025-05-03", priority: 2, title: "YTKCUP MD2🥈" },
  { date: "2025-09-15", priority: 3, title: "小平市民シングルス大会 MS2🥉・MS3🥇🥈" },
  { date: "2025-09-29", priority: 3, title: "北本オープン団体戦 男子Aチーム🥇" },
  { date: "2025-10-05", priority: 3, title: "小平市民混合ダブルス大会にて代表ACL断裂" },
  { date: "2025-11-16", priority: 3, title: "小平市民ダブルス大会 MD3🥇（代表半月板損傷）" },
  { date: "2025-12-16", priority: 3, title: "代表 ACL・半月板 手術" },

  // 2026年
  { date: "2026-01-18", priority: 2, title: "調布市民ダブルス大会 MD3🥈" }
];

// ===== 年ごとにグループ化 =====
function groupByYear(data) {
  const grouped = {};

  data.forEach(item => {
    const year = new Date(item.date).getFullYear();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(item);
  });

  return grouped;
}

// ===== 表示 =====
function renderHistory() {
  const container = document.getElementById("history-container");
  const grouped = groupByYear(historyData);

  // 年を古い順に
  const years = Object.keys(grouped).sort((a, b) => a - b);

  years.forEach(year => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = `${year}年`;
    section.appendChild(h3);

    const ul = document.createElement("ul");

    grouped[year]
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .forEach(item => {
        const li = document.createElement("li");
        li.className = "history-item";
        li.dataset.priority = item.priority;
        li.textContent = `${item.date.replace(year + "-", "")}　${item.title}`;
        ul.appendChild(li);
      });

    section.appendChild(ul);
    container.appendChild(section);
  });
}

renderHistory();