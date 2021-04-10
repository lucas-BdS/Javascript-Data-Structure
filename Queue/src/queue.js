function Queue(){

  // Atributos Privados
  let count = 0
  let first = 0
  let itens = {}

  // Métodos Públicos
  this.enqueue = element => {
    itens[count] = element
    count++
  }

  this.dequeue = () => {
    if(this.isEmpty())
      return undefined
    const result = itens[first]
    delete itens[first]
    first++
    return result
  }

  this.isEmpty = () => this.size() === 0

  this.size = () => count - first

  this.front = () => {
    if(this.isEmpty())
      return undefined
    return itens[first]
  }

  this.clear = () => {
    while(!this.isEmpty())
      this.dequeue()
    console.log(`A fila terminou de ser limpada.`)
  }

  this.toString =() => {
    if(this.isEmpty())
      return ''
    let objString = `${itens[first]}`
    for(let i = first + 1; i < count; i++)
      objString = `${objString}, ${itens[i]}`
    return objString
  }
}

export default {
  Queue
}