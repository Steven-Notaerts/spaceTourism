console.log('crew.js test')

//import via destructering only destinations data
const {crew} = require('../utils/data.json');
console.log(crew);

const crewSubNav = document.querySelectorAll(".crew-sub-nav__item");
let crewMemberPicture = document.querySelectorAll(".crew__member-image")[0];
console.log(crewMemberPicture.src)
let crewFunction = document.querySelectorAll(".crew__function")[0];
let crewName = document.querySelectorAll(".crew__name")[0];
let crewMemberInformation = document.querySelectorAll(".crew__member-information")[0];
console.log(crewFunction)
console.log(crewName);
console.log(crewMemberInformation)

crewSubNav.forEach((crewButton) => {
    console.log(crewButton)
    crewButton.addEventListener("click", function(){
        //sub navigatie wanneer er op geklikt word op elke button de classlist verwijderd, 
        //en op de active (this) de claslist toegevoegd.
        crewSubNav.forEach((subButton) => {
        subButton.classList.remove('crew-sub-nav__active');
        this.classList.add('crew-sub-nav__active');
       })
       //Douglas Hurley
       if(crewButton.classList.contains("douglas")){  
         //  crewMemberPicture.setAttribute('src', '')  
         crewFunction.innerHTML = `${crew[0].role}`;
         crewName.innerHTML = `${crew[0].name}`;
         crewMemberInformation.innerHTML= `${crew[0].bio}`;        
        // crewMemberPicture.src = `${crew[0].images.webp}`;   
         crewMemberPicture.setAttribute('src', `${crew[0].images.webp}`)          
     } 
    //MARK SHUTTLEWORTH
     if(crewButton.classList.contains("mark")){    
         crewFunction.innerHTML = `${crew[1].role}`;
          crewName.innerHTML = `${crew[1].name}`;
          crewMemberInformation.innerHTML= `${crew[1].bio}`;        
           crewMemberPicture.src = `${crew[1].images.webp}`;           
     }
     //Victor Glover
    if(crewButton.classList.contains("victor")){    
        crewFunction.innerHTML = `${crew[2].role}`;
        crewName.innerHTML = `${crew[2].name}`;
        crewMemberInformation.innerHTML= `${crew[2].bio}`;        
        crewMemberPicture.setAttribute('src', `${crew[2].images.webp}`)                  
     }
     //Anousheh Ansari
     if(crewButton.classList.contains("anousheh")){    
         crewFunction.innerHTML = `${crew[3].role}`;
         crewName.innerHTML = `${crew[3].name}`;
         crewMemberInformation.innerHTML= `${crew[3].bio}`;        
        crewMemberPicture.src = `${crew[3].images.webp}`;                 
     }

    })
})