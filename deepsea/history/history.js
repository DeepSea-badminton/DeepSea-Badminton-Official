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
  container.innerHTML = "";

  // 年ごとにまとめる
  const groupedByYear = {};

  historyData.forEach(item => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!groupedByYear[year]) groupedByYear[year] = {};
    if (!groupedByYear[year][month]) groupedByYear[year][month] = [];

    groupedByYear[year][month].push(item);
  });

  // 年：古い順
  const years = Object.keys(groupedByYear).sort((a, b) => a - b);

  years.forEach(year => {
    const yearSection = document.createElement("section");

    const yearTitle = document.createElement("h3");
    yearTitle.textContent = `${year}年`;
    yearSection.appendChild(yearTitle);

    // 月：1月 → 12月
    const months = Object.keys(groupedByYear[year]).sort((a, b) => a - b);

    months.forEach(month => {
      const monthTitle = document.createElement("h4");
      monthTitle.textContent = `${month}月`;
      yearSection.appendChild(monthTitle);

      const ul = document.createElement("ul");

      groupedByYear[year][month]
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .forEach(item => {
          const li = document.createElement("li");
          li.className = "history-item";
          li.dataset.priority = item.priority;
          li.textContent = `${item.date.slice(5)}｜${item.title}`;
          ul.appendChild(li);
        });

      yearSection.appendChild(ul);
    });

    container.appendChild(yearSection);
  });
}

renderHistory();