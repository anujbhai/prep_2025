import { openDB } from "idb";

const DB_NAME = 'OCRDatabase';
const STORE_NAME = 'ExtractedTexts';

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const saveExtractedText = async (text: string[]) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  await store.add({ text, timestamp: new Date() });
  await tx.done;
};

export const getAllExtractedTexts = async (): Promise<{ text: string[]; timestamp: Date }[]> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);

  return await store.getAll();
}

