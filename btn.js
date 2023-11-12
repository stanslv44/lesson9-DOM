const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});
