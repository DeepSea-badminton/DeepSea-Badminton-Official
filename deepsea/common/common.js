async function loadCommonParts() {
  const header = document.getElementById("common-header");
  const footer = document.getElementById("common-footer");

  if (header) {
    const res = await fetch("/deepsea/common/header.html");
    header.innerHTML = await res.text();
  }

  if (footer) {
    const res = await fetch("/deepsea/common/footer.html");
    footer.innerHTML = await res.text();
  }
}

loadCommonParts();