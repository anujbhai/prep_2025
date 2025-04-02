import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllExtractedTexts, saveExtractedText } from "../../utils/indexed_db";

const OCRApp: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  // const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [extractedText, setExtractedText] = useState<string[]>([]);

  useEffect(() => {
    // const stored_texts = localStorage.getItem('extractedText');
    //
    // if (stored_texts) {
    //   setExtractedText(JSON.parse(stored_texts));
    // }
    const fetch_extracted_texts = async () => {
      const texts = await getAllExtractedTexts();
      const all_texts = texts.flatMap(entry => entry.text);

      setExtractedText(all_texts);
    };

    fetch_extracted_texts();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first!');
      return;
    }

    const form_data = new FormData();
    form_data.append('image', image);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/ocr/upload', form_data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // setText(response.data.text);

      const new_text = response.data.text.split("\n").filter((line: string) => line.trim() !== "");

      await saveExtractedText(new_text);

      setExtractedText(prev_texts => [...prev_texts, ...new_text]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>OCR Text Recognition</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      <button onClick={ handleUpload } disabled={loading}>
        { loading ? 'Processing...' : 'Upload and Extract Text' }
      </button>

      {extractedText.length > 0 && (
        <div>
          <h3>Extracted Text:</h3>
          
          <ul>
            {extractedText.map((item, index) => (
              <li key={ index }>{ item }</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OCRApp;

