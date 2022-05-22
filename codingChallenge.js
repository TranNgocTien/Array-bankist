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



