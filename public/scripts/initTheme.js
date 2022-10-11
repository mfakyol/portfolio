const themes = ["auto", "light", "dark"];
const theme = localStorage.getItem("theme");

if (themes.slice(1).includes(theme)) {
  document.documentElement.setAttribute("theme", theme);
} else {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("theme", "dark");
  } else document.documentElement.setAttribute("theme", "light");
}
if (!theme.includes(theme)) {
  localStorage.setItem("theme", themes[0]);
}
