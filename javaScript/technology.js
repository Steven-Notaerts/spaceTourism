const { technology } = require("../utils/data.json");
let technologySubNav = document.querySelectorAll(".technology__list-item");
let technologyImage = document.querySelectorAll(".technology__tech-image")[0];
let technologyTitle = document.querySelectorAll(".technology__tech-title")[0];
let technologyDescription = document.querySelectorAll(
  ".technology__tech-description"
)[0];

technologySubNav.forEach((technologyButton) => {
  technologyButton.addEventListener("click", function () {
    technologySubNav.forEach((technologyubButton) => {
      technologyubButton.classList.remove("technology-sub-nav-active");
      this.classList.add("technology-sub-nav-active");
    });

    if (technologyButton.classList.contains("launch-vehicle")) {
      technologyTitle.innerText = `${technology[0].name}`;
      technologyDescription.innerText = `${technology[0].description}`;
      if (screen.width < 1024) {
        technologyImage.setAttribute(
          "src",
          `${technology[0].images.landscape}`
        );
      } else {
        technologyImage.setAttribute("src", `${technology[0].images.portrait}`);
      }
    }

    if (technologyButton.classList.contains("spaceport")) {
      technologyTitle.innerText = `${technology[1].name}`;
      technologyDescription.innerText = `${technology[1].description}`;
      if (screen.width < 1024) {
        technologyImage.setAttribute(
          "src",
          `${technology[1].images.landscape}`
        );
      } else {
        technologyImage.setAttribute("src", `${technology[1].images.portrait}`);
      }
    }

    if (technologyButton.classList.contains("space-capsule")) {
      technologyTitle.innerText = `${technology[2].name}`;
      technologyDescription.innerText = `${technology[2].description}`;
      if (screen.width < 1024) {
        technologyImage.setAttribute(
          "src",
          `${technology[2].images.landscape}`
        );
      } else {
        technologyImage.setAttribute("src", `${technology[2].images.portrait}`);
      }
    }
  });
});
