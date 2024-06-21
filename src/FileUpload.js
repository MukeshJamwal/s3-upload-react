import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [signedUrl, setSignedUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setSignedUrl(event.target.value);
  };

  const handleUpload = async () => {
    if (!file || !signedUrl) {
      alert('Please select a file and provide a signed URL.');
      return;
    }

    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    try {
      await axios.put(signedUrl, file, options);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please check the console for more details.');
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <input
        type="text"
        placeholder="Enter signed URL"
        value={signedUrl}
        onChange={handleUrlChange}
      />
      <button onClick={handleUpload}>
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
