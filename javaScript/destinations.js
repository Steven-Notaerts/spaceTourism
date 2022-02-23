//little test to see if js file is connected to html
console.log("test")
//import via destuctering only destinations data
const {destinations} = require('../utils/data.json');
//console.log(destinations);

// destinations.forEach((destination) =>{
//     console.log(destination)

//     const subMenuButtons = document.querySelectorAll(".sub-nav__button")
//     console.log(subMenuButtons)
//     const mainDestinationTitle = document.querySelectorAll(".destination-info__main-title")[0]
//     console.log(destination)
//     subMenuButtons.addEventListener("click", function(){
//     if(subMenuButton.classList.contains("moon")){
//         console.log("moon")
//         mainDestinationTitle.innerHTML = "moon"
//     }

//      if(subMenuButton.classList.contains("mars")){
//         console.log("mars")
//         mainDestinationTitle.innerHTML = "mars"
//     }
//      if(subMenuButton.classList.contains("europa")){
//         console.log("europa")
//          mainDestinationTitle.innerHTML = "europa"
//     }

//      if(subMenuButton.classList.contains("titan")){
//           console.log("titan")
//          mainDestinationTitle.innerHTML = "titan"
//     }

// })
// }
// )


const subMenuButtons = document.querySelectorAll(".sub-nav__button")
console.log(subMenuButtons)
const mainDestinationTitle = document.querySelectorAll(".destination-info__main-title")[0]
console.log(mainDestinationTitle.innerHTML)
subMenuButtons.forEach((subMenuButton) => {
    console.log(destinations)
    // destinations.forEach((destination) => {
    //     console.log(destination)
    // })

    subMenuButton.addEventListener("click", function(){
    if(subMenuButton.classList.contains("moon")){
        console.log("moon")
        //mainDestinationTitle.innerHTML = "moon"
        //test
        mainDestinationTitle.innerHTML = "moon"
    }

     if(subMenuButton.classList.contains("mars")){
        console.log("mars")
        //test
        mainDestinationTitle.innerHTML = "mars"
    }
     if(subMenuButton.classList.contains("europa")){
        console.log("europa")
        //test
         mainDestinationTitle.innerHTML = "europa"
    }

     if(subMenuButton.classList.contains("titan")){
          console.log("titan")
          //test
         mainDestinationTitle.innerHTML = "titan"
    }
})

})




