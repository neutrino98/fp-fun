/*
    Task monad
 */

const Task = require('data.task')
const fs = require('fs')

const readFile = (filename, enc) => 
    new Task((rej, res) => 
        fs.readFile(filename, enc, (err, contects) => 
            err ? rej(err) : res(contects)))

const writeFile = (filename, content) => 
    new Task((rej, res) => 
        fs.writeFile(filename, content, (err, success) => 
            err ? rej(err) : res(success)))            

const app = () => 
    readFile('./data/config.json', 'utf-8')
    .map(content => {
        console.log(content)
        return content.replace(/8/g, '6')
        //contents.replace(/8/g, '6')
    })
    .chain(contents => writeFile('./data/config1.json', contents))            

app().fork(e => console.log(e), () => console.log('success'))    