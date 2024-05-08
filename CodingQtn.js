// function f1(){
//     setTimeout(() => {
//         console.log(x)
//         console.log(y)
//     }, 5000);
//     x=10
//     y=20
// }

// f1()

// function f2(){
//     for(let i=0;i<3;i++){
//         setTimeout(()=>console.log(i),5000)
//     }
// }

// f2()


// (function(){
//     setTimeout(()=>console.log(1),2000)
//     console.log(2)
//     setTimeout(() => console.log(3),1)
//     console.log(4)
// })()

// function runFunc(){
//     console.log("1" + 1);
//     console.log("A" - 1);
//     console.log(2 + "-2" + "2");
//     console.log("Hello" - "World" + 78);
//     console.log("Hello"+ "78");
//   }
//   runFunc();

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));


// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })()
//   console.log(x);
// })(); 

// var y=33
// (function(){

//     var y=22
//     (function random(){
//         console.log(y)
//         var y=21
//     })()
// })


let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;

  let power=getPower(25)
  console.log(power)

  //console.log(getPower)
  
  //let hero2 = {powerLevel:42};
  //console.log(getPower());
  //console.log(getPower.apply(hero2));