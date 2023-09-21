// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (var i = 2; i < 101; i+=2) {
  console.log(i);
}
console.log(" ")

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
for(var i=1;i<101;i+=2){
  console.log(i)
}
console.log(" ")


// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var i=1;
do{
  multiples=i*3;
  i++;
  console.log(multiples);
}while(multiples<99);

console.log(" ")


// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

let count=0
let m,n 
for(n=2;n<=100;n++)
{
for( m=1;m<=n;m++)
{
  if(n%m==0)
  count++
  
}

if(count==2)

console.log(n)
count=0
}

