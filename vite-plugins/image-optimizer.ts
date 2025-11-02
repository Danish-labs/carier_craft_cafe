import sharp from 'sharp';
import { Plugin } from 'vite';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export function imageOptimizer(): Plugin {
  return {
    name: 'image-optimizer',
    async writeBundle(options, bundle) {
      for (const fileName in bundle) {
        if (/\.(jpe?g|png)$/.test(fileName)) {
          const filePath = path.resolve(options.dir!, fileName);
          const imageBuffer = await readFile(filePath);
          
          // Optimize image
          const optimizedImage = await sharp(imageBuffer)
            .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85 })
            .toBuffer();

          // Write optimized image
          await writeFile(
            filePath.replace(/\.(jpe?g|png)$/, '.webp'),
            optimizedImage
          );
        }
      }
    },
  };
}