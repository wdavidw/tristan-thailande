import fs from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'glob'
import each from 'each'
import sharp from 'sharp'
const __dirname = new URL('.', import.meta.url).pathname

const images = await glob(`${__dirname}/../src/images/*/**/*.{png,jpg,jpeg}`)
await each(images, 10, async (image) => {
  const dirname = path.dirname(image)
  const extname = path.extname(image)
  const basename = path.basename(image, extname)
  const tobasename = `${basename}.1600x800.png`
  if (basename.split('.').length > 1) {
    return
  }
  if (await fs.access(`${dirname}/${tobasename}`).then(() => true).catch(() => false)) {
    return
  }
  await sharp(image)
    .resize(1600, 800, { fit: 'inside' })
    .png({ quality: 80 })
    .toFile(`${dirname}/${tobasename}`)
})
