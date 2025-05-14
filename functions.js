console.log("Functions.js file");

let name = "Michael";
let lastName = "Scott";

//Template Strings `${}`//
console.log( " Hello "+ name + " " + lastName);
console.log(`Hello ${name} ${lastName}`);



//Function Declaration
function sayHello(){
    console.log(" Hello Cohort #58 ");
}
// Call The Function
    sayHello();
    sayHello();


    // Example 2 with 1 Parameter
    function greet(firstName){
        console.log(`Hello ${firstName},welcome! `);

    }

    greet("Leo ");
    greet("Alex");

    //Example 3 with 2 parameters

    function greetTwoStudents( name1, name2){
        console.log( ` Hello ${name1} and ${name2}, welcome to your js course! `   ); 
    }
    
    greetTwoStudents(" Brad","Alexis");
    greetTwoStudents("Ryan","Chris");
    
    //Prompt   
   let user= prompt("What is your name ?");
   console.log(user);

function sayMyName(){
    let name2 = prompt("What is Your First Name");
    let age= prompt ( "what is your age");

    console.log (`Your name is ${name2} and you are ${age} years old.`);
}

 sayMyName();   

 // Example 4   Calculator

 function add(num1,num2){
    console.log(`The addition between ${num1} and ${num2} = ${num1+num2}`);

 }

 add(10,2);
 add(3523652,54756407);

 
