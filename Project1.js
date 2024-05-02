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

const Books=[
    {title:'Book1',genre:'Fiction',publish:1981,edition:2011},
    {title:'Book2',genre:'Non-Fiction',publish:1956,edition:1002},
    {title:'Book3',genre:'Non-Fiction',publish:1930,edition:300},
    {title:'Book4',genre:'Fiction',publish:2004,edition:345},
    {title:'Book4',genre:'Fiction',publish:2021,edition:198},
    {title:'Book5',genre:'Non-Fiction',publish:2012,edition:120},
]

//const userBooks=Books.filter((bk)=>(bk.genre==='Non-Fiction' && bk.publish>2000))
let userBooks=Books.filter((bk)=>bk.genre==='Non-Fiction')
userBooks=Books.filter((bk)=> bk.publish>2000)

console.log(userBooks)

const myNums=[1,2,4,5,23,20]

const result=myNums.reduce(function(acc,curVal){
    console.log(`acc=${acc} and Cur Val=${curVal}`)
    return acc+curVal;
},0)

console.log("Total=",result)


const items=[
    {itemName:'Butter', price:1000},
    {itemName:'Arahar Dal', price:900},
    {itemName:'Mop Set', price:500},
    {itemName:'Mobile', price:9000},
]


const totRes=items.reduce((acc,item)=>acc + item.price,0 )
console.log(`Total =${totRes}`)
