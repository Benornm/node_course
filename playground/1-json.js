const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Benor'
data.age = '28'

console.log(data);

fs.writeFileSync('1-json.json', JSON.stringify(data))