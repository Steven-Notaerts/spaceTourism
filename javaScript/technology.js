const {technology} = require('../utils/data.json');
console.log(technology)
const technologySubNav = document.querySelectorAll(".technology__list-item");
const technologyImage = document.querySelectorAll(".technology__tech-image");
const technologyTitle = document.querySelectorAll(".technology__tech-title")[0];
const technologyDescription = document.querySelectorAll(".technology__tech-description")[0];

technologySubNav.forEach((technologyButton) => {
    console.log(technologyButton)

    technologyButton.addEventListener("click", function(){
        
        technologySubNav.forEach((technologyubButton) => {
            technologyubButton.classList.remove('technology-sub-nav-active');
            this.classList.add('technology-sub-nav-active')
        })

        if(technologyButton.classList.contains('launch-vehicle')){
            console.log("launch")
            console.log(technologyTitle)
            console.log(`${technology[0].name}`)
                technologyTitle.innertext = `${technology[0].name}`;
                technologyDescription.innertext = `${technology[0].description}`;
            }

             if(technologyButton.classList.contains('spaceport')){
                  console.log(`${technology[1].name}`)
                 console.log("spaceport")
                  console.log(technologyTitle)
                technologyTitle.innertext = `${technology[1].name}`;
                technologyDescription.innertext = `${technology[1].description}`;
            }

             if(technologyButton.classList.contains('space-capsule')){
                  console.log(`${technology[2].name}`)
                 console.log("space-capsule")
                  console.log(technologyTitle)
               technologyTitle.innertext = `${technology[2].name}`;
                technologyDescription.innertext = `${technology[2].description}`;
            }


    })
})