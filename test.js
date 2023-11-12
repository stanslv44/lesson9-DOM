// for (let i = 0; i < 10; i++) {
//   setTimeout(() => (document.body.style.backgroundColor = "red"), 3000 * i);
//   setTimeout(
//     () => (document.body.style.backgroundColor = "blue"),
//     3000 * i + 3000
//   );
// }

console.log(screen);

// setInterval(() => (document.body.style.backgroundColor = "red"), 500);
// setInterval(() => (document.body.style.backgroundColor = "blue"), 1000);

// document.body.style.backgroundColor = "red";

// setInterval(() => {
//   if (document.body.style.backgroundColor === "red") {
//     document.body.style.backgroundColor = "blue";
//   } else {
//     document.body.style.backgroundColor = "red";
//   }
// }, 1000);

// MENU BTN

const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
  if (menuBtn.textContent === "M") {
    menuBtn.textContent = "X";
  } else {
    menuBtn.textContent = "M";
  }

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});

// TABS

const tabs = document.querySelectorAll(".tab");
const conts = document.querySelectorAll(".cont");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Adding active class to active tab
    tabs.forEach((tabItem) => tabItem.classList.remove("active"));
    tab.classList.add("active");

    // Removing active from all conts
    conts.forEach((cont) => cont.classList.remove("active"));

    // Getting the data target of the clicked tab
    const dataTarget = tab.getAttribute("data-target");

    // Adding class active to cont with id from data-target
    document.querySelector(`#${dataTarget}`).classList.add("active");
  });
});
