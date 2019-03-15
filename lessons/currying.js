const modulo = dvr => dvd => dvd % dvr 
const isOdd = modulo(2)
console.log(isOdd(21))

const filter = pred => xs => xs.filter(pred)
const map = f => xs => xs.map(f)
const replace = regex => repl => str => str.replace(regex, repl)
const getAllOdds = filter(isOdd)
const addByOne = map(x => x +1)([1,2,3,4,5,6,7,8,9,10])
const censor = replace(/[aeiou]/ig)('*')
const censorAll = map(censor)

console.log(getAllOdds([1,2,3,4,5,6,7,8,9,10]))
console.log(addByOne)
console.log(censorAll(['hello', 'world']))