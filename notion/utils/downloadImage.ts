import axios from 'axios'
import fs from 'fs'

interface Props {
  url: string
  filepath: string
}

export default async function downloadImage({ filepath, url }: Props) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on('error', reject)
      .once('close', () => resolve(filepath))
  })
}
