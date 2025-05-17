for (let i=0;i<4;i++){
    document.write(" My for is working");
}

for(let i=1;i<=10;i++){
    document.write(`<p> 2x${i}= ${i*2}<p>`);
}
//While loop
let i=0;

while(i<=10);
console.log(i);
i++;

//do-while



function countDown(){
    let seconds=10;
    let results="";

    while (seconds>0){
        results+= `<p> Launching in ${seconds}<p>`;
        seconds--;

    }
    results+= "Liftoff";
    document.write(results);
}
countDown();


//do-while
function passwordPrompt(){
    let correctPassword="1234";
    let userinput;
    let notifcation = "Simulating password";

    do{
        userinput= prompt("Enter Your Pasword: ");
        notifcation="Simtlutiang User Passweord";
    } while( userinput !== correctPassword);
    document.write(notifcation);
}