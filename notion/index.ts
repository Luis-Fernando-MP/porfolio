import { createInterface } from 'readline/promises'

import { getAllNotes } from './generate'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const loadAction = async (task: () => Promise<any>) => {
  const loadingChars = ['|', '/', '-', '\\']
  let index = 0
  const intervalId = setInterval(() => {
    process.stdout.write(`\rCargando ${loadingChars[index]}`)
    index = (index + 1) % loadingChars.length
  }, 100)

  try {
    await task()
  } finally {
    clearInterval(intervalId)
    process.stdout.write('\r')
  }
}

const main = async () => {
  console.clear()
  let option

  do {
    console.log('\n¿Qué deseas hacer?')
    console.log('1. Generar notas')
    console.log('2. Generar series')
    console.log('3. Generar marks')
    console.log('0. Terminar\n')

    option = await rl.question('-> ')
    console.clear()

    if (option === '0') {
      console.log('\n👋 Programa finalizado.')
      break
    }

    const options: Record<string, () => Promise<any>> = {
      '1': () => getAllNotes()
    }

    const task = options[option]

    if (task) await loadAction(task)
    else console.log('\n❌ Opción no válida.')
  } while (option !== '0')

  rl.close()
}

main()
