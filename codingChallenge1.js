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



//find method
const firstWithdrawal=movements.find(mov=>mov<0);
console.log(firstWithdrawal);
console.log(movements);


const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];




const account=accounts.find(acc=>acc.owner==='Jessica Davis');
console.log(account);

for(acc of accounts){
    if(acc.owner==='Jessica Davis'){
        console.log(acc);
        
    }
}

const accountMovements=accounts.map(acc=>acc.movements);
console.log(accountMovements);
const allMovements=accountMovements.flat();
console.log(allMovements);
const overalBalance=allMovements.reduce((acc,mov)=>acc+mov,0);
console.log(overalBalance);


//flat+map
const overBalance=accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0);
console.log(overalBalance);



//flatMap
//flatMap has one level deep
const overalBalance2=accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
console.log(overalBalance2);
 


//String
const owners=['Jonas','Zach','Adam','Martha'];
console.log(owners.sort());

//Number
console.log(movements);

//Ascending
// movements.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
// });

movements.sort((a,b)=>a-b);
console.log(movements);

//Descending
movements.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1;
})
console.log(movements);



const x = new Array(7);
console.log(x);

x.fill(1,3);
console.log(x);


const arr=[1,2,3,4,5,6,7];
arr.fill(23,4, 6);
console.log(arr);


const y = Array.from({length:7}, ()=>1);
console.log(y);

const z = Array.from({length:7},(cur,i)=>i+1);
console.log(z);



//Array method practice
//.1
const bankDepositSum= accounts.flatMap(acc=>acc.movements).filter(deposit=>deposit>0).reduce((acc,cur)=>acc+cur,0);
console.log(bankDepositSum);


//.2
// const numDeposits1000=accounts.flatMap(acc=>acc.movements).filter(deposit=>deposit>=1000).length;


//reduce method

const numDeposits1000=accounts.flatMap(acc=>acc.movements).reduce((count,cur)=>cur>=1000?count+1:count,0);

console.log(numDeposits1000);




//.3
const sum=accounts.flatMap(acc=>acc.movements).reduce((sum,cur)=>{
    cur>0?sum.deposits+cur:sum.withdrawals+cur
    return sum;
},{deposit:0,withdrawal:0});
console.log(deposits,withdrawals);



//.4 this is a nice title -> This Is a Nice Title
const convertTitleCase=function(title){
    const exceptions=['a','an','the','but','or','on','and','in','with'];
    const titleCase=title.toLowerCase().split(' ').map(word=> exceptions.includes(word)?word:word[0].toUpperCase()+word.slice(1)).join(' ');
    return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

const recommendedFood=function(dogs){
    for(dog of dogs){
        dog.recommendedFood=dog.weight**0.75*28;
    } 
}

recommendedFood(dogs);
console.log(dogs);

console.log("Sarah's dog");
const SarahDogs=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(SarahDogs);
const isSarahDogsEatOk=SarahDogs.curFood>SarahDogs.recommendedFood?"Eating to much":"Eating to little";
console.log(isSarahDogsEatOk);

const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recommendedFood).map(dog=>dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle=dogs.filter(dog=>dog.curFood<dog.recommendedFood).map(dog=>dog.owners);
console.log(ownersEatTooLittle);

const strOfOwnersEatTooMuch=`${ownersEatTooMuch.flatMap(owner=>owner).join(' and ')}'s dog is eating too much!`;
console.log(strOfOwnersEatTooMuch);

const strOfOwnersEatTooLittle=`${ownersEatTooLittle.flatMap(owner=>owner).join(' and ' )}'s dog is eating too little!`;
console.log(strOfOwnersEatTooLittle);

const isExactlyRecommend =dogs.map(dog=>dog).some(dog=>dog.curFood===dog.recommendedFood);
console.log(isExactlyRecommend);

const isOkayRecommend = dogs.map(dog=>dog).some(dog=>dog.curFood>(dog.recommendedFood*0.90) && dog.curFood<(dog.recommendedFood*1.10));
console.log(isOkayRecommend);

const dogsEatingOkay=dogs.map(dog=>dog).filter(dog=>dog.curFood>(dog.recommendedFood*0.90) && dog.curFood<(dog.recommendedFood*1.10));
console.log(dogsEatingOkay);

const sortRecommendDog=dogs.slice().map(dog=>dog.recommendedFood).sort((a,b)=>a-b);
console.log(sortRecommendDog);