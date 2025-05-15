console.log( "Assiginmet 3 Tempature");
//User Enters Tempature

let tempature = prompt(" Enter Your Tempature ");
let scale = prompt("Please Enter C Or F");

//Converts Tempature 
let fahrenhiet = (tempature*9/5+32);
let celsisu=((tempature-32)*5/9);




//Displays in HTML
document.getElementById("result").innerHTML=`The conversion of Celsius  ${tempature}" to Fahrenheit is ${fahrenhiet}"`;

// Converts Temapature if needed
function convertTempature(){
    if (scale =="C"){
      document.getElementById("result").innerHTML=`The conversion of Celsius  ${tempature}" to Fahrenheit is ${fahrenhiet}"`;
      console.log(`The conversion of Celsius  ${tempature} to Fahrenheit is ${fahrenhiet}`);
    }
    else {
       document.getElementById("result").innerHTML=`The conversion of Fahrenheit ${tempature}" to Celsuis is ${celsisu}"`;
      console.log( `The conversion of Fahrenheit ${tempature} to Celsius is ${celsisu}`   );
    }
 
}

convertTempature();