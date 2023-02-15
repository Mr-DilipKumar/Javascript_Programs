// for loop
// program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
for (let i = 0; i<n; i++){
  console.log(i)
  sum += (i+1)
}
console.log("Sum of first " +n+ " natural numbers is " +sum)

// for in loop
let obj = {
  harry:90,
  shubh:80,
  shivika:70,
  shubh:24,
}
for (let a in obj){
  console.log("Marks of " + a + " are " + obj[a])
}