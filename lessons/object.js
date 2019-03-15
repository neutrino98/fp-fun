const myObject = {
    'key1': 1, 
    'key2': 2, 
    'key3': 3
}

/*
    Mapping object
*/ 

const mapValues = object => f => Object.keys(object).reduce((previous, current) => {
    previous[current] = f(myObject[current]) 
    return previous   
}, {})

const mapKeys = object => f => Object.keys(object).reduce((previous, current) => {
    previous[current] = f(current)
    return previous 
}, {})
//const mapValue = object => f => B

//console.log(mapValues(myObject)(x => x * 10))
console.log(mapKeys(myObject)(x => x + '!'))





