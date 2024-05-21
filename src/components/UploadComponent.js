import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Resizer from 'react-image-file-resizer';
import { setSelectedFile, setConvertedFile, setFormat } from '../store/imageSlice';

const UploadComponent = () => {
  const dispatch = useDispatch();
  const { selectedFile, convertedFile, format } = useSelector((state) => state.image);

  const handleFileChange = (event) => {
    dispatch(setSelectedFile(event.target.files[0]));
  };

  const handleFormatChange = (event) => {
    dispatch(setFormat(event.target.value));
  };

  const handleUpload = () => {
    if (selectedFile) {
      Resizer.imageFileResizer(
        selectedFile,
        800, // max width
        600, // max height
        format.toUpperCase(),
        100, // quality
        0, // rotation
        (uri) => {
          dispatch(setConvertedFile(uri));
        },
        'base64' // output type
      );
    }
  };

  return (
    <div className="upload-component">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <div className="conversion-options mb-2">
        <label htmlFor="format" className="mr-2">Select Format:</label>
        <select id="format" onChange={handleFormatChange} value={format} className="border p-2">
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="gif">GIF</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mb-2" onClick={handleUpload}>
        Convert
      </button>
      {convertedFile && (
        <div className="result-component">
          <img src={convertedFile} alt="Converted" className="max-w-full h-auto mb-2" />
          <a href={convertedFile} download={`converted.${format}`} className="block bg-yellow-500 text-white px-4 py-2">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
