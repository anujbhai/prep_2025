import { Test, TestingModule } from '@nestjs/testing';
import { OcrController } from './ocr.controller';
import * as Tesseract from 'tesseract.js';
import { Express } from 'express';

jest.mock('tesseract.js', () => ({
  recognize: jest.fn(),
}));

describe('OcrController', () => {
  let controller: OcrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcrController],
    }).compile();

    controller = module.get<OcrController>(OcrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('should return extracted text from an image', async () => {
    const mockFile = { path: 'test-image.png' } as any;

    (Tesseract.recognize as jest.Mock).mockResolvedValue({
      data: { text: 'Sample OCR Text' },
    });

    const result = await controller.extractText(mockFile);
    expect(result.text).toBe('Sample OCR Text');
  });

  it('should return an error if no file is uploaded', async () => {
    const result = await controller.extractText(null);
    expect(result.error).toBe('No file uploaded');
  });
});

