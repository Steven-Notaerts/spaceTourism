console.log('crew.js test')

//import via destructering only destinations data
const {crew} = require('../utils/data.json');

const crewSubNav = document.querySelectorAll(".crew-sub-nav__item");
let crewMemberPicture = document.querySelectorAll(".crew__member-image")[0];
let crewFunction = document.querySelectorAll(".crew__function")[0];
let crewName = document.querySelectorAll(".crew__name")[0];
let crewMemberInformation = document.querySelectorAll(".crew__member-information")[0];

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
        crewFunction.innerText = `${crew[0].role}`;
        crewName.innerText = `${crew[0].name}`;
        crewMemberInformation.innerText= `${crew[0].bio}`;       
        crewMemberPicture.setAttribute('src', `${crew[0].images.webp}`)          
     } 
    //MARK SHUTTLEWORTH
     if(crewButton.classList.contains("mark")){    
        crewFunction.innerText = `${crew[1].role}`;
        crewName.innerText = `${crew[1].name}`;
        crewMemberInformation.innerText= `${crew[1].bio}`;        
        crewMemberPicture.setAttribute('src', `${crew[1].images.webp}`)           
     }
     //Victor Glover
    if(crewButton.classList.contains("victor")){    
        crewFunction.innerText = `${crew[2].role}`;
        crewName.innerText = `${crew[2].name}`;
        crewMemberInformation.innerText= `${crew[2].bio}`;        
        crewMemberPicture.setAttribute('src', `${crew[2].images.webp}`)                  
     }
     //Anousheh Ansari
     if(crewButton.classList.contains("anousheh")){    
        crewFunction.innerText = `${crew[3].role}`;
        crewName.innerText = `${crew[3].name}`;
        crewMemberInformation.innerText= `${crew[3].bio}`;        
        crewMemberPicture.setAttribute('src', `${crew[3].images.webp}`)                  
     }

    })
})