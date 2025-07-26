import chalk from 'chalk'
import { createInterface } from 'readline/promises'

import { generateMarks } from './databases/marks'
import { generateProjects } from './databases/projects'
import { generateSeries } from './databases/series'
import loadAction from './utils/loadAction'

const rl = createInterface({ input: process.stdin, output: process.stdout })

const main = async () => {
  console.clear()
  let option

  do {
    console.log(chalk.magentaBright('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
    console.log(chalk.bold('🟣 ¿Nuevos cambios?\n'))
    console.log(chalk.yellow('1.') + ' Generar proyectos')
    console.log(chalk.yellow('2.') + ' Generar series')
    console.log(chalk.yellow('3.') + ' Generar marks')
    console.log(chalk.redBright('0. Terminar'))
    console.log(chalk.magentaBright('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'))

    option = await rl.question(chalk.blueBright('-> Elige una opción: '))
    console.clear()

    if (option === '0') {
      console.log(chalk.bold.green('\n👋 Programa finalizado.'))
      break
    }

    const options: Record<string, () => Promise<any>> = {
      '1': () => generateProjects(),
      '2': () => generateSeries(),
      '3': () => generateMarks()
    }

    const task = options[option]

    if (task) await loadAction(task)
    else console.log(chalk.redBright('\n❌ Opción no válida.\n'))
  } while (option !== '0')

  rl.close()
}

main()
