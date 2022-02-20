const primaryNav = document.querySelector(".navigation");
const navToggle = document.querySelector(".header__toggle-menu-btn");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const activeLink = document.getElementsByClassName("navigation__link");
//console.log(activeLink);

// for (let i = 0; i < activeLink.length; i++) {
//   addEventListener("click", function (event) {
//     event.preventDefault();
//     if (activeLink) {
//       console.log("ok" + activeLink[i].textContent);
//     }
//   });
// }

// const addActiveClass = () => {
//   //console.log(activeLink)
//   // for (let i = 0; i < activeLink.length; i++) {
//   //   console.log(activeLink[i]);
//   // }
// };
// activeLink.addEventListener("click", addActiveClass());
