const names=['Alice','Bob','Tiff','Bruce','Alice']
const letters=['a','b','a','b','c','e','e','c','d','d','d','d']
const numbers=[-5,25,-19,0,16,0]

const creatObject = names.reduce((acc, word) => { acc[word] = acc[word] ? acc[word] + 1 : 1; return acc; },{})
console.log(creatObject)

console.log(letters.filter((item,index)=>!letters.includes(item,index+1)))
const temp= numbers.filter((item)=>item>0)
console.log(temp.map((item)=>Math.sqrt(item)))