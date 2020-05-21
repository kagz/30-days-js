'use strict';

// OLD JS WAY

// var names = ['kamagera','mbogi','genje'];

// var counter = 10;
/**
 * found out a person can re declare a variable...
 */

// ES6

// const and let 

// const todoList =['milk','cow'];
//  console.log(todoList);///you cant re asign a const

//  let todoJob=['kuoga','kukula'];

//  todoJob=5;

//  console.log(todoJob);//here using let...makes the stuff reassignable


// const list =[1,2,3,4,5]
// for(let i = 0; i<list.length;i++){
//     console.log(i);
// }


// const name= 'mbogi ya kamagera';
// const age =28;
// console.log(`my name is ${name} and my age is ${age}`);

// function getBook(title,author){
// return{
// title,
// author
// }
// };

// const book =getBook('Harry Potter','JK')

// console.log(book);

// const list= {

//     name:'shopping list',
//     items:['milk','cow']
// }

// const {name,items}=list;

// console.log(name,items);

// const sayName = ()=>{
//     console.log('my location is here')
// }

// sayName()



// const sayHome =(h)=>{

//     console.log(`my home is ${h}`)
// }

// sayHome("kayole");

// const user= {
//     name:'kamagera',
//     age:69,
//     sayName: function(){
//         console.log(`May name is ${this.name}`);
//         const fullName=()=>{
//             console.log(`my name is ${this.name} and my age is ${this.age}`)
//         }
//         fullName();
//     }
// };
// user.sayName();

// const add= (c=1,d=1)=>{
//     console.log(c+d);
// }
// add(20,70)



//const shoppingList = ['milk','cow','eggs','banana','choc'];

// //forEach stuffs
// shoppingList.forEach((item,index)=>{
//     console.log(item,index);


// });

/**
*
map
*
*/

// const newList = shoppingList.map(item=>item)

// console.log(newList);

/*
*
filter
*
*
*/


// const filterList = shoppingList.filter((item) => {
//     return item !=='cow'
// });

// console.log(filterList);

/**
 * constructor functions in ES6
 */

//  class ShoppingList{
// constructor(items,num){
// this.items=items;
// this.num=num;
// }
// sayList(){
//     console.log(this.items)
// }

//  }

//  const myList = new ShoppingList(['Milk','Choco','Redbul'],3);

//  console.log(myList);

//  myList.sayList();


 //inheriting from class

//  class Product extends ShoppingList{
//      constructor(items,num,amount,cost){
//          super(items,num)
// this.amount= amount;
// this.cost= cost;
//      }
//  }

//  const product = new Product(['redbull','chocolate','candy'],3,5,20);

//  //console.log(product);
// product.sayList();


/*
promises
*/
// //resolve
// const prom =new Promise((resolve,reject)=>{
// //all stuffs here are async 
// setTimeout(()=>{
// resolve({user:'Dru',password:'werfht'});
// },2000);

// });

// prom.then(data=>{
//     console.log(data);
// })


//reject
// const prom =new Promise((resolve,reject)=>{
//     //all stuffs here are async 
//     setTimeout(()=>{
//     reject(new Error('SHIDA KUBWA HAPA'));
//     },2000);
    
//     });
    
//     prom.then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err)
//     })
        
    
