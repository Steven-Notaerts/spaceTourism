//little test to see if js file is connected to html
console.log("test")
//import via destructering only destinations data
const {destinations} = require('../utils/data.json');
console.log(destinations);

const subMenuButtons = document.querySelectorAll(".sub-nav__button")
console.log(subMenuButtons)
const mainDestinationTitle = document.querySelectorAll(".destination-info__main-title")[0]
const mainDestinationDescription = document.querySelectorAll(".destination-info__description")[0]
const mainDestinationDistance = document.querySelectorAll(".destination-travel-info__distance-destination")[0]
const mainDestinationTravelTime = document.querySelectorAll(".destination-travel-info__travel-time")[0]
const mainDestinationsImage = document.querySelectorAll(".destinations__planet-image")[0]
console.log(mainDestinationsImage.src)

subMenuButtons.forEach((subMenuButton) =>{

    subMenuButton.addEventListener("click", function(){
    
        if(subMenuButton.classList.contains("moon")){
        console.log("moon");        
        mainDestinationTitle.innerHTML = `${destinations[0].name}`;
        mainDestinationDescription.innerHTML = `${destinations[0].description}`;
        mainDestinationDistance.innerHTML= `${destinations[0].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[0].travel}`;
        mainDestinationsImage.src = `${destinations[0].images.webp}`;
     //   subMenuButton.classList.add("active-sub-nav")
        
    }
    if(subMenuButton.classList.contains("mars")){
        console.log("mars");
        mainDestinationTitle.innerHTML = `${destinations[1].name}`;
        mainDestinationDescription.innerHTML = `${destinations[1].description}`;
        mainDestinationDistance.innerHTML= `${destinations[1].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[1].travel}`;
        mainDestinationsImage.src = `${destinations[1].images.webp}`;
        //"../assets/image/destination/image-moon.webp"
           console.log(mainDestinationsImage)
       // subMenuButton.classList.add("active-sub-nav")
     
    }
    if(subMenuButton.classList.contains("europa")){
        console.log("europa");
        mainDestinationTitle.innerHTML = `${destinations[2].name}`;
        mainDestinationDescription.innerHTML = `${destinations[2].description}`;
        mainDestinationDistance.innerHTML= `${destinations[2].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[2].travel}`;
     //   subMenuButton.classList.add("active-sub-nav")
        
    }
    if(subMenuButton.classList.contains("titan")){
        console.log("titan");
        mainDestinationTitle.innerHTML = `${destinations[3].name}`;
        mainDestinationDescription.innerHTML = `${destinations[3].description}`;
        mainDestinationDistance.innerHTML= `${destinations[3].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[3].travel}`;
      //  subMenuButton.classList.add("active-sub-nav")
     
    }
    })
})
//}
// )
//1. selecteer de sub menu's buttons op de DOM
//2. op button click de classlist checken
//3. als classlist overeenkomt met een waarde in de array de inner html veranderen naar de waardes in de array
//4.
//5.
//6.

const removeClasslist = () => {
    const subMenuButtonsClasslist = document.querySelectorAll(".sub-nav__button")
    subMenuButtons.forEach((button) => {
        button.classList.remove("active-sub-nav")
    })
}

