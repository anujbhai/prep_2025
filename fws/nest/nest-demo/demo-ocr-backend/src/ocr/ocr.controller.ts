import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as Tesseract from 'tesseract.js';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('ocr')
export class OcrController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, callback) => {
          if (!file.originalname) {
            return callback(new Error('File original name is missing!'), '');
          }

          const unique_suffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const file_ext = extname(file.originalname) || '.png';

          callback(null, unique_suffix + file_ext);
        }
      })
    })
  )
  async extractText(@UploadedFile() file: any) {
    if (!file) {
      return { error: 'No file uploaded' };
    }

    const result = await Tesseract.recognize(file.path, 'eng');
    return { text: result.data.text }
  }
}
