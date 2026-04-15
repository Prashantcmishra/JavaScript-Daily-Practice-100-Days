// 1. Add element at the end of the Array 

// let arr = [1,2,3];
// arr.push(4);
// console.log(arr);

// 2. Remove element at the end of the Array 

// let arr = [1,2,3];
// arr.pop(2);
// console.log(arr);

// 3. Add element at the start of the Array 

// let arr = [2,3,4,5];
// arr.unshift(1);
// console.log(arr);

// 4. Remove element from the start of the Array 
// let arr = [0,1,2,3,4];
// arr.shift();
// console.log(arr);

// 5. Return new Array after Transformation 

// let arr = [1,2,3];
// let res = arr.map(x => x*2);
// console.log(res);

// 6. Filter Based on Condition 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let res = arr.filter(x => x>1);
// console.log(res);

// 7. Reduces to a single Value 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum  = arr.reduce((acc , curr) => acc + curr ,0);
// console.log(sum);

// 8. foreach() => Used to iterate loop over an array 
// Print all elements

// const arr = [1,2,3,4];
// arr.forEach((item , index) => {
//       console.log(item , index);
// });

// 9. We can also sum all the element of the array using foreach() 

// let arr = [1,2,3,4];
// let sum  = 0;
// arr.forEach(num => {
//     sum += num ;
// })

// console.log(sum);

// 10. Find maximum number using reduce 

// let arr = [1,2,3,4,5];

// let max = arr.reduce((acc , curr) => {
//     return curr > acc ? curr : acc;
// })

// console.log(max);

// 11. Return first matching element of the Array 

// let arr = [1,3,1,4,5,2,4,12,]
// let newarr = arr.find(x=> x <5);
// console.log(newarr);

// 12 . Return index of element 

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.findIndex(x => x>5));

// 13. Check value exist in Array or not 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.includes(5));

// 14 Find index of the element 
// let arr  = [1,2,3,4,5];
// console.log(arr.indexOf(5));


// 15 Return portion of the array 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.slice(1,3));


// 16 Add or remove element and modifies the original array 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.splice(2,3))


