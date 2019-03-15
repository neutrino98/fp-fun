const { List } = require('immutable-ext')

const merch = () => 
    List.of(x => y => z => `${x} - ${y} - ${z}`)
    .ap(List(['T-Shirt', 'Sweater']))
    .ap(List(['Small', 'Medium', 'Large']))
    .ap(List(['White', 'Black']))

console.log(merch())    

