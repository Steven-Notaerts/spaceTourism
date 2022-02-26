//little test to see if js file is connected to html
console.log("test")
//import via destructering only destinations data
const {destinations} = require('../utils/data.json');
console.log(destinations[0].images);

const subMenuButtons = document.querySelectorAll(".sub-nav__button")
console.log(subMenuButtons)
const mainDestinationTitle = document.querySelectorAll(".destination-info__main-title")[0]
const mainDestinationDescription = document.querySelectorAll(".destination-info__description")[0]
const mainDestinationDistance = document.querySelectorAll(".destination-travel-info__distance-destination")[0]
const mainDestinationTravelTime = document.querySelectorAll(".destination-travel-info__travel-time")[0]
const mainDestinationsImage = document.querySelectorAll(".destinations__planet-image").currentSrc
//console.log(mainDestinationsImage)

subMenuButtons.forEach((subMenuButton) =>{


    subMenuButton.addEventListener("click", function(){
        //sub navigatie wanneer er op geklikt word op elke button de classlist verwijderd, 
        //en op de active (this) de claslist toegevoegd.
        subMenuButtons.forEach((subButton) => {
        subButton.classList.remove('active-sub-nav');
        this.classList.add('active-sub-nav');
       })

        if(subMenuButton.classList.contains("moon")){       
        mainDestinationTitle.innerHTML = `${destinations[0].name}`;
        mainDestinationDescription.innerHTML = `${destinations[0].description}`;
        mainDestinationDistance.innerHTML= `${destinations[0].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[0].travel}`;
       // mainDestinationsImage.src = `${destinations[0].images.webp}`;     
        //console.log(mainDestinationsImage);   
        document.querySelector(".destinations__planet-image").setAttribute("src", `${destinations[0].images.webp}`)
    }
    if(subMenuButton.classList.contains("mars")){
        mainDestinationTitle.innerHTML = `${destinations[1].name}`;
        mainDestinationDescription.innerHTML = `${destinations[1].description}`;
        mainDestinationDistance.innerHTML= `${destinations[1].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[1].travel}`;
       // mainDestinationsImage.src = '../assets/image/destination/image-mars.webp';   
      //  console.log(mainDestinationsImage);  
     document.querySelector(".destinations__planet-image").setAttribute("src", './assets/image/destination/image-mars.webp')
    }
    if(subMenuButton.classList.contains("europa")){
        mainDestinationTitle.innerHTML = `${destinations[2].name}`;
        mainDestinationDescription.innerHTML = `${destinations[2].description}`;
        mainDestinationDistance.innerHTML= `${destinations[2].distance}`;
        mainDestinationTravelTime[0] = `${destinations[2].travel}`;      
        console.log(mainDestinationsImage);   
    }
    if(subMenuButton.classList.contains("titan")){
        mainDestinationTitle.innerHTML = `${destinations[3].name}`;
        mainDestinationDescription.innerHTML = `${destinations[3].description}`;
        mainDestinationDistance.innerHTML= `${destinations[3].distance}`;
        mainDestinationTravelTime.innerHTML = `${destinations[3].travel}`; 
        console.log(mainDestinationsImage.src);      
     
    }
    })
})


