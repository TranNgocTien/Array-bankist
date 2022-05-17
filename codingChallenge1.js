// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs=function(JuliaDog,KateDog){
    const JuliaOnlyDog =JuliaDog.slice(1,3);
    console.log(JuliaOnlyDog);
    const Dogs= JuliaOnlyDog.concat(KateDog);
    console.log(Dogs);
    Dogs.forEach(function(dog,i,Dogs){
        if(dog>=3){
            console.log(`Dog number ${i} is an adult, and is ${dog} years old`);
        }else if(dog>0 && dog<3){
            console.log(`Dog number ${i} is still a puppy 🐶`);
        }
    })
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd=1.1;
//map method
const movementsUSD=movements.map(function(mov){
    return mov * eurToUsd;
})
console.log(movements)
console.log(movementsUSD);

//for of loop
const movementsUSDfor=[];
for(const mov of movements) movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);


//arrow function
const movementsUSDarrow = movements.map(mov=>mov*eurToUsd);
console.log(movementsUSDarrow);


const movementsDecriptions=movements.map((mov,i)=>`Movements ${i+1}: You ${mov>0 ? 'deposit':'withdrew'} ${Math.abs(mov)}`);
console.log(movementsDecriptions);

const user='Steven Thomas Williams';
const str=user.split(" ").map(mov=>mov[0]).join('').toLowerCase();
console.log(str);

const deposits=movements.filter(mov=>mov>0);
console.log(deposits);
const depositsFor=[];
for (movement of movements){
    if(movement>0){
        depositsFor.push(movement);
    }
}
console.log(depositsFor);



const withdrawals=movements.filter(mov=>mov<0);
console.log(withdrawals);

const withdrawalFor=[];
for(mov of movements){
    if(mov<0)
        withdrawalFor.push(mov);
}

console.log(withdrawalFor)

const balance=movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance);


//Maximum value
const max=movements.reduce((acc,mov)=>{
    if(acc>mov)
        return acc;
    else
        return mov;
},movements[0]);
console.log(max);



/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge=function(dogs){
    
    const dogsAdult= dogs.filter(dog=>dog>2).map(age=>16+age*4);
    const dogsPuppy=dogs.filter(dog=>dog<=2).map(age=>age*2);
    const dogs18=dogsAdult.filter(dog=>dog=>18);
    console.log(dogsAdult);
    console.log(dogsPuppy);
    console.log(dogs18);
    let avr= dogs18.reduce((acc,cur)=>acc+cur,0);
    avr/=dogs18.length;
    console.log(avr);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const eurToUsdCur=1.1;
const totalDepositsUSD=movements.filter(mov=>mov>0).map(mov=>mov*1.1).reduce((acc,cur)=>acc+cur,0);
console.log(totalDepositsUSD);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge1=ages=>ages.map(age=>age>2 ? 16+age*4 : age*2).filter(age=>age>18).reduce((acc,cur,_,arr)=>acc+cur/arr.length,0);
const avg1=calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const avg2=calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1,avg2);

/*1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true 
*/

let isArray=function(input){
    if(toString.call(input)==='[object Array]'){
        return true;
    }
    return false;
}
console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));


/*
 Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/ 

const array_Clone=arr=>arr.slice();

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/*
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/
let first=function(arr,n){
    if( arr==0)
        return void 0;
    else if(n==0){
        return arr[0];
    }else if(n<0){
        return [];
    }
    return arr.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


/*4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]*/

const last = function(arr,n){
    return n===null? arr[-1] : arr.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

/*
5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
const myColor=['Red','Green','White','Black'];
const joinElement=function(arr){
    console.log(arr.join(','));
    console.log(arr.join('+'));
}
joinElement(myColor);


/*6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. */

const dashesEven=function(n){
    const result=[];
    const number=n.split('');
    for([i,num] of number.entries()){
        if(number[i-1]%2==0 && number[i]%2==0){
            result.push('-',number[i]);
        }else{
            result.push(number[i]);
        }
    }
    return result;   
        
   
}
console.log(dashesEven('025468').join(''));
console.log(dashesEven('1680924').join(''));