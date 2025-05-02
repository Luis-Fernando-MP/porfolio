import clog from '@notion/helpers/log'
import fs from 'fs'
import path from 'path'

const cleanObsoleteFiles = async (existingIds: string[], folderPath: string, suffix?: string) => {
  const files = await fs.promises.readdir(folderPath)

  const toDelete: string[] = []

  for (const file of files) {
    const fullPath = path.join(folderPath, file)
    const stat = await fs.promises.stat(fullPath)

    // Caso: Archivos
    if (suffix) {
      if (stat.isFile() && file.endsWith(suffix)) {
        const id = file.replace(suffix, '')
        if (!existingIds.includes(id)) toDelete.push(file)
      }
    }
    // Caso: Carpetas
    if (stat.isDirectory()) {
      if (!existingIds.includes(file)) toDelete.push(file)
    }
  }

  for (const name of toDelete) {
    const fullPath = path.join(folderPath, name)
    if (suffix) {
      await fs.promises.unlink(fullPath)
    } else {
      await fs.promises.rm(fullPath, { recursive: true, force: true })
    }
    clog.error(`Eliminado: ${name.slice(0, 30)}`)
  }
}

export default cleanObsoleteFiles
