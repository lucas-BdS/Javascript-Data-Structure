const Queue = require('./src/queue')

function batataQuente(participantes, num) {
  const queue = new Queue.Queue()
  const eliminados = []
  for(let i = 0; i < participantes.length; i++){
    queue.enqueue(participantes[i])
  }
  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue())
    }
    eliminados.push(queue.dequeue())
  }
  return {
    lista_Eliminados: eliminados,
    vencedor: queue.dequeue()
  }
}
let participantes = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let result = batataQuente(participantes, 7)

result.lista_Eliminados.forEach(nome => {
  console.log(`${nome} foi eliminado.`)
})

console.log(`\nO vencedor(a) foi ${result.vencedor}`)