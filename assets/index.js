/*********************************************** Even numbers to 10 ******
 * 
 * let first_value = 0;
let stop_value = 11;
let value;
function checkEven(value){
   
    let answer = value % 2;

    if(answer == 0){

        console.log(value, "Is Even");
    }


}

for(let i = first_value; i < stop_value; i++){

  checkEven(i);

}
 * 
 * 
 */

//****************************************** multiple table of 3 of 2

/**
 * const three = 3;
const two = 2;
let value;

function getMultipleofthree(value) {


  let answer = three * value;

  console.log("3 x ", value , "=" , answer);
  
}

function getMultipleoftwo(value) {


  let answer = two * value;

  console.log("2 x ", value , "=" , answer);

}

for(let i = 1; i < 11; i++){

  getMultipleofthree(i);

}

console.log("=========================================");

for(let i = 1; i < 11; i++){

  getMultipleoftwo(i);

}
 * 
 * 
 */

const miles = 1000;
let value;

function convert_to_miles(value){

  let answer = value / miles;

  console.log(answer, " km");


}

convert_to_miles(2000);






