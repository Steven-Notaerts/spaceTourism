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

const mainNavigationButtons = document.querySelectorAll(".navigation__link");
console.log(mainNavigationButtons)
mainNavigationButtons.forEach((mainNavigationButton) => {
console.log(mainNavigationButton)
  mainNavigationButton.addEventListener("click", function(){
    mainNavigationButtons.forEach((mainButton) => {
       mainButton.classList.remove('active-main');
     this.classList.add('active-main');
    })
   
  })
})
