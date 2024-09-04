"use client";
import React, { useState } from "react";

export default function ImageUploadComponent() {
  const [images, setImages] = useState([]);
  const fileInputRef = React.useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-10 md:m-20 border-[#1f5453] border-2">
      <h2 className="text-xl font-semibold mb-4">Image Upload Section</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        ))}
        <div
          className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded-md cursor-pointer"
          onClick={triggerFileInput}
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
          <span className="text-gray-500">Add Image</span>
        </div>
      </div>
      <div
        className={`mt-6 flex justify-center ${
          images.length === 0 ? "hidden" : ""
        }`}
      >
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100"
          onClick={() => alert("Images Submitted")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
