// console.log('flow')
// let arr = ['phuoc', '24']

//  for(let i = 0; i < arr.length; i++){
//         console.log('arr: ', arr[i])
//  }

// let arr = [
//     {name:'phuoc', age: '24'},
//     {name:'Anna', age: '22'},
//     {name: 'vis', age: '22'}
// ]

// let filter = arr.find((item, index)=>{
//     return item && item.age==24 ; // tra ra phan tu cua mang do
// })
 
// console.log(filter)

// let arr =[1,2,3,4,5,6,7,8,9,10];

// let mapArr = arr.map((item, index)=>{  // map khong lam thay doi mang ban dau
//     item = item*item;
//     return item;
// })

// console.log(mapArr);


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

const sumWithInitial = array1.reduce(
  (accumulator, currentValue, index) => {
    let total = accumulator + currentValue
    console.log( `accumulator: ${accumulator}, currentValue: ${currentValue},index: ${index},returns: ${total}`)
    return total
  } 

);

console.log(sumWithInitial);
// Expected output: 1

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// console.log(array.reduce(reducer));
