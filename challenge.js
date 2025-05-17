

function doubleNumber(num){
   console.log(num*2);
}

doubleNumber(4);
doubleNumber(10);



function combineName(firstName="unknown",lastName="unknown"){
    console.log(firstName+lastName)

}

combineName( );

function convertToSecondess(minutes){
    console.log(minutes*60) ;
}

convertToSecondess(20);
convertToSecondess(259);

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
   
    function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    
    if(tmp<15){
        p.classList.add("cold");
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
        p.classList.add("normal");
    }else{
        outfit="t-shirt"; 
        p.classList.add("hot");
    }

    p.innerHTML="You should wear : " + outfit;
}