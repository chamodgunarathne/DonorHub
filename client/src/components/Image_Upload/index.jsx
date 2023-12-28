import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-2">
        <br/>
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {selectedImage && (
        <div className="mb-4">
          <img
            src={selectedImage}
            alt="Uploaded Image"
            className="max-w-md mx-auto h-48 w-48 border-4 rounded-full border-gray-700 shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
