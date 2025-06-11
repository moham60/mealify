let links = document.querySelectorAll(`ul a`);
function handleActive(index) {
  links.forEach((el, indx) => {
    if (index == indx) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
links.forEach((el, index) => {
  el.addEventListener("click", () => {
    handleActive(index);
  });
});
let iconDark = document.getElementById("moon");

function handleDarkMode(count) {
  if (count % 2 == 0) {
    document.documentElement.style.setProperty("--main-color", "red");
    document.documentElement.style.setProperty("--bg-white", "black");
    document.documentElement.style.setProperty("--bg-secondary", "black");
    document.documentElement.style.setProperty("--color-gray", "white");
    document.documentElement.style.setProperty("--default-color", "white");
    iconDark.classList.remove("fa-moon");
    iconDark.classList.add("fa-sun");
  } else {
    document.documentElement.style.setProperty("--main-color", "#ce1212");
    document.documentElement.style.setProperty("--bg-white", "white");
    document.documentElement.style.setProperty("--bg-secondary", "#eeeeee");
    document.documentElement.style.setProperty("--color-gray", "#9f9f9f");
    document.documentElement.style.setProperty("--default-color", "#212529");
    iconDark.classList.add("fa-moon");
    iconDark.classList.remove("fa-sun");
  }
}
var count = 0;
iconDark.addEventListener("click", () => {
  handleDarkMode(count);
  count++;
});
