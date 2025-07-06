const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// create a function that takes a string and returns the string reversed
// Define a function named reverseString that takes a string as input
function reverseString(str) {
  // Initialize an empty string to store the reversed result
  let reversed = '';
  // Loop through the input string from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    // Add the current character to the reversed string
    reversed += str[i];
  }
  // Return the reversed string
  return reversed;
}

// Call reverseString with 'hello' and print the result to the console
console.log(reverseString('hello'));  

// create a function to add 2 numbers
// Define a function named add that takes two numbers as input
function add(a, b) {
  // Return the sum of the two numbers
  return a + b;
}

// Call add with 1 and 2 and print the result to the console
console.log(add(1, 2));

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Files will be stored in 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Generate unique filename with original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure file filter
const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

// Initialize multer with configuration
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>File Upload Demo</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .upload-form { border: 2px dashed #ccc; padding: 20px; text-align: center; margin: 20px 0; }
            .upload-form:hover { border-color: #007bff; }
            input[type="file"] { margin: 10px 0; }
            button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
            button:hover { background: #0056b3; }
            #result { margin-top: 20px; padding: 10px; border-radius: 5px; }
            .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
            .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        </style>
    </head>
    <body>
        <h1>File Upload with Multer</h1>
        <div class="upload-form">
            <form id="uploadForm" enctype="multipart/form-data">
                <input type="file" name="file" accept="image/*" required>
                <br>
                <button type="submit">Upload File</button>
            </form>
        </div>
        <div id="result"></div>
        
        <script>
            document.getElementById('uploadForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(e.target);
                const resultDiv = document.getElementById('result');
                
                try {
                    const response = await fetch('/upload', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const data = await response.json();
                    
                    if (data.success) {
                        resultDiv.className = 'success';
                        resultDiv.innerHTML = \`
                            <h3>Upload Successful!</h3>
                            <p><strong>Filename:</strong> \${data.file.filename}</p>
                            <p><strong>Original Name:</strong> \${data.file.originalname}</p>
                            <p><strong>Size:</strong> \${(data.file.size / 1024).toFixed(2)} KB</p>
                            <p><strong>Type:</strong> \${data.file.mimetype}</p>
                        \`;
                    } else {
                        resultDiv.className = 'error';
                        resultDiv.innerHTML = \`<h3>Upload Failed</h3><p>\${data.message}</p>\`;
                    }
                } catch (error) {
                    resultDiv.className = 'error';
                    resultDiv.innerHTML = \`<h3>Error</h3><p>\${error.message}</p>\`;
                }
            });
        </script>
    </body>
    </html>
  `);
});

// Add file upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // File uploaded successfully
    res.json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading file',
      error: error.message
    });
  }
});

// Add error handling middleware for multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB'
      });
    }
  }
  res.status(500).json({
    success: false,
    message: error.message
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Upload endpoint available at: http://localhost:3000/upload');
});
