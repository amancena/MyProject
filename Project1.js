// const coding=['Java', 'C++', 'Python', 'Ruby', 'Java Script','C#']

// coding.forEach((element) => {
//     console.log(element)
// });

// const num=[1,2,4,5,6,7,21,34,23]
// const result=num.filter((item)=>{
//     return item>4
// })

// console.log(result)

// const resultMap=num.map((item)=>item*2)
// console.log(resultMap)

const Books = [
    { title: 'Book1', genre: 'Fiction', publish: 1981, edition: 2011 },
    { title: 'Book2', genre: 'Non-Fiction', publish: 1956, edition: 1002 },
    { title: 'Book3', genre: 'Non-Fiction', publish: 1930, edition: 300 },
    { title: 'Book4', genre: 'Fiction', publish: 2004, edition: 345 },
    { title: 'Book4', genre: 'Fiction', publish: 2021, edition: 198 },
    { title: 'Book5', genre: 'Non-Fiction', publish: 2012, edition: 120 },
]

//const userBooks=Books.filter((bk)=>(bk.genre==='Non-Fiction' && bk.publish>2000))
let userBooks = Books.filter((bk) => bk.genre === 'Non-Fiction')
userBooks = Books.filter((bk) => bk.publish > 2000)

console.log(userBooks)

const myNums = [1, 2, 4, 5, 23, 20]

const result = myNums.reduce(function (acc, curVal) {
    console.log(`acc=${acc} and Cur Val=${curVal}`)
    return acc + curVal;
}, 0)

console.log("Total=", result)


const items = [
    { itemName: 'Butter', price: 1000 },
    { itemName: 'Arahar Dal', price: 900 },
    { itemName: 'Mop Set', price: 500 },
    { itemName: 'Mobile', price: 9000 },
]


const totRes = items.reduce((acc, item) => acc + item.price, 0)
console.log(`Total =${totRes}`)

console.log("--------------------Playing with Strigs-------------------------")

// let str="Aman Agarwal"
// // for(let i=0;i<str.length;i++){
// //     console.log(str[i])
// // }

// str.forEach((element) => {
//     console.log(element)
// });


// const variab=[10,20,13,24,40]

// function arr(value,index,arr){
//     arr[index]=value*10
//     return value
// }
// console.log(variab.forEach(arr))

const name = "Aman Agarwal"

for (let item of name) {
    console.log(item)
}

const map = new Map()
map.set('IN', 'INDIA')
map.set('US', 'United States Of America')
map.set('RU', 'RUSSIA')

console.log(map)

for (let [key, value] of map) {
    console.log(key, ":->", value)
}

const myObject = {
    "Sehwag": "Cricket",
    "Rafael Nadal": "Tennis",
    "Ganguly": "Cricket",
    "Lioneel Messi": "Football",
    "Tiger Woods": "Golf",
}

// for(let [itemkey,itemval] of myObject){
//     console.log(itemkey,"-->",itemval)
// }

for (const values in myObject) {
    console.log(`keys=${values}  value=${myObject[values]}`)
}

const programming = ['JavaScript', 'Java', 'Ruby', 'Python']
for (const i in programming) {
    console.log(programming[i])
}
//Map is not iteratable

const leprogramming = ['JavaScript', 'Java', 'Ruby', 'Python']

leprogramming.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

// leprogramming.forEach(printme)


// function printme(item){
//     console.log(item)
// }

const newProg = [
    {
        langname: 'Java',
        langFilename: "JavaScript"
    },
    {
        langname: 'Java',
        langFilename: "Java"
    },
    {
        langname: 'Python',
        langFilename: "Py"
    },

]

newProg.forEach((item) => console.log(item.langFilename))

// const promiseone=new Promise(function(resolve, reject){
//     //Do async task
//     //DB calls,crytography, network
//     setTimeout(function() {
//         console.log("Async task got completed")
//     }, 2000);
//     resolve()
// })

// promiseone.then(function(){
//     console.log("Promise consumed")
// })

// promiseTwo=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task completed")
//         resolve()
//     },1000)

// })

// promiseTwo.then(function(){
//     console.log("Promise 2 consumed")
// })


// new promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("Promise 3 consumed without assinging to variable")
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 3 without creating object resolved")
// })

// const promise3=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise 3 consumed")
//         resolve({name:"Aman Agarwal", email:"aman.a.agarwal@ericsson.com"})
//     })
// })

// promise3.then(function(user){
//     console.log(`user=${user.name} and email=${user.email}`)
// })


// const promise4=new Promise(function(resolve,reject){
//     let result=true
//     if(!result){
//         resolve({username:'Aman',email:"aman.a.agarwal@ericsson.com"})
//     }

//     else{
//         reject("ERROR:Something went wrong")
//     }
// })

// promise4.then((user)=>{
//     console.log(`console output:${username}`)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log("This is a block for error")
// }).finally(()=>{
//     console.log("This is a finally block")
// })

// const promise5 = new Promise(function (resolve, reject) {
//     let result = true
//     if (!result) {
//         resolve({ username: "Javascript", password: "123" })
//     }
//     else {
//         reject("This is javascript error")
//     }
// })


// async function consumepromise5() {
//     try {
//         const response = await promise5
//         console.log(response)
//     }

//     catch (error) {
//         console.log(error)
//     }

// }

//consumepromise5()

async function inbuiltPromise() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await result.json()
        console.log(data)
    }
    catch(error){
        console.log("ER:",error)
    }

}

inbuiltPromise()

//call, apply and bind

let obj1={
    name:"Aman Agarwal",
    email:'aman.a.agarwal@ericsson.com',
//     print:function(){
//         console.log(`name:${this.name} and email:${this.email}`)
//     }
}

function print(hometown, state){
    console.log(`name:${this.name} and email:$${this.email} lives in ${hometown} which is located in ${state}`)
}

let obj2={
    name:"Girdhar Gopal",
    email:'Girdhar.gopal@lordofuniverse.com'
}

print.call(obj2,"Vrindvan","Uttar Pradesh")
print.apply(obj2,["Vrindvan","Uttar Pradesh"])

let res=print.bind(obj1,"Kanpur","Uttar Pradesh")
console.log(res)
res()


let array=['Aman','Abhay','Salil','Nitesh','Devesh']
let obj3={
    name:"Aman",
    city:"Melbourne",
    getIntro:function(){
        console.log(`Name:${this.name} lives in ${Kanpur}`)
    }
}


function addNumber(number){
    if(number<=0){
        return 0;
    }

    else{
        return number+addNumber(number-1)
    }
}

let addResult=addNumber(4)
console.log(addResult)

function multiplyby5(num){
    return num*5
}

multiplyby5.power=2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increment=function(){
    this.score++
}

createuser.prototype.printme=function(){
    console.log(`${this.username} score is ${this.score}`)
}

let tea=new createuser("tea",500)
let coffee=new createuser("coffee",450)

tea.printme()
coffee.printme()


const hero=["Iron Man","Spider Man","Superman"]

const superpower={
    Ironman:"Armor",
    SpiderMan:"Sling",
    Superman:"Heat Vision"
}

Object.prototype.show=function(){
    console.log("Power is shown to all the employees")
}

Array.prototype.anothFunc=function(){
    console.log("Specifically for the")
}

superpower.show()
hero.show()

//inheritance

const user2={
    name:"Aman Agrwal",
    email:"amanagarwal016@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user2

//modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anothUser="Frotuner Aman Agarwal"

String.prototype.trueLenth=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True Length ${this.trim().length}`)
}