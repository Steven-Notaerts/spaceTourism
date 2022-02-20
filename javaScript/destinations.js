//little test to see if js file is connected to html
console.log("test")
//import via destuctering only destinations data
const {destinations} = require('../utils/data.json');
console.log(destinations);

destinations.forEach((destination) =>{
    console.log(destination)
})

