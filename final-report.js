console.log("----Final Report----");
//Prompts User


//Converts tempature
function convertTempatureRange(){
    let startValue= prompt("Please Enter Yor First Value");
let endValue= prompt("Please Enter Your Final Value ");
let scale= prompt(" C Or F");

    
    
    let results = "";

 for( let temp=startValue;temp<=endValue;temp++){
    if(scale == "C"){
        let farhenheit=(temp*9/5)+32;
         results += ` ${temp} C is ${farhenheit} F`;
        console.log(` ${temp} C is ${farhenheit} F `);
      
        
    } else if(scale =="F"){
        let celsius=(temp-32)*5/9;
         results += `${temp} F is ${celsius} C`;
        console.log( `${temp} F is ${celsius} C`);
        
    }

    
}
    //Displays On HTML
    document.getElementById("result") .innerHTML=results;
}





   



 
