const Sum = x => 
({
    x, 
    concat: ({x: y}) => Sum(x + y), 
    inspect: _ => `Sum(${x})`
})

Sum.empty = () => Sum(0)

const All = x => 
({
    x, 
    concat: ({x: y}) => All(x && y), 
    inspect: (x,y) => `All(${x && y})`
})

All.empty = () => All(true)

const res = All(true).concat(All(true)).concat(All.empty())


const First = x => 
({
    x, 
    concat: _ => First(x), 
    inspect: _ => `Sum(${x})`
})

const result = Sum(1).concat(Sum(2))

module.exports = {
    Sum: Sum
}
