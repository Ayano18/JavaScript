function call(){
    return "this is try block"; 
}

try {
  // If an error occurs here, execution stops, and control
  // immediately jumps to the 'catch' block.
  let result = calling(); //causes error coz no existing calling() function

  console.log(result); 
} catch (error) {
  // Code to handle the error: This block runs ONLY if an error
  // was thrown in the 'try' block.
  console.error("An error occurred:", error.message);
  // You can log the error, display a user-friendly message, etc.
}

console.log("");

//EVEN AND ODD
function EvenOdd(num){
    if(num % 2 == 0){
        throw new TypeError("Even Number");
    } else {
        throw new TypeError("Odd Number");
    }
}

try{
    EvenOdd(6);
} catch(err) {
    console.error("Number: " + err.message);
}

console.log("");

//Age Check
function validateAge(age) {
  if (typeof age !== 'number' || age < 0) {
    // Throw a TypeError if the input is bad
    throw new TypeError("Age must be a non-negative number.");
  }
  if (age < 18) {
    // Throw a specific custom error for business logic
    throw new Error("User must be 18 or older.");
  }
  return true;
}

try {
  validateAge(17);
} catch (error) {
  // We can check the error type/message to handle it differently
  if (error instanceof TypeError) {
    console.warn("Input Validation Failed:", error.message);
  } else {
    console.error("Application Error:", error.message); // Handles the "User must be 18" error
  }
}


console.log("");

//testing reference
try{
    console.log(referencecall);
} catch(ref){
    console.error("error: " + ref.message)
}
