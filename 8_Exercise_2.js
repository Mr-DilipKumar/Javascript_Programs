// practice set
// problem 1
let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age>10 && age<20){
  console.log("Your eligible for that feature.")
}
else{
  console.log("You are not eligible.")
}

// problem 2
let age1 = prompt("what is your age?")
switch(age1){
  case '12':
      console.log("Your age is 12")
      break
    case '13':
      console.log("Your age is 13")
      break
    case '14':
      console.log("Your age is 14")
      break
    default:
      console.log("You are now not special buddy")
}

