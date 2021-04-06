function Stack() {
  // Atributos Privados
  let count = 0
  let itens = {}

  // Métodos Públicos
  this.push = element => {
    itens[count] = element
    count++
  }

  this.size = () => count

  this.isEmpty = () => count === 0 

  this.pop = () => {
    if(this.isEmpty())
      return undefined
    count--
    let top = itens[count]
    delete itens[count]
    return top
  }

  this.peek = () => {
    if(this.isEmpty())
      return undefined
    return itens[count - 1]
  }

  this.clear = () => {
    count = 0
    itens = {}
    console.log(`\nPilha foi limpa(Método 1).\nPilha vazia? ${this.isEmpty()}\n`)
  }

  this.clear_2 = () => {
    while(!this.isEmpty())
      this.pop()
    console.log(`\nPilha foi limpa(Método 2).\nPilha vazia? ${this.isEmpty()}\n`)
  }

  this.toString = () => {
    if(this.isEmpty())
      return 'Pilha Vazia'
    let objString = `${itens[0]}`
    for(let i = 1; i < count; i++){
      objString = `${objString}, ${itens[i]}`
    }
    return objString
  }

  this.toStringReverse = () => {
    if(this.isEmpty())
      return 'Pilha Vazia'
    let objString = `${itens[0]}`
    for(let i = 1; i < count; i++){
      objString = `${itens[i]}, ${objString}`
    }
    return objString
  }
}

module.exports = {
  Stack
}