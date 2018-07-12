const fs = require('fs-promise')
const {Right, Left} = require('./EitherFirst')

const tryCatch = f => {
    try {
        return Right(f())
    } catch(e) {
        return Left(f(e))
    }
}

const getPort = () => 
    tryCatch(() => fs.readFileSync('./data/config.json'))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .fold(e => 3000, 
            c => c.port) 

const result = getPort()
console.log(result)            
