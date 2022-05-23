// 7. Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
const ascending= function(arr){
    return arr.sort((a,b)=>a-b);
}
console.log(ascending(arr1));

//8. Write a JavaScript program to find the most frequent item of an array. 
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

let arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let m=0;
let mf=1;
let item=0;
for(let i=0;i<arr2.length;i++){
    for(let j=i;j<arr2.length;j++){
        if(arr2[i]===arr2[j]){
            m++;
        }
        if(m>mf){
            mf=m;
            item=arr2[j];
        }
    }
    m=0;
}
console.log( `${item} ( ${mf} times )`);



// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const Upper=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
const Lower=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const result=[];
const swapCaseStr=function(str){
    const arrStr=str.split('');
    for(const [i,el] of arrStr.entries()){
        if(Upper.includes(el)){
            result.push(el.toLowerCase());
        }
        if(Lower.includes(el)){
            result.push(el.toUpperCase());
        }
        if(arrStr[i]===' '){
            result.push(el);
        }
    }
}
swapCaseStr('The Quick Brown Fox');
console.log(result.join(''));

// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const arrOfArrs=function(arrs){
    for(const [i,el] of arrs.entries()){
        console.log(`row ${i}`);
        for(const arr of el){
            console.log(arr);
        }
    }
}
arrOfArrs(a);