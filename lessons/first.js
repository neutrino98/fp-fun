/*
Imperative style

const nextCharFromNumberString_ = str => {
    const trimed = str.trim()
    const number = new Number(trimed)
    const nextNumber = number + 1 
    const char = String.fromCharCode(nextNumber)
    return char.toLowerCase()
}
*/

const Box = x => 
({
    map: f => Box(f(x)),
    fold: f => f(x), 
    inspect: () => `Box(${x})`
})

const nextCharFromNumberString = str => 
    Box(str)
        .map(s => s.trim())
        .map(r => new Number(r))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
        .fold(c => c.toLowerCase())

const result = nextCharFromNumberString('  64    ')

console.log(result)