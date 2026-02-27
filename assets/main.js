(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function setTheme(t) {
    root.dataset.theme = t;
    localStorage.setItem("theme", t);
  }

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") setTheme(saved);

  btn?.addEventListener("click", () => {
    const cur = root.dataset.theme || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  });
})();
