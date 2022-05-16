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