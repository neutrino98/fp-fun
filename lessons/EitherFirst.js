/*
 third lesson
 Either monad
*/

const Either = Right || Left 

const Right = x => 
({
    chain: f => f(x), 
    map: f => Right(f(x)),
    fold: (f, g) => g(x), 
    inspect: () => `Right(${x})`
})


const Left = x => 
({
    chain: f => Left(x), 
    map: f => Left(x),
    fold: (f, g) => f(x), 
    inspect: () => `Left(${x})`
})

const fromNullable = x => 
    x != null ? Right(x) : Left(null)

const findColor = name => 
    fromNullable(({red: '#f4444', blue: '#g4444', grey: '#s4444'})[name])

const result = findColor('green')
                    .map(c => c.slice(1))
                    .fold(_ => 'no color', c => c.toUpperCase())    

//console.log(result)

module.exports = {
    Either: Either, 
    Right: Right, 
    Left: Left,
    fromNullable: fromNullable
}