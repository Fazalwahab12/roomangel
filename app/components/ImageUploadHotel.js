"use client";
import React, { useState } from "react";

export default function ImageUploadComponent() {
  const [images, setImages] = useState([]);

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

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-10 md:m-20 border-blue-500 border-2">
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
        <div className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded-md">
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
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
          className="bg-green-500 text-white px-6 py-2 rounded-md shadow"
          onClick={() => alert("Images Submitted")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
