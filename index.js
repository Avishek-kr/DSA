const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

function commonItem(arr1, arr2) {

  // return arr1.some(item => arr2.includes(item)) 1.

  // let map = {}               2.
  // for (let i=0; i<arr1.length; i++){
  //   if(!map[arr1[i]]){
  //     const item = arr1[i];
  //     map[item]= true;
  //   }
  // }
  //   for(let j=0; j<arr2.length; j++){
  //     if(map[arr2[j]]){
  //       return true;
  //     }
  //   }
  //   return false;
  // O(a+b)
}
commonItem(array1, array2);
// function commonItem(arr1,arr2){      3.
//   for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//       if(arr1[i]===arr2[j]){
//       return true;
//     }
//   }
// }
// return false;
// }

// commonItem(array1, array2);

//BIG O - 0(a*b) 0(n^2)

//array1 ===> obj {
//   a:true,
//   b:true,
//   c:true,
//   x:true
// }
// array2[index] === obj.propertiesc

// --------------------------Arrays-------------------------------------- //


const strings=['a','b','c','d'];

// strings.push('e');
strings[2]

// add
strings.push('e') //0(1)

// delete
strings.pop(); //0(1)
strings.pop(); //0(1)

// add beginning
strings.unshift('x'); //0(n)

// middle
strings.splice(2,0,'aleins') //0(n)
console.log(strings)

