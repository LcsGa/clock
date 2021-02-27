const body = document.querySelector("body");
const toggleTheme = document.querySelector(".toggle-theme");

const storeTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const modifyTheme = () => {
  const prevTheme = [...body.classList]
    .filter((className) => /theme/.test(className))[0]
    .split("-")[1];
  storeTheme(prevTheme === "dark" ? "light" : "dark");
  body.classList.toggle("theme-dark");
  body.classList.toggle("theme-light");
};
toggleTheme.addEventListener("click", modifyTheme);

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  theme === "light" && modifyTheme();
});
