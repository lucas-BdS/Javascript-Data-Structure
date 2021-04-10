const Stack = require("./src/stack")

const baseConvert = (numDec, base) => {
  const stack = new Stack.Stack()
  const digitos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let resto
  let baseString = ''
  if(base < 2 && base > 36)
    return ''
  if(numDec === 0)
    return 0
  while(numDec > 0){
    resto = Math.floor(numDec % base)
    numDec = Math.floor(numDec / base)
    stack.push(resto)
  }
  while(!stack.isEmpty()){
    baseString += digitos[stack.pop()]
  }
  return baseString
}

console.log('Decimal para Binário.\n')

for(let i = 0; i <= 10; i++){
  console.log(`Dec(${i}) = Bin(${baseConvert(i, 2)})`)
}

console.log('\nDecimal para base Oito(8).\n')

for(let i = 0; i <= 8; i++){
  console.log(`Dec(${i}) = Oct(${baseConvert(i, 8)})`)
}

console.log('\nDecimal para base Dezesseis(16).\n')

for(let i = 0; i <= 16; i++){
  console.log(`Dec(${i}) = Hex(${baseConvert(i, 16)})`)
}

console.log('\nDecimal para base Vinte(20).\n')

for(let i = 0; i <= 40; i++){
  console.log(`Dec(${i}) = Ico(${baseConvert(i, 20)})`)
}